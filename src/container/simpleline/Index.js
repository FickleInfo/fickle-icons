import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import IconListItem from './IconListItem';
import '../dist/style.css';
import SimpleLineIcon from './dist/simplelineicon.json';
import Header from '../../components/header/Header';
import SearchBox from './SearchBox';

class SimpleLineIconsIndex extends Component {
  render() {
    return (
      <div className="main-body-wrapper"> 
        <Header />      
        <SearchBox />
        <main className="main-content-wrapper"> 
        <div className="container">
          <hr className="section-hr-divider" />
          <section className="icon-list-content-wrapper">           
             <IconListItem ListTitle="Set #1 - Web Application Icons" ListData={SimpleLineIcon} />
           </section>
          </div>               
        </main>
      </div>
    );
  }
}

export default SimpleLineIconsIndex
