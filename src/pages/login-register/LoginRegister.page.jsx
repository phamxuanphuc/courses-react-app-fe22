import React from "react";
import LoginComponet from "../../components/login/Login.component";
import RegisterComponent from "../../components/register/Register.component";
import { ReactComponent as GrilImg } from "../../assets/images/login-register/docs.svg";
const LoginRegisterPage = () => (
  <div className="login-register-page">
    <div className="page-login">
      <LoginComponet />
    </div>
    <div className="page-register">
      <GrilImg className="girl-img" />
      <RegisterComponent />
    </div>
  </div>
);
export default LoginRegisterPage;
