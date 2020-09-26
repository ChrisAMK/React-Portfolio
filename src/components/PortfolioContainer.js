import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getContent = () => {
    switch (this.state.currentPage) {
      case "About":
        return <About />
      case "Portfolio":
        return <Portfolio />
      case "Contact":
        return <Contact /> 
      default:
        return <About />
    }
  }

  render() {
    return (

      <div className="pageContainer">
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <div className="container bodyWrapper">
          {this.getContent()}
          
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default PortfolioContainer;