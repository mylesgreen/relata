import React from "react";
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

        <div className="twelve columns col">
          <div className="row">
            <div className="twelve col">
              <div className="row services-listing">
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
                <div className="service" style={{ marginBottom: "12%" }}>
                  <i class="fas fa-video"></i>
                  <p />
                  <h3 className="service-head">Video & Motion Graphics</h3>
                  <hr />
                  <div className="sub-service">
                    Promotional Videos <br />
                    Engaging Storytelling <br />
                    Video & Animation
                  </div>
                </div>
                <p />
              </div>
              <p />
            </div>
          </div>
        </div>

        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Customizable Modal Here
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p style={{ fontSize: "120%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque fermentum ligula vitae dolor aliquet, maximus
                    egestas dolor blandit. Duis dictum enim vitae tellus
                    elementum, id luctus dolor sodales. Cras viverra egestas
                    nisl in pellentesque. Nulla molestie nulla quis nibh
                    commodo, vel egestas ipsum tempus. Cras justo turpis,
                    sodales non nisl vel, blandit efficitur nisi. Vivamus at
                    purus eget tellus ullamcorper aliquam et ut lacus.
                    Pellentesque fermentum ligula vitae dolor aliquet, maximus
                    egestas dolor blandit. Duis dictum enim vitae tellus
                    elementum, id luctus dolor sodales. Cras viverra egestas
                    nisl in pellentesque. Nulla molestie nulla quis nibh
                    commodo, vel egestas ipsum tempus. Cras justo turpis,
                    sodales non nisl vel, blandit efficitur nisi.
                  </p>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesSection;
