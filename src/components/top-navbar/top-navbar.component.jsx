import React from "react";
import { Link } from "react-router-dom";
const TopNavbar = () => (
  <nav className=" top-navbar">
    <div className="container-fluid navbar-menu">
      <div className="navbar-left">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <Link to="./" className="icon-menu" data-toggle="dropdown">
              <i className="lni-alarm" />
            </Link>
          </li>
          <li className="dropdown">
            <Link to="./" className="icon-menu" data-toggle="dropdown">
              <i className="lni-comment" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <Link to="./" className="icon-menu" data-toggle="dropdown">
              <i className="lni-search" />
            </Link>
          </li>
          <li className="dropdown">
            <Link to="./" className="icon-menu" data-toggle="dropdown">
              <i className="lni-power-switch" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="progress-container">
      <div className="progress-bar" id="myBar" />
    </div>
  </nav>
);
export default TopNavbar;
