import React from "react";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import userLink from "../../assets/images/user.png";
import { NavMenu } from "./left-sidebar.constans";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div id="left-sidebar" className="sidebar">
      <div className="navbar-brand">
        <a href="index.html">
          <Logo className="img-fluid logo" />
          <span>Dashboard</span>
        </a>
      </div>
      <div className="sidebar-scroll">
        <div className="user-account">
          <div className="user_div">
            <img src={userLink} className="user-photo" alt="User Profile" />
          </div>
          <div className="dropdown">
            <span>Welcome,</span>
            <br />
            <strong>Louis Pierce</strong>
          </div>
        </div>
        <nav id="left-sidebar-nav" className="sidebar-nav">
          <ul id="main-menu" className="metismenu">
            <li class="header">Main</li>
            {NavMenu.map(menu => (
              <li>
                <NavLink to={menu.href} className='link'>
                  <i class={menu.icon}></i>
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default LeftSidebar;
