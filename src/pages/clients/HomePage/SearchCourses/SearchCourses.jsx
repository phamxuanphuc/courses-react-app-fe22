import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    this.props.history.push(`/courses/${this.state.coursesName}`)
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
            <form className="course-search-form row">
              <div className="col-md-5">
                <select className="site-btn mySelect" type="text" placeholder="Course" value={this.state.coursesName} onChange={this.onChange} name="coursesName">
                  {coursesOption}
                </select>
              </div>
              <div className="col-md-5">
                <select className="site-btn mySelect" type="text" placeholder="Catelories" value={this.state.catelories} onChange={this.onChange} name="catelories">
                  {catelories}
                </select>
              </div>
              <div className="col-md-2">
                <button onClick={this.onSubmit} className="site-btn btn-dark">Search Couse</button>
              </div>
            </form>
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

export default withRouter(connect(mapStateToProps)(SearchCourses));