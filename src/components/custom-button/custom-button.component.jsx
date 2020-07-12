import React from "react";
import "../../styles/css/custom-button.styles.css";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const CustomButton = (children, ...otherProps) => (
  <button
    className={`${
      children.children === "Google" ? "google-button" : ""
    } custom-button btn-sm`}
    /*onClick={
      children.children == "SIGN IN WITH GOOGLE" ? { signInWithGoogle } : ""
    }*/
    onClick={signInWithGoogle}
  >
    {children.children}
  </button>
);

export default CustomButton;
