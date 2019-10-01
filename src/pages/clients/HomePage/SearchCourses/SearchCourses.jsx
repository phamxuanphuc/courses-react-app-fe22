import React, { Component } from 'react';

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

  render() {
    return (
      <section className="search-section ss-other-page">
        <div className="container">
          <div className="search-warp">
            <div className="section-title text-white">
              <h2><span>Search your course</span></h2>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                {/* search form */}
                <form className="course-search-form">
                  <input type="text" placeholder="Course" value={this.state.coursesName} onChange={this.onChange} />
                  <input type="text" className="last-m" placeholder="Category" value={this.state.catelories} onChange={this.onChange} />
                  <button className="site-btn btn-dark">Search Couse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default SearchCourses;