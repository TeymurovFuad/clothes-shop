import React from "react";
import FormInput from "../form-input/form-input.component";
import "../../styles/css/login.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

console.log("Login");
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      err: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error("Login.component -> Error happened", error);
      this.setState({ err: error });
    }
  };

  handelChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <h2>Existing user</h2>
        <span>Login with your credentials :</span>
        {this.state.err ? (
          <span className="text-warning">{this.state.error}</span>
        ) : (
          ""
        )}

        {/* Login form */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            id="loginMail"
            type="email"
            value={this.state.email}
            required
            handelChange={this.handelChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
            handelChange={this.handelChange}
          />
          <span className="text-danger">
            {this.state.err ? this.state.err.message : ""}
          </span>
          <br />
          <div className="btn-group btn-group-sm w-100 d-flex justify-content-center">
            <CustomButton type="submit">Sign In</CustomButton>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
