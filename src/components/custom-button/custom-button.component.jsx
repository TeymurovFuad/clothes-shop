import React from "react";
import "../../styles/css/custom-button.styles.css";
import { auth } from "../../firebase/firebase.utils";

const CustomButton = ({
  inverted,
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    disabled={auth.currentUser ? true : false}
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button btn-sm`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
