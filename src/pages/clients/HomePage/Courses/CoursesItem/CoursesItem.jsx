import React, { Component } from 'react';
import authors1 from "../../../../../assets/images/authors/1.jpg";
import {withRouter} from 'react-router-dom';
import {coursesSelected} from "../../../../../redux/reducers/courses/courses.action"
import {connect} from 'react-redux'

class CoursesItem extends Component {


    toDetailCourses = (maKhoaHoc) => {
        this.props.coursesSelected(maKhoaHoc);
        this.props.history.push(`/home/courses-detail`, maKhoaHoc);
    }

    render() {
        const setClass = `mix col-lg-3 col-md-4 col-sm-6 ${this.props.courses.danhMucKhoaHoc.maDanhMucKhoahoc}`;
        return (
            <div className={setClass}>
                <div className="course-item">
                    <div className="course-thumb set-bg" style={{ backgroundImage: `url(${this.props.courses.hinhAnh})` }} >
                        <div className="price">Price: $15</div>
                    </div>
                    <div className="course-info">
                        <div className="course-text">
                            <h5>{this.props.courses.tenKhoaHoc}</h5>
                            <p>{this.props.courses.moTa}</p>
                            <div className="d-flex">
                                <div className="students">{this.props.courses.luotXem} View</div>
                                <button onClick={ () => this.toDetailCourses(this.props.courses.maKhoaHoc)} className="site-btn to_detail my_site-btn">Chi tiết</button>
                            </div>
                        </div>
                        <div className="course-author">
                            <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors1})` }} />
                            <p>{this.props.courses.nguoiTao.hoTen}, <span>Developer</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, {coursesSelected})(CoursesItem))