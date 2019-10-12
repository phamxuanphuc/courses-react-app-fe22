import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom"
import Logo from "../../assets/images/logo.png"
import $ from 'jquery';
import avata from '../../assets/images/avatar.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      abc: false,
    }
  }

  componentDidMount() {
    
    var header = document.getElementById("myUL");
    var btns = header.getElementsByClassName("nav_page");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      this.setState({
        checkLogIn: true,
      })
    }
  }

  toUserPage = () => {
    this.props.history.push('/home/user')
  }

  logOut = () => {
    localStorage.clear();
    document.location.reload(true);
  }

  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="site-logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="nav-switch" onClick={toggleBar}>
                <i className="fa fa-bars" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              {
                this.state.checkLogIn === true ?
                  <div className="user_tag header-btn">
                    <div className="bell avata">
                    <i className="lni-cart"></i>
                    </div>
                    <div className="bell avata">
                    <i className="lni-alarm"></i>
                    </div>
                    <div className="bell avata">
                    <i className="lni-cog"></i>
                    </div>
                    <div className="header-btn user_avata avata">
                      <img onClick={this.toUserPage} src={avata} alt="avata" />
                      <div className="arrow" onClick={this.logOut}>
                        <i className="fa fa-power-off"></i>
                      </div>
                    </div>
                  </div>
                  :
                  <Link to="/login" className="site-btn header-btn">Login</Link>
              }
              <nav className="main-menu">
                <ul id="myUL">
                  <li><Link className="nav_page active" to="/home">Home</Link></li>
                  <li><a className="nav_page" href="#abc">About us</a></li>
                  <li><Link className="nav_page" to="/home/courses">Courses</Link></li>
                  <li><Link className="nav_page" to="/home/new">News</Link></li>
                  <li><a className="nav_page" href="#abc">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
const toggleBar = () => {
  $('.main-menu').slideToggle(400);
}

export default withRouter(Header);
