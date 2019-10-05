import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCoursesItem from '../../UserPage/MyCourses/MyCoursesItem/MyCoursesItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nodata from '../../../../assets/images/courses/NoCourses.png'
class MyCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectCourses: [],
            checkMyCourses: false,
        }
    }

    myCourses = () => {
        document.getElementById("my_courses").classList.add("my_active");
        document.getElementById("all").classList.remove("my_active");
        if (this.props.user.chiTietKhoaHocGhiDanh.length === 0) {
            this.setState({
                selectCourses: this.props.user.chiTietKhoaHocGhiDanh,
                checkMyCourses: true,
            })
        } else {
            this.setState({
                selectCourses: this.props.user.chiTietKhoaHocGhiDanh,
                checkMyCourses: false,
            })
        }
    }

    allCourses = () => {
        document.getElementById("all").classList.add("my_active");
        document.getElementById("my_courses").classList.remove("my_active");
        this.setState({
            selectCourses: this.props.courses,
            checkMyCourses: false,
        })
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [

            ]
        };

        // render courses
        var courses = this.state.selectCourses.map((item, index) => {
            return (
                <div key={index} className="item p-1">
                    <MyCoursesItem courses={item} key={index} />
                </div>
            )
        })

        return (
            <div className="my_courses">
                <div className="title">
                    <h6 id="all" onClick={this.allCourses}>All</h6>/<h6 id="my_courses" onClick={this.myCourses}>My courses</h6>
                </div>
                <div className="courses">
                    {
                        this.state.checkMyCourses === true ?
                            <div className="img">
                                <img src={nodata} alt="nodata" />
                                <p>Không có khóa học</p>
                            </div> :
                            <Slider {...settings}>
                                {courses}
                            </Slider>
                    }
                </div>
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