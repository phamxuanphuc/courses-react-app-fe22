import React from 'react';

const SearchCourses = () => (
    <section className="search-section">
         <div className="search-warp">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        {/* search form */}
                        <form className="course-search-form">
                            <input type="text" placeholder="Course" />
                            <input type="text" className="last-m" placeholder="Category" />
                            <button className="site-btn">Search Couse</button>
                        </form>
                    </div>
                </div>
            </div>
    </section>
)

export default SearchCourses;