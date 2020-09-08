import React from 'react';
import './page1.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import HeroVideo from '../HeroVideo';
import QuotesCarousel from '../QuotesCarousel';
import Footer from '../Footer/Footer';



const About = () => {
    return (
  
        <React.Fragment>

        <HeroVideo/>

        <section className="lazyload padding-top-normal padding-bottom-normal  section-type-column" 
        data-bg="" 
        style={{backgroundColor: '#fff',}} 
        id="section-about">
            
        <Fade>

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
                    <p className="arapey" style={{fontSize: '22px'}}><em><strong>We promote a relational understanding of the world.</strong></em></p>
                    <p className="gold">Relata is a digital media and marketing agency that builds peace and understanding, <br /> promotes 
                    dialogue, and realizes our interconnectedness for nonprofits, NGOs, labor organizations, houses of worship, small businesses and  entrepreneurs.<br />
                    </p><p className="arapey" style={{fontSize: '22px'}}><em><strong>We believe the digital space can create powerful and lasting change.</strong></em></p>
                  </div>
                </div>
                <div className="at-below-post-homepage addthis_tool" data-url="" />
              </div>
            </div>
            </div>
            </Fade>
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
            <Fade>
              <div className="service">
                <i class="fas fa-comments"></i><p />
                <h3 className="service-head">Social Media Marketing</h3>
                <hr />
                <div className="sub-service">
                  Account Management<br />
                  All Post Writing & Designs<br />
                  Calendars & Scheduling</div>
              </div>
              <div className="service">
              <i class="fas fa-palette"></i><p />
                <h3 className="service-head">Creative Direction</h3>
                <hr />
                <div className="sub-service">
                Art direction & design <br/>
                Video production<br/>
                Branding style guides
                </div>
              </div>
              <div className="service">
              <i class="fas fa-podcast"></i>
                {/*  <img className="live-stream-icon" src="https://relatacomm.files.wordpress.com/2020/08/live-stream-broadcasting-blank.png"/> */}
                <p />
                <h3 className="service-head">Live Stream Broadcasting</h3>
                <hr />
                <div className="sub-service">
                Live Shows & Demos <br/>
                Simultaneous Streams <br/>
                Graphic Production
                </div>
              </div>
              <div className="service">
                <i class="fas fa-pencil-alt"></i><p />
                <h3 className="service-head">Editorial services</h3>
                <hr />
                <div className="sub-service">
                Writing & Revising<br/>
                Feature Articles & Essays<br/>
                Earned & Paid Media
                </div>
              </div>
              <div className="service">
              <i class="fas fa-bullhorn"></i>
                <p />
                <h3 className="service-head">Social Advertising</h3>
                <hr />
                <div className="sub-service">
                Logos + Brand Guides<br/>
                Highlight a Key Message<br/>
                Fundraising Campaigns
                </div>
              </div>
              </Fade>
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



    <section className="bg-img fixed padding-top-normal padding-bottom-large  bg-image-cover section-type-about row-1" id="section-team" style={{backgroundColor: '#fff'}}>
     

    <div className="title" style={{textAlign: 'center'}}>
      <h2>Meet the <span className="gold">Team</span></h2>
    </div>
    <Fade>
        <div className="grid-mt twelve col">
          <div className="grid-ms">
            <div className="overlay-item">
              <span>
              </span>
              <img src="https://alfredorafael.com/wp-content/uploads/2019/03/circlePicture.png" alt="Alfredo R. Pabon" className="lazyload responsive-img" />
            </div>
            <div className="e-info">
              <h3>Alfredo</h3>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="grid-ms">
            <div className="overlay-item">
              <span>
              </span>
              <img src="https://relatacomm.files.wordpress.com/2020/08/erica-digital-specialist.png" alt="Erica" className="lazyload responsive-img" />
            </div>
            <div className="e-info">
              <h3>Erica</h3>
              <p>Digital Coordinator</p>
            </div>
          </div>
          <div className="grid-ms">
            <div className="overlay-item">
              <span>
              </span>
              <img src="https://relatacomm.files.wordpress.com/2020/08/tala-account-manager.png" alt="Tala" className="lazyload responsive-img" />
            </div>
            <div className="e-info">
              <h3>Tala</h3>
              <p>Data Lead</p>
            </div>
          </div>
         
         
         
        </div>

        </Fade>





<Fade>
        <div className='row-2'>
        
            <div className="grid-mt twelve col">
              
              <div className="grid-ms">
                <div className="overlay-item">
                  <span>
                  </span>
                  <img src="https://relatacomm.files.wordpress.com/2020/09/chris-data.png" alt="Chris" className="lazyload responsive-img" />
                </div>
                <div className="e-info">
                  <h3>Chris</h3>
                  <p>Video & Graphics</p>
                </div>
              </div>
              <div className="grid-ms">
                <div className="overlay-item">
                  <span>
                  </span>
                  <img src="https://relatacomm.files.wordpress.com/2020/08/myles.jpg" alt="Myles" className="lazyload responsive-img" />
                </div>
                <div className="e-info">
                  <h3>Myles</h3>
                  <p>Principal</p>
                </div>
              </div>
             
             
             
            </div>
    
            </div> {/* Row 2 ends */}
        
        <div className="col center text-center" style={{marginBottom: '3%'}}>
          <a href="/about" className="btn team">More about us</a>
        </div>
        
      </Fade>

    </section>




        </React.Fragment>
    );
}

export default About


{/* 
backgroundImage: 'url("https://relatacomm.files.wordpress.com/2020/08/topbackground.png")'
*/}