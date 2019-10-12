import React, { Component } from 'react';
import $ from 'jquery';
import mixitup from 'mixitup';
import { connect } from 'react-redux';
import CoursesItem from './CoursesItem/CoursesItem.jsx';
import { getCateloriesFromApi } from '../../../../redux/reducers/courses/courses.action'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catelories: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");

            if ($('.course-items-area').length > 0) {
                let containerEl = document.querySelector('.course-items-area');
                let mixer = mixitup(containerEl);
                mixer.show();
            }
        }, 500);
    }

    componentDidUpdate() {
        if (this.props.cateloriesSelected !== "") {
            document.getElementById(this.props.cateloriesSelected).click();
        }
    }

    render() {
        // render courses
        const courses = this.props.courses.map((item, index) => {
            return <CoursesItem courses={item} key={index} />
        })

        // render catelories
        const catelories = this.props.catelories.map((item, index) => {
            return <li key={index} id={item.maDanhMuc} className="control" data-filter={"." + item.maDanhMuc}>{item.tenDanhMuc}</li>
        })

        return (

            <ScrollAnimation duration={1} animateIn='slideInUp' animateOnce={true}>
                <section className="course-section spad">
                    <div ref={this.props.carRef} className="container">
                        <div className="section-title mb-0">
                            <h2>Featured Courses</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                        </div>
                    </div>
                    <div className="course-warp">
                        <ul className="course-filter controls">
                            <li className="control active" data-filter="all">All</li>
                            {catelories}
                        </ul>
                        <div className="row course-items-area">
                            {courses}
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        courses: state.courses,
        cateloriesSelected: state.cateloriesSelected,
        catelories: state.catelories,
    }
}



export default connect(mapStateToprops, { getCateloriesFromApi })(Courses);

