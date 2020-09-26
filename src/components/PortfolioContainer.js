import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class PortfolioContainer extends Component {

  render() {
    return (

      <Router>
        <div className="pageContainer">
          <NavTabs/>
            <Switch>
              <div className="container bodyWrapper">
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </div>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default PortfolioContainer;
