import React, { Component } from 'react';
import {Icon} from '@fickleinfo/react-icons';
import {NavLink} from 'react-router-dom';
import './dist/style.css';

class Header extends Component {
  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="header-navbar">
            <div className="logo-section">
                <h3 className="logo-text">Fickle<strong>Icon</strong></h3>
            </div>
            <nav className="header-navigation">
             <ul className="header-menu-list">
               <li>
                <NavLink to={'/fontawesome/'}>
                	<span>FontAwesome</span>
                </NavLink>
               </li>
               <li>
                <NavLink to={'/simpleline/'}>
                	<span>SimpleLine</span>
                </NavLink>
               </li>
               <li>
                <NavLink to={"#"}>
                	<span>Material</span>
                </NavLink>
               </li>
               <li>
                <NavLink to={"#"}>
                	<span>SVG</span>
                </NavLink>
               </li>
             </ul>
            </nav>
         </div>
         </div>
      </header>
    );
  }
}

export default Header;
