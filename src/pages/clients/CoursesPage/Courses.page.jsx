import React, { Component } from "react";
import PageBg from '../../../assets/images/page-bg/2.jpg';
import coursesf1 from '../../../assets/images/courses/f-1.jpg';
import coursesf2 from '../../../assets/images/courses/f-2.jpg';
import authors1 from '../../../assets/images/authors/1.jpg';
import authors2 from '../../../assets/images/authors/2.jpg';
import Courses from '../HomePage/Courses/Courses.jsx'

class CoursesPage extends Component {

  componentDidMount(){
    const scrollFunction = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    setTimeout(() => {
      scrollFunction();
    }, 500);
  }

  render() {
    return (
      <>
        {/* Page info */}
        <div className="page-info-section set-bg" style={{ backgroundImage: `url(${PageBg})` }}>
          <div className="container">
            <div className="site-breadcrumb">
              <a href="abc">Home</a>
              <span>Courses</span>
            </div>
          </div>
        </div>
        {/* Page info end */}

        <div>
          <section className="search-section ss-other-page">
            <div className="container">
              <div className="search-warp">
                <div className="section-title text-white">
                  <h2><span>Search your course</span></h2>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    {/* search form */}
                    <form className="course-search-form">
                      <input type="text" placeholder="Course" />
                      <input type="text" className="last-m" placeholder="Category" />
                      <button className="site-btn btn-dark">Search Couse</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Courses />

          <div className="featured-courses">
            <div className="featured-course course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${coursesf1})` }}>
                <div className="price">Price: $15</div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-6 pl-0">
                  <div className="course-info">
                    <div className="course-text">
                      <div className="fet-note">Featured Course</div>
                      <h5>HTNL5 &amp; CSS For Begginers</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna</p>
                      <div className="students">120 Students</div>
                    </div>
                    <div className="course-author">
                      <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors1})` }} />
                      <p>William Parker, <span>Developer</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-course course-item">
              <div className="course-thumb set-bg" style={{ backgroundImage: `url(${coursesf2})` }}>
                <div className="price">Price: $15</div>
              </div>
              <div className="row">
                <div className="col-lg-6 pr-0">
                  <div className="course-info">
                    <div className="course-text">
                      <div className="fet-note">Featured Course</div>
                      <h5>HTNL5 &amp; CSS For Begginers</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna</p>
                      <div className="students">120 Students</div>
                    </div>
                    <div className="course-author">
                      <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors2})` }} />
                      <p>William Parker, <span>Developer</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="banner-section spad">
          <div className="container">
            <div className="section-title mb-0 pb-2">
              <h2>Join Our Community Now!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
            </div>
            <div className="text-center pt-5">
              <a href="abc" className="site-btn">Register Now</a>
            </div>
          </div>
        </section>
      </>
    )
  }
} 
export default CoursesPage;