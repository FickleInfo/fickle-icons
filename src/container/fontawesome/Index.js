import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import IconListItem from '../../components/icons/IconListItem';
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
import SearchBox from '../../components/icons/SearchBox';

class FontAwesomeIconsIndex extends Component {
  render() {
    return (
      <div className="main-body-wrapper"> 
        <Header />     
        <section className="search-box-outer">
         <div className="container">
          <div className="search-box-content">
           <h2><Icon name="fa fa-heart" /> Fickle FontAwesome Icons </h2>
           <p>Search 1000+ icons from FontAwesome Library, and use to your projects</p>
           <SearchBox placeholder="Search for FontAwesome  icons" />
         </div>
         </div>
      </section>
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
           <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #1 - Form Control Icons" ListData={FormIcon} />
           </section>  
           <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #1 - Payment Icons" ListData={PaymentIcon} />
           </section>              
           <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #2 - Chart Icons" ListData={ChartsIcon} />
           </section>         
           <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #2 - Currency Icons" ListData={CurrancyIcon} />
           </section> 
           <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #2 - Currency Icons" ListData={VideoPlayerIcon} />
           </section>           
            <hr className="section-hr-divider" />
           <section className="icon-list-content-wrapper">            
             <IconListItem ListTitle="Set #2 - Social Icons" ListData={SocialMediaIcon} />
           </section>             
          </div>               
        </main>
      </div>
    );
  }
}

export default FontAwesomeIconsIndex
