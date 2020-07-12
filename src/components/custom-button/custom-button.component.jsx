import React from "react";
import "../../styles/css/custom-button.styles.css";
import { auth } from "../../firebase/firebase.utils";

const CustomButton = (children, isGoogleSignIn, ...otherProps) => (
  <button
    disabled={auth.currentUser ? true : false}
    className={`${
      children.children === "Google" ? "google-button" : ""
    } custom-button btn-sm`}
    {...otherProps}
  >
    {children.children}
  </button>
);

export default CustomButton;
