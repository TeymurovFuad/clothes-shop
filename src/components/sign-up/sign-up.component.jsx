import React from "react";
import "../../styles/css/sign-up.styles.css";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUSerProfileDcument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("The passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUSerProfileDcument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Logged in successfully");
    } catch (error) {
      console.error(error);
      alert(console.error(error));
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">New User</h2>
        <span>Sign up with your credentials</span>
        <form
          action=""
          onSubmit={this.handleSubmit}
          className="form sign-up-form"
        >
          <div className="input-group">
            <FormInput
              type="text"
              name="displayName"
              onChange={this.handleChange}
              value={displayName}
              label="Name"
              required
            />
            &nbsp; &nbsp;
            <FormInput
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email}
              label="Email"
              required
            />
          </div>
          <div className="input-group">
            <FormInput
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
              label="Passwrod"
              required
            />
            &nbsp; &nbsp;
            <FormInput
              type="password"
              name="confirmPassword"
              onChange={this.handleChange}
              value={confirmPassword}
              label="Confirm Password"
              required
            />
          </div>
          <CustomButton type="submit">Sing Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
