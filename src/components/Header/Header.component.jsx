import React from "react";
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.png"
import $ from 'jquery';

const Header = () => (
 <header className="header-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3">
        <div className="site-logo">
          <img src={Logo} alt />
        </div>
        <div className="nav-switch">
          <i className="fa fa-bars" />
        </div>
      </div>
      <div className="col-lg-9 col-md-9">
        <a href className="site-btn header-btn">Login</a>
        <nav className="main-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About us</a></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><a href="blog.html">News</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
);

// (function($) {
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});
// })(jQuery);



export default Header;
