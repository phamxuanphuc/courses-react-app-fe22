import React from "react";
import SignupBg from "../../../assets/images/signup-bg.jpg";

const SignupSignin = () => (
  <div className="signup-signin">
    <section className="signup-section spad">
      <div
        className="signup-bg set-bg"
        style={{ backgroundImage: `url(${SignupBg})` }}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="signup-warp">
              <div className="section-title text-white text-left">
                <h2>Sign up to became a master</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris scelerisque, at rutrum nulla
                  dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                  finibus.
                </p>
              </div>

              <form className="signup-form">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your E-mail" />
                <input type="text" placeholder="Your Phone" />
                <div className="btn-action">
                  <button type="button" className="site-btn login-btn">
                    Register
                  </button>
                  <button type="button" className="site-btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default SignupSignin;
