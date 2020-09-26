import React from "react";
import {Link} from "react-router-dom";


function NavTabs() {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-light" id="navigation">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html"><img id="ck" src={require("../components/assets/logo.png")} className="logo" alt="Logo"
        title="Click to go to Homepage" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="text-center">
              <Link to="/" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default NavTabs;
