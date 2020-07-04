import React from "react";
import FormInput from "../form-input/form-input.component";
import "../../styles/css/login.styles.css";

console.log("Login");
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handelChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state.any);
  };

  render() {
    return (
      <div className="login">
        <h2>Existing user</h2>
        <span>Login with your credentials :</span>

        {/* Login form */}
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="loginMail">Email </label> */}
          <FormInput
            label="Email"
            name="email"
            id="loginMail"
            type="email"
            // placeholder="example@sample.com"
            value={this.state.email}
            required
            handelChange={this.handelChange}
          />
          {/* <label htmlFor="loginpassword">Password </label> */}
          <FormInput
            label="Password"
            name="password"
            // id="loginpassword"
            type="password"
            // placeholder="************"
            value={this.state.password}
            required
            handelChange={this.handelChange}
          />
          <br />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default Login;
