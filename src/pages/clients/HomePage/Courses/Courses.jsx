import React, { Component } from 'react';
import $ from 'jquery';
import mixitup from 'mixitup';
import { connect } from 'react-redux';
import CoursesItem from './CoursesItem/CoursesItem.jsx';
import { getCateloriesFromApi } from '../../../../redux/reducers/courses/courses.action'
import axios from 'axios';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catelories: [],
        }
    }

    componentDidMount() {
        // axios
        //     .get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
        //     .then((data) => {
        //         this.setState({ catelories: data.data })
        //     })
        //     .catch(err => {})
        this.props.getCateloriesFromApi();
    }

    componentDidUpdate() {
        if(this.props.cateloriesSelected != ""){
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

$(window).on('load', function () {

    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

    if ($('.course-items-area').length > 0) {
        var containerEl = document.querySelector('.course-items-area');
        var mixer = mixitup(containerEl);
    }

});

export default connect(mapStateToprops, { getCateloriesFromApi })(Courses);

