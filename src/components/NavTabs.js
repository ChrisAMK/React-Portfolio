import React from "react";

function NavTabs(props) {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-light" id="navigation">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html"><img id="ck" src={require("./logo.png")} className="logo" alt="Logo"
        title="Click to go to Homepage" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
            <li className="">
                <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
                  About
                </a>
              </li>
              <li className="">
                <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="">
                <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
                  Contact
                </a>
              </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default NavTabs;
