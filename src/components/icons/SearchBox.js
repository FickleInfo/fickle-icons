import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon} from '@fickleinfo/react-icons';
import {changeSearchedQuery} from '../../actions/simpleLineAction';

class SearchBox extends Component {
  constructor(props){
    super(props)
  }
 

   handleOnchange(e){
      if(e.target.checkValidity()){
          this.props.dispatch(changeSearchedQuery(e.target.value));
      }else{
        e.target.parentElement.classList.add('has-error')
        this.props.dispatch(changeSearchedQuery(''));
      }
    }

    handleSearchFormSubmit(e){
      e.preventDefault();
    }

  render() {
    return (
           <form id="iconSearchForm" method="#" onSubmit={this.handleSearchFormSubmit.bind(this)}>
              <div className="icon-search-box">
                <input type="search" 
                     name='icon-search' 
                     placeholder={this.props.placeholder}
                     id="search-box"
                     pattern={"([a-zA-Z0-9]+\\s)*[a-zA-Z0-9]+$"}
                     maxLength={100}
                     minLength={1}
                     required={true}
                     onChange={this.handleOnchange.bind(this)}
                     className="icon-search-input-box" />           
              <buttton type="submit" className="icon-search-btn"><i className="fa fa-search"></i></buttton>
            </div>
            <div className="help-block with-errors">Please enter a valid search keyword.</div>
          </form>
    );
  }
}

function mapStateToProps(state) {
    const {SimpleLineIconList, searchedQuery } = state.iconsReducer;
    console.log(searchedQuery, SimpleLineIconList,'>>>>>>>>>>>>>>>>>>>>>>>>>>..searchedQuerysearchedQuery')
    return {searchedQuery, SimpleLineIconList}
}
export default withRouter(connect(mapStateToProps)(SearchBox));