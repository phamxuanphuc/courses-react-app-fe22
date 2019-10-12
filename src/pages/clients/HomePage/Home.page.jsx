import React from "react";
import HeroSection from "./HeroSection/HeroSection.jsx";
import CoursesCatelories from "./CoursesCatelories/CoursesCatelories.jsx";
import Courses from "./Courses/Courses.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import SearchSource from "./SearchCourses/SearchCourses";
import { Route, Switch } from "react-router-dom";

import Header from "../../../components/Header/Header.component";
import Footer from "../../../components/Footer/Footer.component";

import NewPage from "../New/New";
import CoursesPage from "../CoursesPage/Courses.page";
import UserPage from "../UserPage/UserPage.jsx";
import CoursesDetail from "../CoursesDetail/CoursesDetail.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.carRef = React.createRef();
  }

  toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentDidMount() {
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.right = "20px";
      } else {
        mybutton.style.right = "-80px";
      }
    }
    scrollFunction();
  }

  render() {
    return (
      <>
        <button onClick={this.toTop} id="myBtn" title="Go to top">Up<i className="fa fa-arrow-right ml-1"></i></button>
        <Header />
        <Switch>
          <Route exact path="/home">
            <HeroSection />
            <SearchSource />
            <CoursesCatelories carRef={this.carRef} />
            <Courses carRef={this.carRef} />
            <AboutUs />
          </Route>
          <Route path="/home/new">
            <NewPage />
          </Route>
          <Route path="/home/courses">
            <CoursesPage />
          </Route>
          <Route path="/home/user">
            <UserPage />
          </Route>
          <Route path="/home/courses-detail">
            <CoursesDetail />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Home;
