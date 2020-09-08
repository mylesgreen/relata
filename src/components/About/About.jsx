import React from 'react';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';




const About = () => {


    const message = () => {
        return alert('I feel bad about stealing the whole design on these people :( ')
    }
    return (
        <React.Fragment>

        <div id="aboutPage">

        <div class="headline-no-image">
			<div class="row">
				<div class="twelve col">
					<h1 style={{fontWeight: '500'}}>About</h1>
				</div>
			</div>
        </div>
        


        <div id="about" className="services">
        <section className="padding-top-large padding-bottom-normal  section-type-column" style={{backgroundColor: '#fff'}} id="section-16">
        <div className="container">
        <div className="row">
        <div className="twelve columns col">
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <img style={{maxWidth: '70px'}} src="https://relatacomm.files.wordpress.com/2020/08/triquetra-relata-symbol-gold.png" alt="Relata Logo" /></div>
        <div className="title padding-bottom-none">
        <h2>Who We <span className="gold">Are</span> &amp; What We <span className="gold">Do</span></h2>
      </div>

{/*       <button onClick={message}>Click me</button> */}

        <p>&nbsp;</p>
                <div className="row">
                  
                <div className="twelve col">
                  
                    <h3 style={{fontWeight: 'normal', color: '#77787b'}}>Lorem ipsum dolor sit amet, <span style={{fontWeight: 'normal'}}> memento mori <span className="gold">IMPROVE</span></span>.</h3>
                    <p span style={{lineHeight: '20px'}}>Everyday there are people and organizations all over the world who are illuminating their communities through the good work they do. Our job is to spread their light and make it visible through leveraging the power of modern marketing strategies. For over a decade, we have become a proven and trusted partner to Christian organizations as we seek to continually set the standard of marketing excellence for them, and illuminate the messages of Christ in the World.</p>
                    <h3 span style={{fontWeight: 'normal', color: '#77787b'}}>We work with small budgets and <span style={{fontWeight: 'normal'}}><span className="gold">big hearts</span></span>.</h3>
                    <p span style={{lineHeight: '20px'}}>Like many of our clients, we’re able to work with small budgets and big hearts. We understand it’s not always possible to build your internal marketing dream team, since the best messages are also often the most under-funded. That’s why it’s our privilege to serve those who are already serving, and provide our clients with the best quality marketing possible at a price they can afford. Our clients inspire us, by doing God’s work in the world and serving others. So, we help them inspire, and bring their mission to light.</p>
                    <h3 style={{fontWeight: 'normal', color: '#77787b'}}>We’ll make the light of your mission <span style={{fontWeight: 'normal'}}><span className="gold">visible</span></span>.</h3>
                    <p span style={{lineHeight: '20px'}}>We’re good at what we do, which matters to us because this is our calling, and just as much a ministry as a business. We will pray about the work we do for you, and think about your goals and mission outside of ‘working hours’ (likely getting great ideas at random times while driving in the car or taking a shower). Why? Because we love God, we love people, and we love making light visible in the world. Let us show you why we were chosen by Google to join their handful of chosen agencies worldwide, why we are award-winning, and most of all why you can trust us to highLIGHT what you do with excellence.</p>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </section>
                
                
    {/*             
                
                <section className="padding-top-none padding-bottom-normal  section-type-column" style={{backgroundColor: '#fff'}} id="section-10"><div className="container">
                <div className="row"><div className="twelve columns col">
                <div className="title">
                  <h2>Who We <span className="gold">Serve</span></h2>
                </div>    
                <div className="row who-we-serve">
                  <div className="org-type">
                    <i className="flaticon flaticon-store5" /> <p />
                    <h3 className="type">Nonprofits</h3>
                    <hr />
                    <div className="type-text">Focus on your mission or cause, and let us help<br /> find and retain donors<br />  and advocates.</div>
                    <p>
                    </p></div>
                  <div className="org-type">
                    <i className="flaticon flaticon-church4" /> <p />
                    <h3 className="type">Churches</h3>
                    <hr />
                    <div className="type-text">Engage your congregation and local community through relevant messages and campaigns.</div>
                    <p>
                    </p></div>
                  <div className="org-type">
                    <i className="flaticon flaticon-tall8" /> <p />
                    <h3 className="type">Startups</h3>
                    <hr />
                    <div className="type-text">Have a great idea to change the world but need to get it off the ground? That’s where we come in.</div>
                    <p>
                    </p></div>
                  <div className="org-type">
                    <i className="flaticon flaticon-buildings5" /> <p />
                    <h3 className="type">Small Businesses</h3>
                    <hr />
                    <div className="type-text">Take your emerging<br />  business to the next level<br />  by learning about and<br />  reaching customers.</div>
                    <p>
                    </p></div>
                </div>
         <div className="at-below-post-page addthis_tool" data-url="https://www.luminatemarketing.com/about/" />
         </div></div></div></section>
         
    */}   



       







     

<div className="title" style={{textAlign: 'center'}}>
  <h2>The <span className="gold">Team</span></h2>
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
          <p>Digital Specialist</p>
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
          <p>Account Manager</p>
        </div>
      </div>
     
     
     
    </div>

    </Fade>
</div>




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

        </div> {/* Row 1 ends */}
    
    <div className="col center text-center" style={{marginBottom: '3%'}}>
      <a href="/contact" className="btn team">Contact us</a>
    </div>
    
  </Fade>


        



</div>
        
        </React.Fragment>
    );
}

export default About

