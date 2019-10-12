import React, { Component } from 'react';
import authors1 from "../../../../../assets/images/authors/1.jpg";
import {withRouter} from 'react-router-dom';
import {coursesSelected} from "../../../../../redux/reducers/courses/courses.action"
import {connect} from 'react-redux'
// SweetAlert
import SweetAlert from 'react-bootstrap-sweetalert';
import { cancelRegistrationCourses } from '../../../../../redux/reducers/user/user.action';

class MyCoursesItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: null,
        }
    }
    
    componentDidMount(){

    }

    hideAlert(check) {
        if(check === true) {
          this.setState({
            alert: null
          },()=>document.location.reload(true));
        }else{
          this.setState({
            alert: null            
          });
        }    
      }

    toDetailCourses = (maKhoaHoc) => {
        this.props.coursesSelected(maKhoaHoc);
        this.props.history.push(`/home/courses-detail`, maKhoaHoc);
    }

    cancelRegistrationCourses = (maKhoaHoc) => {
        const user = this.props.user
        const obj = {
                maKhoaHoc: maKhoaHoc,
                taiKhoan: user.taiKhoan
            }
            const token = user.accessToken;
            cancelRegistrationCourses(obj, token, (data) => {
                this.setState({
                    alert: (
                      <SweetAlert success title="Woot!" onConfirm={() => this.hideAlert(true)} >
                        {data}
                        </SweetAlert>)
                  });
            }, (err) => {
                this.setState({
                    alert: (
                      <SweetAlert danger title="Opps!" onConfirm={() => this.hideAlert(true)} >
                        {err}
                      </SweetAlert>)
                  });
            })
    }

    render() {        
        return (            
                <div className="course-item">
                                    {this.state.alert}
                    <div className="course-thumb set-bg" style={{ backgroundImage: `url(${this.props.courses.hinhAnh})` }} >
                        <div className="price">Price: $15</div>
                    </div>
                    <div className="course-info">
                        <div className="course-text">
                            <h5>{this.props.courses.tenKhoaHoc}</h5>
                            <p>{this.props.courses.moTa}</p>
                            <div className="d-flex">
                                <div className="students">{this.props.courses.luotXem} View</div>
                                {
                                    this.props.check === true?
                                    <button onClick={ () => this.cancelRegistrationCourses(this.props.courses.maKhoaHoc)} className="site-btn to_detail my_site-btn">Hủy khóa học</button>:
                                    <button onClick={ () => this.toDetailCourses(this.props.courses.maKhoaHoc)} className="site-btn to_detail my_site-btn">Chi Tiết</button>
                                }
                            </div>
                        </div>
                        <div className="course-author">
                            <div className="ca-pic set-bg" style={{ backgroundImage: `url(${authors1})` }} />
                            <p style={{whiteSpace: "noWrap"}}>Phạm Đình Phúc, <span>Developer</span></p>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.users
    }
}

export default withRouter(connect(mapStateToProps, {coursesSelected})(MyCoursesItem))