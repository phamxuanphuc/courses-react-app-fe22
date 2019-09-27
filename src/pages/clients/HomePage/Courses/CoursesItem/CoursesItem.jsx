import React, { Component } from 'react';

import courses1 from "../../../../../assets/images/courses/1.jpg";
import authors1 from "../../../../../assets/images/authors/1.jpg";

class CoursesItem extends Component {
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
                                <button className="site-btn my_site-btn">Đăng kí</button>
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

export default CoursesItem