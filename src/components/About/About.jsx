import React from "react";
import { Container } from "reactstrap";
import Fade from "react-reveal/Fade";
import Footer from "../Footer/Footer";
import "./about.css";

const About = () => {
  const message = () => {
    return alert(
      "I feel bad about stealing the whole design on these people :( "
    );
  };
  return (
    <React.Fragment>
      <div id="aboutPage">
        <div class="headline-no-image">
          <div class="row">
            <div class="twelve col">
              <h1 style={{ fontWeight: "500" }}>About</h1>
            </div>
          </div>
        </div>

        <div id="about" className="services">
          <section
            className="padding-top-large padding-bottom-normal  section-type-column"
            style={{ backgroundColor: "#fff" }}
            id="section-16"
          >
            <div className="container">
              <div className="row">
                <div className="twelve columns col">
                  <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <img
                      style={{ maxWidth: "70px" }}
                      src="https://relatacomm.files.wordpress.com/2020/08/triquetra-relata-symbol-gold.png"
                      alt="Relata Logo"
                    />
                  </div>
                  <div className="title padding-bottom-none">
                    <h2>
                      Who We <span className="gold">Are</span> &amp; What We{" "}
                      <span className="gold">Do</span>
                    </h2>
                  </div>

                  {/*       <button onClick={message}>Click me</button> */}

                  <p>&nbsp;</p>
                  <div className="row">
                    <div className="twelve col">
                      <h3 style={{ fontWeight: "normal", color: "#77787b" }}>
                        Digital excellence for individuals and organizations is
                        our <span className="gold">PASSION</span>.
                      </h3>
                      <p span style={{ lineHeight: "20px" }}>
                        We depend on each other – and we flourish when we
                        understand, see each other’s humanity and take actions
                        to promote our mutual well-being. Relata is a digital
                        media agency focused on building peace and
                        understanding, promoting dialogue, and realizing our
                        interconnectedness. We believe that digital connections
                        can facilitate meaningful and lasting transformation for
                        all our relations.
                      </p>

                      <h3
                        span
                        style={{ fontWeight: "normal", color: "#77787b" }}
                      >
                        Your mission{" "}
                        <span style={{ fontWeight: "normal" }}>
                          <span className="gold">MATTERS</span>
                        </span>
                        .
                      </h3>
                      <p span style={{ lineHeight: "20px" }}>
                        Whether you’re a small SaaS start-up in the healthcare
                        field or an NGO focused on alleviating poverty, we
                        achieve digital marketing excellence with all of our
                        clients. <br />
                        It is our privilege to serve individuals, small
                        businesses and organizations that want to make our world
                        more peaceful, respectful and interconnected. Our
                        experienced team will be happy to fulfill your needs in
                        the digital space.
                      </p>
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

          <div className="title" style={{ textAlign: "center" }}>
            <h2>
              The <span className="gold">Team</span>
            </h2>
          </div>

          <Fade>
            <div className="grid-mt twelve col">
              <div className="grid-ms">
                <div className="overlay-item">
                  <span></span>
                  <img
                    src="https://rmrdetailing.com/wp-content/uploads/2021/10/Alfredo-picture.png"
                    alt="Alfredo R. Pabon"
                    className="lazyload responsive-img"
                  />
                </div>
                <div className="e-info">
                  <h3>Alfredo</h3>
                  <p>Web Developer</p>
                </div>
              </div>
              <div className="grid-ms">
                <div className="overlay-item">
                  <span></span>
                  <img
                    src="https://relatacomm.files.wordpress.com/2020/08/erica-digital-specialist.png"
                    alt="Erica"
                    className="lazyload responsive-img"
                  />
                </div>
                <div className="e-info">
                  <h3>Erica</h3>
                  <p>Digital Specialist</p>
                </div>
              </div>
              <div className="grid-ms">
                <div className="overlay-item">
                  <span></span>
                  <img
                    src="https://relatacomm.files.wordpress.com/2020/08/tala-account-manager.png"
                    alt="Tala"
                    className="lazyload responsive-img"
                  />
                </div>
                <div className="e-info">
                  <h3>Tala</h3>
                  <p>Account Manager</p>
                </div>
              </div>
            </div>{" "}
            {/* first row ends */}
          </Fade>

          <Fade>
            <div className="row-2">
              <div className="grid-mt col row-2-fix" style={{}}>
                <div className="grid-ms">
                  <div className="overlay-item">
                    <span></span>
                    <img
                      src="https://relatacomm.files.wordpress.com/2020/09/chris-data.png"
                      alt="Chris"
                      className="lazyload responsive-img"
                    />
                  </div>
                  <div className="e-info">
                    <h3>Chris</h3>
                    <p>Video & Graphics</p>
                  </div>
                </div>
                <div className="grid-ms">
                  <div className="overlay-item">
                    <span></span>
                    <img
                      src="https://relatacomm.files.wordpress.com/2020/08/myles.jpg"
                      alt="Myles"
                      className="lazyload responsive-img"
                    />
                  </div>
                  <div className="e-info">
                    <h3>Myles</h3>
                    <p>Digital Lead</p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Row 2 ends */}
            <div
              className="col center text-center"
              style={{ marginBottom: "3%" }}
            >
              <a href="/contact" className="btn team">
                Contact us
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
