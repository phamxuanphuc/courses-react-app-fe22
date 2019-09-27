import React, { Component } from 'react';
import $ from 'jquery';
import mixitup from 'mixitup';
import {connect} from 'react-redux';
import CoursesItem from './CoursesItem/CoursesItem.jsx';

class Courses extends Component {
    render() {
        console.log(this.props.courses);
        const courses = this.props.courses.map((item, index) => {
            return <CoursesItem courses={item} key={index} />
        })
        return (
            <section className="course-section spad">
                <div className="container">
                    <div className="section-title mb-0">
                        <h2>Featured Courses</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                    </div>
                </div>
                <div className="course-warp">
                    <ul className="course-filter controls">
                        <li className="control active" data-filter="all">All</li>
                        <li className="control" data-filter=".TuDuy">Tư Duy</li>
                        <li className="control" data-filter=".FrontEnd">Frontend</li>
                        <li className="control" data-filter=".BackEnd">Backend</li>
                        <li className="control" data-filter=".Design">Design</li>
                        <li className="control" data-filter=".DiDong">Di Động</li>
                        <li className="control" data-filter=".FullStack">FullStack</li>
                    </ul>
                    <div className="row course-items-area">
                        {courses}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        courses: state.courses
    }
}

$(window).on('load', function () {
    
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

    if ($('.course-items-area').length > 0) {
        var containerEl = document.querySelector('.course-items-area');
        var mixer = mixitup(containerEl);
    }

});

export default connect(mapStateToprops)(Courses);



// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses1})` }} >
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>Art &amp; Crafts</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors1})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 design">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses2})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>IT Development</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors2})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 web">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses3})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>Graphic Design</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors3})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 photo">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses4})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>IT Development</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors4})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses5})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>IT Development</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors5})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 design">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses6})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>Socia Media</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors6})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 web">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses7})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>IT Development</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors7})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>
// {/* course */ }
// <div className="mix col-lg-3 col-md-4 col-sm-6 photo">
//     <div className="course-item">
//         <div className="course-thumb set-bg" style={{ backgroundImage: `url(${courses8})` }}>
//             <div className="price">Price: $15</div>
//         </div>
//         <div className="course-info">
//             <div className="course-text">
//                 <h5>HTML 5</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <div className="students">120 Students</div>
//             </div>
//             <div className="course-author">
//                 <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors8})` }} />
//                 <p>William Parker, <span>Developer</span></p>
//             </div>
//         </div>
//     </div>
// </div>