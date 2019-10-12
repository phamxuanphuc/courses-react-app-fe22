import React from "react";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import userLink from "../../assets/images/user.png";
import { NavMenu } from "./left-sidebar.constans";
import { NavLink, Link } from "react-router-dom";

const LeftSidebar = ({match}) => {
  console.log(match)
  return (
    <div id="left-sidebar" className="sidebar">
      <div className="navbar-brand">
        <Link to='/dashboard'>
          <Logo className="img-fluid logo" />
          <span>Dashboard</span>
        </Link>
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
            <li className="header">Main</li>
            {NavMenu.map(menu => (
              <li key={menu.id}>
                <NavLink to={menu.href} activeClassName="left-sidebar-active" className='link'>
                  <i className={menu.icon}></i>
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
