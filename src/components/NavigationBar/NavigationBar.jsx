import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import $ from 'jquery';


const NavigationBar = () => {

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".top-bar").style.paddingRight = "15px";
    document.querySelector(".top-bar").style.paddingLeft = "15px";
    document.querySelector(".top-bar").style.minHeigth = "30px";
    document.querySelector(".top-bar").style.paddingBottom = "1px";
    document.querySelector(".menu-item-contact").style.fontSize = "16px";
    document.querySelector(".menu-item-about").style.fontSize = "16px";
    document.querySelector(".menu-item-services").style.fontSize = "16px";
    document.querySelector(".top-bar").style.maxHeigth = "50px";


  } else {
    document.querySelector(".top-bar").style.paddingRight = "25px";
    document.querySelector(".top-bar").style.paddingLeft = "25px";
    document.querySelector(".top-bar").style.minHeigth = "65px";
    document.querySelector(".menu-item-contact").style.fontSize = "16px";
    document.querySelector(".menu-item-about").style.fontSize = "16px";
    document.querySelector(".menu-item-services").style.fontSize = "16px";
    document.querySelector("#logo").style.maxHeigth = "80px";



  }
}

    return (
      <React.Fragment>

        <div id="top" />
        {/* Start(ish) of Navbar */}
        <div className="top-bar tb-large tb-transp" id="navbar" style={{transition: '.5s'}}>
          <div className="tb-logo">
            <a href="/" >
              <img 
               src="https://relatacomm.files.wordpress.com/2020/08/relata_full.png" 
               alt="logo" 
               id="logo"
               style={{transition: '.5s'}}
               /></a>
          </div>
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle" className="toggle" />
          <div className="nav-social">
            <nav className="menu">
              <ul className="nav navbar-right navbar-nav">
                <li><a className="menu-item-about" href="https://www.relata.us/about/">About</a></li>
                <li><a className="menu-item-services" href="/services">Services</a></li>
                <li><a className="menu-item-contact" href="https://www.relata.us/contact/">Contact</a></li>
              </ul>
            </nav>
            <div className="header-social">
              <a href="https://www.youtube.com/watch?v=gwUJHNPMUyU&t=2625s" target="_blank"><i className="fa fa-instagram" /></a>
              <a href="https://www.facebook.com/RelataDigital" target="_blank"><i className="fa fa-facebook" /></a>
              <a href="https://twitter.com/relatadigital" target="_blank"><i className="fa fa-twitter" /></a>
              <a href="https://linkedin.com/company/relatadigital" target="_blank"><i className="fa fa-linkedin" /></a>
          {/*     <a href="https://www.youtube.com/watch?v=_uk_6vfqwTA&t=1m16s" target="_blank"><i className="fa fa-vimeo-square" /></a> */}
          </div>  
          </div>
        </div>



      </React.Fragment>
    );
}


export default NavigationBar;

