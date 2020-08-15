import React from "react";
import "../../styles/css/custom-button.styles.css";
import { auth } from "../../firebase/firebase.utils";

const CustomButton = ({
  addToCard,
  isGoogleSignIn,
  checkoutButton,
  children,
  ...otherProps
}) => {
  console.log(
    "custom button component",
    auth.currentUser ? true : false,
    checkoutButton ? true : false
  );
  return (
    <button
      disabled={auth.currentUser && checkoutButton ? true : false}
      className={`${addToCard ? "addToCard" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button btn-sm`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
