import React, { Component } from 'react';
import Pagebg3 from '../../../assets/images/page-bg/3.jpg'; 
import authors1 from '../../../assets/images/authors/1.jpg';
import authors2 from '../../../assets/images/authors/2.jpg';
import authors3 from '../../../assets/images/authors/3.jpg';
import add from '../../../assets/images/add.jpg';
import blog1 from '../../../assets/images/blog/1.jpg';
import blog2 from '../../../assets/images/blog/2.jpg';
import blog3 from '../../../assets/images/blog/3.jpg';

class New extends Component {
    render() {
        return (
            <div>
                {/* Page info */}
                <div className="page-info-section set-bg" style={{ backgroundImage: `url(${Pagebg3})` }}>
                    <div className="container">
                        <div className="site-breadcrumb">
                            <a href="#">Home</a>
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
                {/* Page info end */}
                {/* search section */}
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
                                        <input type="text" placeholder="Course" />
                                        <input type="text" className="last-m" placeholder="Category" />
                                        <button className="site-btn btn-dark">Search Couse</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* search section end */}
                {/* Page  */}
                <section className="blog-page spad pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                {/* blog post */}
                                <div className="blog-post">
                                    <img src={blog1} alt />
                                    <h3>How to create the perfect resume</h3>
                                    <div className="blog-metas">
                                        <div className="blog-meta author">
                                            <div className="post-author set-bg" style={{ backgroundImage: `url(${authors1})` }} />
                                            <a href="#">James Smith</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">Development</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">June 12, 2018</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">2 Comments</a>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. </p>
                                    <a href="#" className="site-btn readmore">Read More</a>
                                </div>
                                {/* blog post */}
                                <div className="blog-post">
                                    <img src={blog2} alt />
                                    <h3>5 Tips to make money from home</h3>
                                    <div className="blog-metas">
                                        <div className="blog-meta author">
                                            <div className="post-author set-bg" style={{ backgroundImage: `url(${authors2})` }} />
                                            <a href="#">James Smith</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">Development</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">June 12, 2018</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">2 Comments</a>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. </p>
                                    <a href="#" className="site-btn readmore">Read More</a>
                                </div>
                                {/* blog post */}
                                <div className="blog-post">
                                    <img src={blog3} alt />
                                    <h3>Why choose an online course?</h3>
                                    <div className="blog-metas">
                                        <div className="blog-meta author">
                                            <div className="post-author set-bg" style={{ backgroundImage: `url(${authors3})` }} />
                                            <a href="#">James Smith</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">Development</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">June 12, 2018</a>
                                        </div>
                                        <div className="blog-meta">
                                            <a href="#">2 Comments</a>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. </p>
                                    <a href="#" className="site-btn readmore">Read More</a>
                                </div>
                                <div className="site-pagination">
                                    <span className="active">01.</span>
                                    <a href="#">02.</a>
                                    <a href="#">03</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-9 sidebar">
                                <div className="sb-widget-item">
                                    <form className="search-widget">
                                        <input type="text" placeholder="Search" />
                                        <button><i className="fa fa-search" /></button>
                                    </form>
                                </div>
                                <div className="sb-widget-item">
                                    <h4 className="sb-w-title">Categories</h4>
                                    <ul>
                                        <li><a href="#">Developement</a></li>
                                        <li><a href="#">Social Media</a></li>
                                        <li><a href="#">Press</a></li>
                                        <li><a href="#">Events &amp; Lifestyle</a></li>
                                        <li><a href="#">Uncategorizes</a></li>
                                    </ul>
                                </div>
                                <div className="sb-widget-item">
                                    <h4 className="sb-w-title">Archives</h4>
                                    <ul>
                                        <li><a href="#">February 2018</a></li>
                                        <li><a href="#">March 2018</a></li>
                                        <li><a href="#">April 2018</a></li>
                                        <li><a href="#">May 2018</a></li>
                                        <li><a href="#">June 2018</a></li>
                                    </ul>
                                </div>
                                <div className="sb-widget-item">
                                    <h4 className="sb-w-title">Archives</h4>
                                    <div className="tags">
                                        <a href="#">education</a>
                                        <a href="#">courses</a>
                                        <a href="#">development</a>
                                        <a href="#">design</a>
                                        <a href="#">on line courses</a>
                                        <a href="#">wp</a>
                                        <a href="#">html5</a>
                                        <a href="#">music</a>
                                    </div>
                                </div>
                                <div className="sb-widget-item">
                                    <div className="add">
                                        <a href="#"><img src={add} alt /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Page end */}
                {/* banner section */}
                <section className="banner-section spad">
                    <div className="container">
                        <div className="section-title mb-0 pb-2">
                            <h2>Join Our Community Now!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                        </div>
                        <div className="text-center pt-5">
                            <a href="#" className="site-btn">Register Now</a>
                        </div>
                    </div>
                </section>
                {/* banner section end */}</div>

        )
    }
}

export default New;