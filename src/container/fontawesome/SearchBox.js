import React, { Component } from 'react';
import {Icon} from '@fickleinfo/react-icons';

class SearchBox extends Component {
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
    return (
      <section className="search-box-outer">
         <div className="search-box-content">
           <h2><Icon name="fa fa-heart" /> Fickle FontAwesome Icons </h2>
           <p>Search 1000+ icons from FontAwesome Library, and use to your projects</p>
           <div className="icon-search-box">
            <input className="icon-search-input-box" type="search" placeholder="Search fontawesome icons" />
            <buttton type="submit" className="icon-search-btn"><i className="fa fa-search"></i></buttton>
          </div>
         </div>
      </section>
    );
  }
}

export default SearchBox;
