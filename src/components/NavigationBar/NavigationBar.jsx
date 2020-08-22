import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import $ from 'jquery';


const NavigationBar = () => {

    return (
      <React.Fragment>

      <div>
        <div id="top" />
        {/* Start(ish) of Navbar */}
        <div className="top-bar tb-large tb-transp">
          <div className="tb-logo">
            <a href="https://www.relata.us/">
              <img src="https://relata.us/wp-content/uploads/2020/08/Screen-Shot-2020-08-19-at-2.46.59-AM.png" alt="logo" /></a>
          </div>
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle" className="toggle" />
          <div className="nav-social">
            <nav className="menu">
              <ul className="nav navbar-right navbar-nav">
                <li><a href="https://www.relata.us/about/">About</a></li>
                <li><a href="https://www.relata.us/services/">Services</a></li>
                <li><a href="https://www.relata.us/pricing/">Pricing</a></li>
                <li><a href="https://www.relata.us/contact/">Contact</a></li>
              </ul>
            </nav>
            <div className="header-social">
              <a href="https://www.youtube.com/watch?v=gwUJHNPMUyU&t=2625s" target="_blank"><i className="fa fa-instagram" /></a>
              <a href="https://www.jordanbpeterson.com/political-correctness/equity-when-the-left-goes-too-far/" target="_blank"><i className="fa fa-facebook" /></a>
              <a href="https://www.lawenforcementtoday.com/brooklyn-college-professor-math-reeks-of-white-supremacist-patriarchy/" target="_blank"><i className="fa fa-twitter" /></a>
              <a href="https://www.google.com/search?q=effects+of+ab5&oq=Effects+of+AB5&aqs=chrome.0.0.4066j0j1&sourceid=chrome&ie=UTF-8" target="_blank"><i className="fa fa-linkedin" /></a>
              <a href="https://www.youtube.com/watch?v=_uk_6vfqwTA&t=1m16s" target="_blank"><i className="fa fa-vimeo-square" /></a> </div>
          </div>
        </div>
      </div>



      </React.Fragment>
    );
}


export default NavigationBar;

