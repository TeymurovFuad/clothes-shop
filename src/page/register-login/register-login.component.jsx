import React from "react";
import "../../styles/css/register-login.styles.css";
import Login from "../../components/login/login.components";
import SignUp from "../../components/sign-up/sign-up.component";

const RegisterLogin = () => (
  <div className="register-login">
    <Login />
    <SignUp />
  </div>
);
console.log("register-login");
// console.log(Error());

export default RegisterLogin;
