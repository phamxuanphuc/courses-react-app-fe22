// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import CoursesCateloriesItem from './CoursesCateloriesItem/CoursesCateloriesItem.jsx';

// class CoursesCatelories extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render() {
//         const coursesCateloriesItem = this.props.courses.map((item, index) => {
//             return <CoursesCateloriesItem key={index} courses={item} />
//         })
//         return (
//             <section className="categories-section spad">
//                 <div className="container">
//                     <div className="section-title">
//                         <h2>Our Course Categories</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
//                     </div>
//                     <div className="row">
//                         {coursesCateloriesItem}
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         courses: state.courses
//     }
// }

// export default connect(mapStateToProps)(CoursesCatelories);


import React from "react";
import categories1 from "../../../../assets/images/categories/1.jpg";
import categories2 from "../../../../assets/images/categories/2.jpg";
import categories3 from "../../../../assets/images/categories/3.jpg";
import categories4 from "../../../../assets/images/categories/4.jpg";
import categories5 from "../../../../assets/images/categories/5.jpg";
import categories6 from "../../../../assets/images/categories/6.jpg";

const CoursesCatelories = () => (
    <section className="categories-section spad">
        <div className="container">
            <div className="section-title">
                <h2>Our Course Categories</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
            </div>
            <div className="row">
                {/* categorie */}
                <div className="col-lg-4 col-md-6">
                    <div className="categorie-item">
                        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories1})` }} />
                        <div className="ci-text">
                            <h5>IT Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>120 Courses</span>
                        </div>
                    </div>
                </div>
                {/* categorie */}
                <div className="col-lg-4 col-md-6">
                    <div className="categorie-item">
                        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories2})` }} />
                        <div className="ci-text">
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>70 Courses</span>
                        </div>
                    </div>
                </div>
                {/* categorie */}
                <div className="col-lg-4 col-md-6">
                    <div className="categorie-item">
                        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories3})` }} />
                        <div className="ci-text">
                            <h5>Illustration &amp; Drawing</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>55 Courses</span>
                        </div>
                    </div>
                </div>
                {/* categorie */}
                <div className="col-lg-4 col-md-6">
                    <div className="categorie-item">
                        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories4})` }} />
                        <div className="ci-text">
                            <h5>Social Media</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>40 Courses</span>
                        </div>
                    </div>
                </div>
                {/* categorie */}
                <div className="col-lg-4 col-md-6">
                    <div className="categorie-item">
                        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories5})` }} />
                        <div className="ci-text">
                            <h5>Photoshop</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>220 Courses</span>
                        </div>
                    </div>
                </div>
                {/* categorie */}
                <div className="col-lg-4 col-md-6">
                    <div className="categorie-item">
                        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories6})` }} />
                        <div className="ci-text">
                            <h5>Cryptocurrencies</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>25 Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);

export default CoursesCatelories;
