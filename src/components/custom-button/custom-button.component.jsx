import React from "react";
import "../../styles/css/custom-button.styles.css";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const CustomButton = (isGoogleSignIn, children, ...otherProps) => (
  <button
    className={`${isGoogleSignIn ? "google-button" : ""} custom-button btn-sm`}
    /*onClick={
      children.children == "SIGN IN WITH GOOGLE" ? { signInWithGoogle } : ""
    }*/
    {...otherProps}
  >
    {children.children}
  </button>
);

export default CustomButton;
