import React from 'react';
import './page1.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import HeroVideo from '../HeroVideo';





const About = () => {
    return (
  
        <React.Fragment>


        <Fade>
            <HeroVideo/>
        </Fade>

        <div id="default-version" className="services">
        <section className="lazyload padding-top-normal padding-bottom-normal  section-type-column" 
        data-bg="https://relata.us/" 
        style={{backgroundColor: '#fff', 
            backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-light-paper-texture-textured-background-image_260958.jpg")'}} id="section-about">
          <div className="container">
            <div className="row">
              <div className="twelve columns col">
                <div className="at-above-post-homepage addthis_tool" data-url="https://relata.us/" />
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
        data-bg="https://www.luminatemarketing.com/wp-content/uploads/2014/06/watermark-bottom.png" 
        style={{backgroundColor: '#f5f5f5', backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-light-paper-texture-textured-background-image_260958.jpg")'}}
        >

        
        {/* <div className="row title">
            <h2>What We <span className="gold">Do</span></h2>
          </div>
        */}


          <div className="row section-content">
        <div className="twelve col center text-center">
        <h2 style={{fontWeight: '500', fontSize: '125%'}}>WHAT WE <span className="gold">DO</span></h2>
          <div className="section-content-wrap"><div className="at-above-post-homepage addthis_tool" data-url="https://www.luminatemarketing.com/" />
            <div className="row  homepage-services">
              <div className="service">
                <span className=""/><i class="fas fa-question-circle"></i><p />
                <h3 className="service-head">Social Media Marketing</h3>
                <hr />
                <div className="sub-service">
                  Account Management<br />
                  All Post Writing + Designs<br />
                  Calendars + Scheduling</div>
              </div>
              <div className="service">
                <span className="" /><i class="fas fa-question"></i><p />
                <h3 className="service-head">Social Advertising</h3>
                <hr />
                <div className="sub-service">
                  Highlight a Key Message<br />
                  Fundraisng Campaigns<br />
                  Engage Toward Action
                </div>
              </div>
              <div className="service">
                <span className="" /><i class="fas fa-question-circle"></i><p />
                <h3 className="service-head">Social Media Training</h3>
                <hr />
                <div className="sub-service" style={{color: 'red'}}>
                  Where are,<br />
                  my focken...<br />
                  icons!</div>
              </div>
              <div className="service">
                <span className=""/><i class="fas fa-question"></i><p />
                <h3 className="service-head">Social Media Marketing</h3>
                <hr />
                <div className="sub-service">Organic Posting + Ads<br />
                  Calendars + Scheduling<br />
                  Post Writing &amp; Designs</div>
              </div>
              <div className="service">
                <span className=""/><i class="fas fa-question-circle"></i><p />
                <h3 className="service-head">Live Stream Broadcasting</h3>
                <hr />
                <div className="sub-service">
                Live shows and demonstrations<br/>
                Simultaneous streams <br/>
                </div>
              </div>
            </div>
            <div className="row padding-top-normal" style={{textAlign: 'center'}}>
              <a className="small-btn btn" href="/services/">View All</a>
            </div>
            <p>{/* AddThis Advanced Settings above via filter on the_content */}{/* AddThis Advanced Settings below via filter on the_content */}{/* AddThis Advanced Settings generic via filter on the_content */}{/* AddThis Share Buttons above via filter on the_content */}{/* AddThis Share Buttons below via filter on the_content */}</p>
            <div className="at-below-post-homepage addthis_tool" data-url="https://www.relata.us/" />
            <p>{/* AddThis Share Buttons generic via filter on the_content */}</p>
          </div>
        </div>
      </div>
      </section>
      </div>







      <section className="lazyload padding-top-large padding-bottom-normal text-color-light section-type-column" data-bg="https://amtrakdowneaster.com/sites/default/files/station-images/stations_boston.jpg" 
      style={{backgroundColor: '#fff', 
      backgroundImage: 'url("https://wallpaperaccess.com/full/188673.jpg")'}} id="section-stats">
      <div className="container">
        <div className="row">
          <div className="twelve columns col">
            <div className="at-above-post-homepage addthis_tool" data-url="https://www.luminatemarketing.com/" />
            <div className="row title">
              <h2 className="gold">See <span className="gold">Results</span> In a Whole New Light</h2>
            </div>
            <div className="row homepage-stats">
              <div className="stat">
              <i class="fas fa-star-of-david" style={{fontSize: '500%'}}></i><br/>
                <i className="icon"/><p />
                <div className="stat-num">Where</div>
                <div className="sub-num">are<br />my Icons, Myles?</div>
              </div>
              <div className="stat">
              <i class="fas fa-cross" style={{fontSize: '500%'}}></i><p />
                <div className="stat-num">Brah</div>
                <div className="sub-num">I need these<br />icons</div>
              </div>
              <div className="stat">
                <i class="fas fa-rocket" style={{fontSize: '500%'}}></i><p />
                <div className="stat-num" style={{lineHeight: '24px', paddingBottom: '11px'}}>To be</div>
                <div className="sub-num">transparent<br />and neat</div>
              </div>
              <div className="stat">
              <i class="fas fa-plane-departure" style={{fontSize: '500%'}}></i><p />
                <div className="stat-num">You</div>
                <div className="sub-num">know what<br />I need</div>
              </div>
              <div className="stat">
                <i className="flaticon flaticon-church4" /> <p />
                <div className="stat-num">Lorem</div>
                <div className="sub-num">Ipsum si et<br />dolor, bla bla bla</div>
              </div>
            </div>
            {/* AddThis Advanced Settings above via filter on the_content */}{/* AddThis Advanced Settings below via filter on the_content */}{/* AddThis Advanced Settings generic via filter on the_content */}{/* AddThis Share Buttons above via filter on the_content */}{/* AddThis Share Buttons below via filter on the_content */}
            <div className="at-below-post-homepage addthis_tool" data-url="https://www.luminatemarketing.com/" />
            {/* AddThis Share Buttons generic via filter on the_content */}
          </div>
        </div>
      </div>
    </section>











    

        </React.Fragment>
    );
}

export default About