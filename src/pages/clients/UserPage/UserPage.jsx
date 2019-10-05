import React, { Component } from 'react';
import { connect } from 'react-redux';
import bg from '../../../assets/images/page-bg/2.jpg';
import SearchCourses from '../HomePage/SearchCourses/SearchCourses';
import MyCourses from './MyCourses/MyCourses';
import { Link } from "react-router-dom";
// import _ from 'lodash';
import { getInforUserFromApi } from '../../../redux/reducers/user/user.action';
import Form from "./Form/Form";

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        getInforUserFromApi(user.taiKhoan, user.accessToken, (data) => {
            this.setState({
                user: data,
            })
        })
    }

    render() {
        return (
            <>
                <div className="page-info-section set-bg" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="container">
                        <div className="site-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>My courses</span>
                        </div>
                    </div>
                </div>
                <SearchCourses />
                <div className="row content">
                    <div className="col-md-8 realated-courses my_courses">
                        <MyCourses user={this.state.user} />
                    </div>
                    <div className="col-md-4 my_infor">
                        <h6>Thông Tin</h6>
                        <Form />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(
    mapStateToProps,
)(UserPage);