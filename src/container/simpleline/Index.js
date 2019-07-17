import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import IconListItem from './IconListItem';
import '../dist/style.css';
import WebIcon from '../dist/fontawesome-web.json';
import FormIcon from '../dist/fontawesome-form.json';
import SocialMediaIcon from '../dist/fontawesome-social.json';
import GeneralIcon from '../dist/fontawesome-general.json';
import ChartsIcon from '../dist/fontawesome-charts.json';
import CurrancyIcon from '../dist/fontawesome-currency.json';
import FileTypeIcon from '../dist/fontawesome-filetype.json';
import PaymentIcon from '../dist/fontawesome-payment.json';
import VideoPlayerIcon from '../dist/fontawesome-video-player.json';
import {Icon} from '@fickleinfo/react-icons';
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
             <IconListItem ListTitle="Set #1 - Web Application Icons" ListData={WebIcon} />
           </section> 
           <hr className="section-hr-divider" />
    		   <section className="icon-list-content-wrapper">        		
	    	     <IconListItem ListTitle="Set #1 - General Icons" ListData={GeneralIcon} />
	    	   </section>
           <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #1 - File Types Icons" ListData={FileTypeIcon} />
           </section>           
          </div>               
        </main>
      </div>
    );
  }
}

export default SimpleLineIconsIndex
