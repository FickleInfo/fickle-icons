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
   console.log(icon,'hi')


  }

  handlePopupClose(e){
    console.log('on close')
     this.setState({
      popupStatus : !this.state.popupStatus
    })
  }

  render() {
    const {iconData, popupStatus} = this.state;
    return (
      <div className="react-fickle-icons-item-outer">
         <div className="react-fickle-icons-header">
          <h2>{this.props.ListTitle}</h2>
        </div>         
        <div className="react-fickle-icons-content">
            <ul>
              {this.props.ListData.map((icon, index) => (
                <li key={index}>
                  <div className="react-fickle-icons-item" onClick={() => this.handleOpenPopup(icon)}>
                    <Icon name={icon.icon_class} />
                    <span>{icon.icon_name}</span>
                  </div>
               </li>
               ))}              
            </ul>
        </div>
        <IconDetails  popupStatus={popupStatus}  iconData={iconData} handlePopupClose={this.handlePopupClose.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const {WebIcon} = state.fontawesomeReducer;
    console.log(WebIcon, 'WebIcon')
    return {WebIcon}
}
// export default withRouter(connect(mapStateToProps)(IconListItem));

export default IconListItem
