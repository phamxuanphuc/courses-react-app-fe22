import React, { useState } from "react";

//Components
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.component";

import * as userApi from "../../apis/auth.api";
import {  withRouter } from "react-router-dom";

const SignIn = ({history}) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { username, password } = user;

  const handleSubmit = e => {
    e.preventDefault();
    let userInfo={
      taikhoan: user.username,
      matkhau: user.password
    }
    userApi.loginUser(userInfo).then(status=>{
      if(status===200){
        history.push('/home')
      }
    })
    
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h3 className="title">I already have an account</h3>
      <div className="sub-title">Sign in with your username and password</div>
      <div className="signIn-form">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="username"
            id="username2"
            label="User Name"
            type="username"
            value={username}
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
export default withRouter(SignIn);
