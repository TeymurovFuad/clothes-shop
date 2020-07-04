import React from "react";
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
    console.log({ event });
    console.log(event.target.email);
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <h2>Existing user</h2>
        <span>Login with your credentials :</span>

        {/* Login form */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="loginMail">Email </label>
          <input
            name="email"
            id="loginMail"
            type="email"
            placeholder="example@sample.com"
            value={this.state.email}
            required
            onChange={this.handelChange}
          />
          <br />
          <label htmlFor="loginpassword">Password </label>
          <input
            name="password"
            id="loginpassword"
            type="password"
            placeholder="5Fdg5v4sd6!"
            value={this.state.password}
            required
            onChange={this.handelChange}
          />
          <br />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default Login;
