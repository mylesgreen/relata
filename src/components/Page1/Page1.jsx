import React from 'react';
import './page1.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import HeroVideo from '../HeroVideo';
import QuotesCarousel from '../QuotesCarousel';



const About = () => {
    return (
  
        <React.Fragment>


        <Fade>
            <HeroVideo/>
        </Fade>

        <div id="default-version" className="services">
        <section className="lazyload padding-top-normal padding-bottom-normal  section-type-column" 
        data-bg="" 
        style={{backgroundColor: '#fff',}} 
            id="section-about">
          <div className="container">
            <div className="row">
              <div className="twelve columns col">
                <div className="at-above-post-homepage addthis_tool" data-url="" />
               {/*  <div className="row title">
                  <h2>WHO WE <span className="gold">ARE</span></h2>
                </div> */}
                <div className="row">
                  <div className="twelve col center text-center">
                  <h2 style={{fontWeight: '500', fontSize: '125%'}}>WHO WE <span className="gold">ARE</span></h2>
                    <p className="arapey" style={{fontSize: '22px'}}><em><strong>We promote a relational way of living with each other</strong></em></p>
                    <p className="gold">Relata is a digital media and marketing agency that builds peace and understanding, <br /> promotes dialogue, and realizes our interconnectedness for nonprofits, NGOs, houses of worship, entrepreneurs and small businesses.<br />
                    </p><p className="arapey" style={{fontSize: '22px'}}><em><strong>We believe the digital space can create powerful and lasting change. </strong></em></p>
                  </div>
                </div>
                <div className="at-below-post-homepage addthis_tool" data-url="" />
              </div>
            </div>
          </div>
        </section>
        
        
        
        <section 
        className="lazyload padding-top-normal padding-bottom-normal  bg-image-cover section-type-services" 
        id="section-services" 
        style={{
          backgroundColor: '#f5f5f5'
        }}>

      
      <div className="row section-content">
        <div className="twelve col center text-center">
        <h2 style={{fontWeight: '500', fontSize: '125%'}}>WHAT WE <span className="gold">DO</span></h2>
          <div className="section-content-wrap"><div className="at-above-post-homepage addthis_tool"/>
            <div className="row  homepage-services">
              <div className="service">
                <i class="fas fa-comments"></i><p />
                <h3 className="service-head">Social Media Marketing</h3>
                <hr />
                <div className="sub-service">
                  Account Management<br />
                  All Post Writing + Designs<br />
                  Calendars + Scheduling</div>
              </div>
              <div className="service">
                <i class="fas fa-bullhorn"></i><p />
                <h3 className="service-head">Social Advertising</h3>
                <hr />
                <div className="sub-service">
                  Highlight a Key Message<br />
                  Fundraisng Campaigns<br />
                  Engage Toward Action
                </div>
              </div>
              <div className="service">
                <i class="fas fa-user-graduate"></i><p />
                <h3 className="service-head">Social Media Training</h3>
                <hr />
                <div className="sub-service">
                Skill Up Your Team<br />
                Facilitate More Content<br />
                Customized Instructing <br />
                </div>
              </div>
              <div className="service">
               <i class="fas fa-search-dollar"></i><p />
                <h3 className="service-head">Social Media Marketing</h3>
                <hr />
                <div className="sub-service">Organic Posting + Ads<br />
                  Calendars + Scheduling<br />
                  Post Writing &amp; Designs</div>
              </div>
              <div className="service">
              <i class="fas fa-podcast"></i>
                {/*  <img className="live-stream-icon" src="https://relatacomm.files.wordpress.com/2020/08/live-stream-broadcasting-blank.png"/> */}
                <p />
                <h3 className="service-head">Live Stream Broadcasting</h3>
                <hr />
                <div className="sub-service">
                Live shows and demonstrations<br/>
                Simultaneous streams <br/>
                </div>
              </div>
            </div>
            <br/>
            <a className="small-btn btn" href="/services">View All</a>
            <p>{/* AddThis Advanced Settings above via filter on the_content */}{/* AddThis Advanced Settings below via filter on the_content */}{/* AddThis Advanced Settings generic via filter on the_content */}{/* AddThis Share Buttons above via filter on the_content */}{/* AddThis Share Buttons below via filter on the_content */}</p>
            <div className="at-below-post-homepage addthis_tool" data-url="https://www.relata.us/" />
            <p>{/* AddThis Share Buttons generic via filter on the_content */}</p>
          </div>
        </div>
      </div>
      </section>
      </div>

      <QuotesCarousel/>













    

        </React.Fragment>
    );
}

export default About


{/* 
backgroundImage: 'url("https://relatacomm.files.wordpress.com/2020/08/topbackground.png")'
*/}