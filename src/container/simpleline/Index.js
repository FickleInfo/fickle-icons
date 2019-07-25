import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import IconListItem from '../../components/icons/IconListItem';
import '../dist/style.css';
import SimpleLineIcon from './dist/simplelineicon.json';
import Header from '../../components/header/Header';
import SearchBox from './SearchBox';

class SimpleLineIconsIndex extends Component {
  isSearched = (query) => (item) => !query || item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  render() {
    return (
      <div className="main-body-wrapper"> 
        <Header />      
        <SearchBox />
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
    const {SimpleLineIconList} = state.simplelineReducer;
    console.log(SimpleLineIconList, 'SimpleLineIconList')
    return {SimpleLineIconList}
}
export default withRouter(connect(mapStateToProps)(SimpleLineIconsIndex));