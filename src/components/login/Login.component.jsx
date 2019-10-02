import React, { useState } from "react";

//Components
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.component";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (

      <div className="sign-in">
        <h3 className="title">I already have an account</h3>
        <div className="sub-title">Sign in with your email and password</div>
        <div className="signIn-form">
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              id="email2"
              label="Email"
              type="email"
              value={email}
              onChange={handleChange}
              required={true}
            />
            <FormInput
              name="password"
              id="password2"
              label="Password"
              type="password"
              value={password}
              onChange={handleChange}
              required={true}
            />
            <div className="button">
              <Button type="submit">Sign In</Button>
              <Button signInGoogle={true}>Sign with Google</Button>
            </div>
          </form>
        </div>
      </div>
  
  );
};
export default SignIn;
