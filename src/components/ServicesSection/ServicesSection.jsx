import React from "react";
import Footer from "../Footer/Footer";
import "./servicesSection.css";

const ServicesSection = () => {
  return (
    <React.Fragment>
      <div id="servicesPage">
        <div class="headline-no-image" style={{ marginBottom: "5%" }}>
          <div class="row">
            <div class="twelve col">
              <h1 style={{ fontWeight: "500" }}>Services</h1>
            </div>
          </div>
        </div>

        <div className="twelve columns col" style={{ marginBottom: "6%" }}>
          <div className="row">
            <div className="twelve col">
              <div className="row services-listing">
                <div className="service" style={{ marginBottom: "12%" }}>
                  <i class="fas fa-video"></i>
                  <p />
                  <h3 className="service-head">
                    Video <br /> Production
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Promo Videos <br />
                    Social Media Videos <br />
                    Evergreen Videos
                  </div>
                </div>
                <div className="service">
                  {" "}
                  {/* data-toggle="modal" data-target="#exampleModal" */}
                  <i class="fas fa-comments"></i>
                  <p />
                  <h3 className="service-head">Social Media Marketing</h3>
                  <hr />
                  <div className="sub-service">
                    Account Management
                    <br />
                    Post Writing & Designs
                    <br />
                    Calendars & Scheduling
                  </div>
                </div>
                <div className="service">
                  <i class="fas fa-palette"></i>
                  <p />
                  <h3 className="service-head">
                    Creative <br />
                    Direction
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Art direction & design <br />
                    Video production
                    <br />
                    Branding style guides
                  </div>
                </div>

                <div className="service">
                  <i class="fas fa-pencil-alt"></i>
                  <p />
                  <h3 className="service-head">
                    Editorial <br />
                    services
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Writing & Revising
                    <br />
                    Feature Articles & Essays
                    <br />
                    Earned & Paid Media
                  </div>
                </div>

                <p />
              </div>
              <div className="row services-listing">
                <div className="service">
                  <i class="fas fa-people-arrows"></i>
                  <p />
                  <h3 className="service-head">
                    CLOUD <br />
                    MANAGEMENT
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Management of Cloud Computing Products, Including Storage,
                    Email and Messaging
                  </div>
                </div>
                <div className="service">
                  <i class="fas fa-user-graduate"></i>
                  <p />
                  <h3 className="service-head">
                    SPOKESPERSON <br /> TRAINING
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Develop Your Online Presence and Personality for Enhanced
                    Brand Recognition
                  </div>
                </div>
                <div className="service">
                  <i class="fas fa-podcast"></i>

                  <p />
                  <h3 className="service-head">
                    PODCAST <br />
                    PRODUCTION
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Full Editing, Mixing and Distribution Services for Audio and
                    Video Podcasts
                  </div>
                </div>
                <div className="service">
                  <i class="fas fa-bullhorn"></i>
                  <p />
                  <h3 className="service-head">
                    Social <br />
                    Advertising
                  </h3>
                  <hr />
                  <div className="sub-service">
                    Logos + Brand Guides
                    <br />
                    Fundraising Campaigns
                    <br />
                    Highlight a Key Message
                  </div>
                </div>
                <p />
              </div>
              <p />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ServicesSection;
