import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon} from '@fickleinfo/react-icons';
import IconListItem from '../../components/icons/IconListItem';
import '../dist/style.css';
import Header from '../../components/header/Header';
import SearchBox from '../../components/icons/SearchBox';

class SimpleLineIconsIndex extends Component {
  render() {
    return (
      <div className="main-body-wrapper"> 
         <Header />     
         <section className="search-box-outer">
          <div className="container">
           <div className="search-box-content">
             <h2><Icon name="fa fa-bolt" /> Fickle SimpleLine Icons </h2>
             <p>Search icons from SimpleLine Icons Library, and use to your projects</p>
             <SearchBox placeholder="Search for SimpleLine icons" />
           </div>
          </div>
        </section>
        <main className="main-content-wrapper"> 
        <div className="container">
          <hr className="section-hr-divider" />
          <section className="icon-list-content-wrapper">        
              {this.props.SimpleLineIconList.length > 0 ? 
               (<IconListItem ListTitle={this.props.SimpleLineIconList.length + " - Simple Line Icons" } ListData={this.props.SimpleLineIconList} />) :
               (<p>No Data Found </p>)}
           </section>
          </div>               
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const {SimpleLineIconList, searchedQuery} = state.iconsReducer;
    return {SimpleLineIconList, searchedQuery}
}
export default withRouter(connect(mapStateToProps)(SimpleLineIconsIndex));