import React from "react"
import CarouselBackGroundImg from "../../../../assets/images/bg.jpg"

const HeroSection = () => (
    <section className="hero-section set-bg" style={{ backgroundImage: `url(${CarouselBackGroundImg})` }}>
        <div className="container">
            <div className="hero-text text-white">
                <h2>Get The Best Free Online Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla <br /> dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <form className="intro-newslatter">
                        <input type="text" placeholder="Name" />
                        <input type="text" className="last-s" placeholder="E-mail" />
                        <button className="site-btn">Sign Up Now</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
