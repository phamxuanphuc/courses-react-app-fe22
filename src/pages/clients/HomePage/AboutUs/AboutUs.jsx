import React, { Component } from 'react';
import phucdinh from "../../../../assets/images/team_member/phucdinh.jpg";
import phucpham from "../../../../assets/images/team_member/phucpham.jpg";
import danlu from "../../../../assets/images/team_member/danlu.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class AboutUs extends Component {
    render() {
        return (
            <ScrollAnimation duration={1} animateIn='slideInUp'>
                <section className="banner-section spad">
                    <div className="container">
                        <div className="section-title mb-0 pb-2">
                            <h2>Our Team Member</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea excepturi perferendis voluptatem asperiores rem accusamus cupiditate rerum commodi earum.</span>
                        </div>
                        <div className="text-center pt-5">
                            <div className="ourteam row">
                                <div className="member col-lg-4 col-md-6">
                                    <div className="wrap">
                                        <div className="contact_member">
                                            <div className="item">
                                                <i className="fa fa-facebook"></i>

                                            </div>
                                            <div className="item">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="item">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                        </div>
                                        <div className="image set-bg" style={{ backgroundImage: `url(${phucpham})` }}>

                                        </div>
                                        <div className="infor">
                                            <h3>Phạm Xuân Phúc</h3>
                                            <span>Web Developer</span>
                                        </div>
                                        <div className="hover_detail">

                                        </div>
                                    </div>
                                </div>
                                <div className="member col-lg-4 col-md-6">
                                    <div className="wrap">
                                        <div className="contact_member">
                                            <div className="item">
                                                <i className="fa fa-facebook"></i>

                                            </div>
                                            <div className="item">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="item">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                        </div>
                                        <div className="image set-bg" style={{ backgroundImage: `url(${phucdinh})` }}>

                                        </div>
                                        <div className="infor">
                                            <h3>Nguyễn Đình Phúc</h3>
                                            <span>Web Developer</span>
                                        </div>
                                        <div className="hover_detail">

                                        </div>
                                    </div>
                                </div>
                                <div className="member col-lg-4 col-md-6">
                                    <div className="wrap">
                                        <div className="contact_member">
                                            <div className="item">
                                                <i className="fa fa-facebook"></i>

                                            </div>
                                            <div className="item">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="item">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                        </div>
                                        <div className="image set-bg" style={{ backgroundImage: `url(${danlu})` }}>

                                        </div>
                                        <div className="infor">
                                            <h3>Đan Lư</h3>
                                            <span>Web Developer</span>
                                        </div>
                                        <div className="hover_detail">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        )
    }
};

export default AboutUs;

// style={{ backgroundImage: `url(${phucpham})` }}