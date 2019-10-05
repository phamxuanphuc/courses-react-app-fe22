import React, { Component } from "react";
import categories1 from "../../../../assets/images/categories/1.jpg";
import categories2 from "../../../../assets/images/categories/2.jpg";
import categories3 from "../../../../assets/images/categories/3.jpg";
import categories4 from "../../../../assets/images/categories/4.jpg";
import categories5 from "../../../../assets/images/categories/5.jpg";
import categories6 from "../../../../assets/images/categories/6.jpg";
import { cateloriesSelected } from "../../../../redux/reducers/courses/courses.action"
import { connect } from "react-redux";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class CoursesCatelories extends Component {

    selectCategories = (catelories) => {
        this.props.cateloriesSelected(catelories);
        this.props.carRef.current.scrollIntoView()
    }

    render() {
        return (
            <section className="categories-section spad">

                <ScrollAnimation duration={1} animateIn='slideInUp' initiallyVisible={true}   animateOnce={true} >
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Course Categories</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                        </div>
                        <div className="row">
                            {/* categorie */}
                            <div className="col-lg-4 col-md-6">
                                <div className="categorie-item" onClick={() => this.selectCategories("TuDuy")}>
                                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories1})` }} />
                                    <div className="ci-text">
                                        <h5>Tư duy</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                        <span>120 Courses</span>
                                    </div>
                                </div>
                            </div>
                            {/* categorie */}
                            <div className="col-lg-4 col-md-6">
                                <div className="categorie-item" onClick={() => this.selectCategories("FrontEnd")}>
                                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories2})` }} />
                                    <div className="ci-text">
                                        <h5>FrontEnd</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                        <span>70 Courses</span>
                                    </div>
                                </div>
                            </div>
                            {/* categorie */}
                            <div className="col-lg-4 col-md-6">
                                <div className="categorie-item" onClick={() => this.selectCategories("BackEnd")}>
                                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories3})` }} />
                                    <div className="ci-text">
                                        <h5>BackEnd</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                        <span>55 Courses</span>
                                    </div>
                                </div>
                            </div>
                            {/* categorie */}
                            <div className="col-lg-4 col-md-6">
                                <div className="categorie-item" onClick={() => this.selectCategories("Design")}>
                                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories4})` }} />
                                    <div className="ci-text">
                                        <h5>Design</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                        <span>40 Courses</span>
                                    </div>
                                </div>
                            </div>
                            {/* categorie */}
                            <div className="col-lg-4 col-md-6">
                                <div className="categorie-item" onClick={() => this.selectCategories("DiDong")}>
                                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories5})` }} />
                                    <div className="ci-text">
                                        <h5>Di động</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                        <span>220 Courses</span>
                                    </div>
                                </div>
                            </div>
                            {/* categorie */}
                            <div className="col-lg-4 col-md-6">
                                <div className="categorie-item" onClick={() => this.selectCategories("FullStack")}>
                                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories6})` }} />
                                    <div className="ci-text">
                                        <h5>FullStack</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                        <span>25 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cateloriesSelected: (catelories) => {
            dispatch(cateloriesSelected(catelories))
        }
    }
}
export default connect(null, mapDispatchToProps)(CoursesCatelories);
