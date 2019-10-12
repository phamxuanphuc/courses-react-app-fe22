import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import pageBG3 from '../../../assets/images/page-bg/3.jpg'
import SearchCourses from '../HomePage/SearchCourses/SearchCourses';
import author1 from '../../../assets/images/authors/2.jpg'
import { getCoursesDetailFromApi } from '../../../redux/reducers/courses/courses.action';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { registerCourses } from '../../../redux/reducers/user/user.action';

// SweetAlert
import SweetAlert from 'react-bootstrap-sweetalert';

class CoursesDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coursesDetail: {},
            alert: null,
        }
    }

    componentDidMount() {
        getCoursesDetailFromApi(this.props.history.location.state, (data) => {
            this.setState({
                coursesDetail: data,
            })
        })
    }

    hideAlert(check) {
        if(check === true) {
          this.setState({
            alert: null
          });
        }else{
          this.setState({
            alert: null            
          });
          this.props.history.push('/login')
        }    
      }
    

    buyNow = ()  => {
        const user = JSON.parse(localStorage.getItem("user"));        
        if(user === null){
            this.setState({
                alert: (
                  <SweetAlert danger title="Opps!" onConfirm={() => this.hideAlert(false)} >
                    Vui lòng đăng nhập!
                  </SweetAlert>)
              });
        }else{
            const obj = {
                maKhoaHoc: this.state.coursesDetail.maKhoaHoc,
                taiKhoan: user.taiKhoan
            }
            const token = user.accessToken;
            registerCourses(obj, token, () => {
                this.setState({
                    alert: (
                      <SweetAlert success title="Woot!" onConfirm={() => this.hideAlert(true)} >
                        Ghi danh thành công1
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
    }

    render() {
        return (
            <>
                {this.state.alert}
                <div className="page-info-section set-bg" style={{ backgroundImage: `url(${pageBG3})` }}>
                    <div className="container">
                        <div className="site-breadcrumb">
                            <a href="abc">Chi tiết khóa học</a>
                            <span>{this.state.coursesDetail.tenKhoaHoc}</span>
                        </div>
                    </div>
                </div>
                <SearchCourses />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xl-8 pl-0 content">

                            <div className="blog-post my_blog-post">
                                <h2 className="pb-3">Hot courses in 2019: {this.state.coursesDetail.tenKhoaHoc}</h2>
                                <div className="blog-metas my_blog-metas">
                                    <div className="blog-meta author">
                                        <div className="post-author set-bg" style={{ backgroundImage: `url(${author1})` }} />
                                        <a href="abc">James Smith</a>
                                    </div>
                                    <div className="blog-meta">
                                        <a href="abc">Development</a>
                                    </div>
                                    <div className="blog-meta">
                                        <a href="abc">{this.state.coursesDetail.ngayTao}</a>
                                    </div>
                                    <div className="blog-meta">
                                        <a href="abc">{this.state.coursesDetail.luotXem} lượt xem</a>
                                    </div>
                                </div>
                                <p>Do you want to learn the number #1 programming language that powers the internet? Are you tired of wasting your time and money on random youtube videos or JavaScript courses that are either too simple, or too difficult to follow? If your answer is a big YES... Then this is exactly the course you are looking for! </p>
                            </div>
                            <div className="benefit row">
                                <h4 className="title">What you'll learn!</h4>
                                <div className="col-md-6">
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Learn to use Python professionally, learning both Python 2 and Python 3!
                                    </div>
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Learn advanced Python features, like the collections module and how to work with timestamps!
                                    </div>
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Understand complex topics, like decorators.
                                    </div>
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Get an understanding of how to create GUIs in the Jupyter Notebook system!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Create games with Python, like Tic Tac Toe and Blackjack!
                                    </div>
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Learn to use Object Oriented Programming with classes!
                                    </div>
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Understand how to use both the Jupyter Notebook and create .py files
                                    </div>
                                    <div className="item mb-2">
                                        <i className="fa fa-check mr-2"></i>Build a complete understanding of Python! from the ground up!
                                    </div>
                                </div>
                            </div>
                            <div className="courses-content py-5">
                                <h4 className="mb-4">Corses content</h4>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                SECTION 1: INTRODUCTION
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i> How to obtain your Certificate of Completion for this course?</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>9:05</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i>  Working Files – Download These First</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>14:45</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                SECTION 2: WORKSPACE AND PREFERENCES
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i>Get In Total Control Of The Control Panel</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>10:05</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i>The Magic Of Auto Recovery</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>12:37</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i>Customize The Workspace</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>30:10</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                SECTION 3: LAYOUT                                           
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i>Outside-The-Box Thinking With Grids</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>11:05</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <div className="lesson d-flex">
                                                <div className="title_lesson"><i className="fa fa-play-circle mr-2"></i>Creating Saving And Opening Documents</div>
                                                <div className="time"><i className="lni-alarm-clock"></i><span>22:08</span></div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 pr-0 sidebar">
                            <div className="course-item courses_detail">
                                <div className="course-thumb set-bg" style={{ backgroundImage: `url(${this.state.coursesDetail.hinhAnh})` }} >
                                </div>
                                <div className="course-info my_course-info">
                                    <div className="course-text my_course-text d-flex">
                                        <div className="infor">
                                            <h4 className="pt-2">{this.state.coursesDetail.tenKhoaHoc}</h4>
                                        </div>
                                        <div className="price">
                                            $19.99
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button onClick={this.buyNow} className=" a1 w-100 site-btn mr-3 mb-3 mb-md-0">Buy now</button>
                                        <button className=" a2 w-100 site-btn btn-fade mt-2">Add to cart</button>
                                    </div>
                                    <div className="detail mt-2">
                                        <div className="detail_item p-4">
                                            <span>Enrolled: <span className="bold">{this.state.coursesDetail.soLuongHocVien} students</span></span><i className="lni-users"></i>
                                        </div>
                                        <div className="detail_item p-4">
                                            <span>Duration: <span className="bold">6 hours</span></span><i className="lni-alarm-clock"></i>
                                        </div>
                                        <div className="detail_item p-4">
                                            <span>Lectures: <span className="bold">6</span></span><i className="lni-bullhorn"></i>
                                        </div>
                                        <div className="detail_item p-4">
                                            <span>Views: <span className="bold">{this.state.coursesDetail.luotXem}</span></span><i className="lni-eye"></i>
                                        </div>
                                        <div className="detail_item p-4">
                                            <span>Creation date: <span className="bold">{this.state.coursesDetail.ngayTao}</span></span><i className="lni-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="course-author">
                                        <div className="ca-pic set-bg" style={{ backgroundImage: `url(${author1})` }} />
                                        <p>Phạm Đình Phúc, <span>Developer</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detailCourses: state.detailCourses,
    };
}

export default withRouter(connect(
    mapStateToProps,
)(CoursesDetail));