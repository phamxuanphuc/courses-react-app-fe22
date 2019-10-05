import React, { useState } from "react";

//Components
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.component";

const RegisterComponent = () => {
  const [userNew, setUser] = useState({ email: "", password: "", name: "" });
  const { email, password, name } = userNew;
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setUser({ ...userNew, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <h3 className="title">Sign Up and Start Learning!</h3>
      <div className="sub-title">Sign up with your email and password</div>
      <div className="signIn-form">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="name"
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={handleChange}
            required={true}
          />
          <FormInput
            name="email"
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleChange}
            required={true}
          />
          <FormInput
            name="password"
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
            required={true}
          />
          <div className="button">
            <Button type='button' signInGoogle={true}>
              <span class="lnr lnr-arrow-left mr-1"></span>Go Home
            </Button>

            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterComponent;
