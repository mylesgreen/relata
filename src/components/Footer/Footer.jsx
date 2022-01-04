import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { StyledFooter } from "./StyledFooter";
import "./footer.css";

const AppFooter = () => {
  // const scrollToTop = () => {
  //     $(window).scrollTop(0);
  // };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <React.Fragment>
      <Row className="myFooter">
        <Col>
          <br />
        </Col>

        <Col style={{ textAlign: "center" }}>
          <p>© 2022 Relata LLC</p>
        </Col>

        <Col>
          <div style={{ float: "right" }}>
            <div className="scroll-to-top-button" onClick={scrollToTop}>
              &nbsp;<i class="fas fa-angle-up"></i>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AppFooter;
