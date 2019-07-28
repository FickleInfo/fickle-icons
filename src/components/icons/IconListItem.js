import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, withRouter} from 'react-router-dom';
import {Icon} from '@fickleinfo/react-icons';
import IconDetails from './IconDetails';

class IconListItem extends Component {
  constructor(props){
    super(props)
    this.state={
      popupStatus : false,
      iconData : {}
    }
  }
  handleOpenPopup(icon){
    this.setState({
      popupStatus : !this.state.popupStatus,
      iconData: icon
    })
  }

  handlePopupClose(e){
    console.log('on close')
     this.setState({
      popupStatus : !this.state.popupStatus
    })
  }

  isSearched = (query) => (item) => !query || item.icon_name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  render() {
    const {iconData, popupStatus} = this.state;
    const {ListData, searchedQuery, ListTitle} = this.props;

    let searchResult = [];
    if(ListData.length > 0){   
     searchResult = ListData.filter(this.isSearched(searchedQuery))
    }

    return (
      <div className="react-fickle-icons-item-outer">
         <div className="react-fickle-icons-header">
          <h2>{ListTitle}</h2>
        </div>         
        <div className="react-fickle-icons-content">
            <ul>
              {searchResult.length > 0 ? 
                searchResult.filter(this.isSearched(searchedQuery)).map((icon, index) => (
                <li key={index}>
                  <div className="react-fickle-icons-item" onClick={() => this.handleOpenPopup(icon)}>
                    <Icon name={icon.icon_class} />
                    <span>{icon.icon_name}</span>
                  </div>
               </li>)) : 
                (<li className="no-data-found-container">
                  <div className="no-data-found">
                     <p>No Icons Found!!!</p>
                  </div>
                </li>)}              
            </ul>
        </div>
        <IconDetails  popupStatus={popupStatus}  iconData={iconData} handlePopupClose={this.handlePopupClose.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const {searchedQuery} = state.iconsReducer;
    return {searchedQuery}
}
export default withRouter(connect(mapStateToProps)(IconListItem));
