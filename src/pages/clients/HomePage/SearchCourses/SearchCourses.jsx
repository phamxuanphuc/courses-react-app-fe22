import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {coursesSelected} from '../../../../redux/reducers/courses/courses.action'

class SearchCourses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coursesName: "",
      catelories: "",
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {
    this.props.coursesSelected(this.state.coursesName);
    this.props.history.push(`/home/courses-detail`, this.state.coursesName);
    window.location.reload(true); 
  }

  render() {
    // render courses option
    const coursesOption = this.props.courses.map((item, index) => {
      return <option key={index} value={item.maKhoaHoc}>{item.tenKhoaHoc}</option>
    })

    // render catelories
    const catelories = this.props.catelories.map((item, index) => {
      return <option key={index} value={item.tenDanhMuc}>{item.tenDanhMuc}</option>
    })


    return (
      <section className="search-section ss-other-page">
        <div className="container">
          <div className="search-warp">
            <div className="section-title text-white">
              <h2><span>Search your course</span></h2>
            </div>
            {/* search form */}
            <div className="my_form row">

            <form className="course-search-form my-course-search-form d-flex col-md-9">
              <div className="select">
                <select className="site-btn mySelect" type="text" placeholder="Course" value={this.state.coursesName} onChange={this.onChange} name="coursesName">
                  {coursesOption}
                </select>
              </div>
              <div className="select">
                <select className="site-btn mySelect" type="text" placeholder="Catelories" value={this.state.catelories} onChange={this.onChange} name="catelories">
                  {catelories}
                </select>
              </div>              
            </form>

            <div className="col-md-3">
                <button onClick={this.onSubmit} className="site-btn mysubmit_button btn-dark">Search Couse</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    catelories: state.catelories,
  }
}

export default withRouter(connect(mapStateToProps, {coursesSelected})(SearchCourses));