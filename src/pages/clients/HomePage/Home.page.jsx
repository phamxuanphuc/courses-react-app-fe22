import React from "react";
import HeroSection from "./HeroSection/HeroSection.jsx";
import CoursesCatelories from "./CoursesCatelories/CoursesCatelories.jsx";
import Courses from "./Courses/Courses.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import SearchSource from "./SearchCourses/SearchCourses";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.carRef = React.createRef();
  }

  render() {
    return (
      <>
        <HeroSection />
        <SearchSource />
        <CoursesCatelories carRef={this.carRef} />
        <Courses carRef={this.carRef} />
        <AboutUs />
      </>
    )
  }
}

export default Home;
