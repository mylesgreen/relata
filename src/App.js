import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import ServicesSection from "./components/ServicesSection";
import About from "./components/About/About";
import $ from "jquery";

const App = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}

      <div style={{ height: "100vh", width: "100vw" }}>
        <h2 style={{ paddingTop: "15%", textAlign: "center" }}>Coming Soon</h2>
      </div>
      <Router>
        {/* //////////////////////////////////////////////////////////////////////// */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/services" component={ServicesSection} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={About} />

          <Route
            render={() => (
              <div style={{ height: "70vh", width: "100vw" }}>
                <h2 style={{ paddingTop: "15%", textAlign: "center" }}>
                  404 Page not found
                </h2>
              </div>
            )}
          />
        </Switch>
        {/* //////////////////////////////////////////////////////////////////////// */}
      </Router>
      <br />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;
