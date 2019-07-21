import React, { Component } from 'react';
import {Icon} from '@fickleinfo/react-icons';

class SearchBox extends Component {
  constructor(props){
    super(props)
  }
 

   handleOnchange(e){
      if(e.target.checkValidity()){
          e.target.parentElement.classList.remove('has-error')
          // this.props.dispatch(changeSearchQuery(e.target.value));
      }else{
        e.target.parentElement.classList.add('has-error')
        // this.props.dispatch(changeSearchQuery(''));
      }
      // document.querySelector('#reset-category').classList.add('show');
    }

   handleOnBlur(e){
      if(e.target.value===''){
        document.getElementById("iconSearchForm").reset();
        e.target.parentElement.classList.remove('has-error')
      }
    }
     handleSearchFormSubmit(e){
      e.preventDefault();
    }
  isSearched = (query) => (item) => !query || item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  render() {
    return (
      <section className="search-box-outer">
         <div className="search-box-content">
           <h2><Icon name="fa fa-bolt" /> Fickle SimpleLine Icons </h2>
           <p>Search icons from SimpleLine Icons Library, and use to your projects</p>
           <form id="iconSearchForm" method="#" onSubmit={this.handleSearchFormSubmit.bind(this)}>
              <div className="icon-search-box">
                <input type="search" 
                     name='hub-search' 
                     placeholder="Search for SimpleLine icons"
                     id="search-box"
                     pattern={"([a-zA-Z0-9]+\\s)*[a-zA-Z0-9]+$"}
                     maxLength={100}
                     minLength={1}
                     required={true}
                     onBlur={this.handleOnBlur.bind(this)}
                     onChange={this.handleOnchange.bind(this)}
                     className="icon-search-input-box" />           
              <buttton type="submit" className="icon-search-btn"><i className="fa fa-search"></i></buttton>
            </div>
            <div className="help-block with-errors">Please enter a valid search keyword.</div>
          </form>
         </div>
      </section>
    );
  }
}

export default SearchBox;
