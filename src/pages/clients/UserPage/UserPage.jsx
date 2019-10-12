import React, { Component } from 'react';
import { connect } from 'react-redux';
import bg from '../../../assets/images/page-bg/2.jpg';
import SearchCourses from '../HomePage/SearchCourses/SearchCourses';
import MyCourses from './MyCourses/MyCourses';
import { Link, withRouter } from "react-router-dom";
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
        const scrollFunction = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        scrollFunction();
        const user = JSON.parse(localStorage.getItem("user"));
        if (user != null) {
            getInforUserFromApi(user.taiKhoan, user.accessToken, (data) => {
                this.setState({
                    user: data,
                })
            })
        } else {
            this.props.history.push('/home')
        }
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
                <div className="row content mt-5">
                    <div className="col-md-8 realated-courses my_courses">
                        <MyCourses user={this.state.user} />
                    </div>
                    <div className="col-md-4 my_infor">
                        <h6>Sửa thông Tin</h6>
                        <Form user={this.state.user} />
                    </div>
                </div>
                <section className="banner-section spad">
                    <div className="container">
                        <div className="section-title mb-0 pb-2">
                            <h2>Join Our Community Now!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                        </div>
                        <div className="text-center pt-5">
                            <a href="abc" className="site-btn">Register Now</a>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

export default withRouter(connect(mapStateToProps)(UserPage));