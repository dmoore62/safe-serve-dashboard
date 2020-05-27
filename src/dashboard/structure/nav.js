import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './2019_01_18_daikin_hitachi.png';

class Navigation extends Component {
  

  render() {
    return (
      <nav className="navbar sticky-top bg-white flex-md-nowrap p-0">
     	 <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
       <img className="logo" src={logo} alt="tuveslogo"/>
       </Link>
      		<ul className="navbar-nav px-3">
        		<li className="nav-item text-nowrap">
         <a className="nav-link" href="/">Sign out</a>
        </li>
      </ul>
      </nav>
    );
  }
}

export default Navigation;