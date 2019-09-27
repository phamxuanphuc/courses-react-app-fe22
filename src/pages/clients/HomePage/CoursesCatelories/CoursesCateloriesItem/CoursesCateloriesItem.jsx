import React, { Component } from 'react';
import categories1 from "../../../../../assets/images/categories/1.jpg";

class CoursesCateloriesItem extends Component {
    render() {
        console.log(this.props.courses);
        return (
            <div className="col-lg-4 col-md-6">
                <div className="categorie-item">
                    <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${categories1})` }} />
                    <div className="ci-text">
                        <h5>IT Development</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <span>120 Courses</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoursesCateloriesItem;