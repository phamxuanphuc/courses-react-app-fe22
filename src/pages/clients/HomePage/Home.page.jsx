import React from "react";
import HeroSection from "./HeroSection/HeroSection.jsx";
import CoursesCatelories from "./CoursesCatelories/CoursesCatelories.jsx";
import Courses from "./Courses/Courses.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import SearchSource from "./SearchCourses/SearchCourses";
import { Route, Switch} from "react-router-dom";

import Header from "../../../components/Header/Header.component";
import Footer from "../../../components/Footer/Footer.component";

import NewPage from "../New/New";
import CoursesPage from "../CoursesPage/Courses.page";
import UserPage from "../UserPage/UserPage.jsx";




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.carRef = React.createRef();
  }

  render() {
    return (
      <>
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
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Home;
