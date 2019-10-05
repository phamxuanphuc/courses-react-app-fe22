import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCoursesItem from '../../UserPage/MyCourses/MyCoursesItem/MyCoursesItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectCourses: [],
        }
    }



    myCourses = () => {
        
    }

    allCourses = () => {
        this.setState({
            selectCourses: this.props.courses,
        })
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [

            ]
        };

        // render courses
        const courses = this.state.selectCourses.map((item, index) => {
            return (
                <div key={index} className="item p-1">
                    <MyCoursesItem courses={item} key={index} />
                </div>
            )
        })

        return (
            <div className="my_courses py-5">
                <div className="title">
                    <h6 onClick={this.allCourses}>All</h6>/<h6 onClick={this.myCourses}>My courses</h6>
                </div>
                <Slider {...settings}>
                    {courses}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        catelories: state.catelories
    };
}

export default connect(
    mapStateToProps,
)(MyCourses);