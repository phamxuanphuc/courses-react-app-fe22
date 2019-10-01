import React from "react";
import PageBg from '../../../assets/images/page-bg/2.jpg'

const Courses = () => (
  <>
    <div className="page-info-section set-bg" style={{ backgroundImage: `url(${PageBg})`}}>
    </div>

    <section className="single-course spad pb-0">
      <div className="container">
        <div className="course-meta-area">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="course-note">Featured Course</div>
              <h3>HTNL5 &amp; CSS For Begginers</h3>
              <div className="course-metas">
                <div className="course-meta">
                  <div className="course-author">
                    <div className="ca-pic set-bg" data-setbg="img/authors/2.jpg" />
                    <h6>Teacher</h6>
                    <p>William Parker, <span>Developer</span></p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Category</h6>
                    <p>Development</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Students</h6>
                    <p>120 Registered Students</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Reviews</h6>
                    <p>2 Reviews <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star is-fade" />
                    </span></p>
                  </div>
                </div>
              </div>
              <a href="#" className="site-btn price-btn">Price: $15</a>
              <a href="#" className="site-btn buy-btn">Buy This Course</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 course-list mt-5">
            <div className="cl-item">
              <h4>Course Description</h4>
              <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. </p>
            </div>
            <div className="cl-item">
              <h4>Certification</h4>
              <p>Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum.</p>
            </div>
            <div className="cl-item">
              <h4>The Instructor</h4>
              <p>Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Courses;