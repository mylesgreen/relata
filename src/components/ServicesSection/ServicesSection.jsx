import React from 'react';
import './servicesSection.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';






const ServicesSection = () => {
    return (
  
        <React.Fragment>

        <div style={{height: '100vh'}}>

        <div class="headline-no-image">
			<div class="row">
				<div class="twelve col">
					<h1>Services</h1>
				</div>
			</div>
        </div>
        


        





        <div className="twelve columns col">
        
        <div className="row">

        <div className="twelve col">

          <div className="row services-listing">

            <div className="service">

              <i class="fas fa-comments"></i><p />
              <h3 className="service-head">Social Media Marketing</h3>
              <hr />
              <div className="sub-service">
              Account Management<br />
              All Post Writing + Designs<br />
              Calendars + Scheduling</div>
              <p>                <a className="small-btn btn" href="/work/">See Our Work</a>
              </p></div>
            <div className="service">
            <i class="fas fa-comments"></i><p />
            <h3 className="service-head">Live Stream Broadcasting</h3>
              <hr />
              <div className="sub-service">
              Live Shows & Demonstrations<br />
              Simultaneous Streams <br />
              Graphics & Content Production</div>
              <p>                <a className="small-btn btn" href="/work/?tag=strategy">See Our Work</a>
              </p></div>
            <div className="service">
              <span className="flaticon flaticon-article" /><p />
              <h3 className="service-head">Social Advertising</h3>
              <hr />
              <div className="sub-service">Logos + Brand Guides<br />
              Highlight a Key Message<br />
              Fundraising Campaigns
              </div>
              <p>                <a className="small-btn btn" href="/work/?tag=branding">See Our Work</a>
              </p></div>
            <div className="service">
              <span className="flaticon flaticon-imac" /><p />
              <h3 className="service-head">Branding & Design</h3>
              <hr />
              <div className="sub-service">
              Logos + Brand Guides<br />
              Digital + Print Designs<br />
              All Aspects of Graphic Design
              </div>
              <p>                <a className="small-btn btn" href="/work/?tag=website">See Our Work</a>
              </p></div>
            <p /></div>
          <div className="row services-listing">
            <div className="service">
              <span className="flaticon flaticon-play43" /><p />
              <h3 className="service-head">Social Media Consultation</h3>
              <hr />
              <div className="sub-service">
              Audit of All Social Channels<br />
              Set Goals for Growth<br />
              Understand Area of Opportunity</div>
              <p>                <a className="small-btn btn" href="/work/?tag=video">See Our Work</a>
              </p></div>
            <div className="service">
              <span className="flaticon flaticon-double7" /><p />
              <h3 className="service-head">Social Media Training</h3>
              <hr />
              <div className="sub-service">
              Skill Up Your Team<br />
              Facilitate More Content<br />
              Customized Instructing</div>
              <p>                <a className="small-btn btn" href="/work/?tag=social-media">See Our Work</a>
              </p></div>
            <div className="service">
              <span className="flaticon flaticon-magnifier13" /><p />
              <h3 className="service-head">Ghostwriting<br />
                Ads</h3>
              <hr />
              <div className="sub-service">
              Writing, Research & Revising<br />
              Feature Articles & Essays <br />
              Publishing Consultancy
              </div>
              <p>                <a className="small-btn btn" href="/work/?tag=google">See Our Work</a>
              </p></div>
            <div className="service">
              <span className="flaticon flaticon-email20" /><p />
              <h3 className="service-head">Video & Motion Graphics</h3>
              <hr />
              <div className="sub-service">
              Promotional Videos<br />
              Footage & Animation<br />
              Engaging Storytelling
              </div>
              <p>                <a className="small-btn btn" href="/work/?tag=campaign">See Our Work</a>
              </p></div>
            <p /></div>
          <p /></div>
      </div>
      </div>




</div>
        
        </React.Fragment>
    );
}

export default ServicesSection

