import React from "react";
import { Link } from "react-router-dom";
import "../../styles/css/header.styles.css";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = (currentUser) => (
  <nav className="navbar navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option badge badge-light" to="/shop">
        Shop
      </Link>
      &nbsp; &nbsp;
      <Link className="option badge badge-light" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <Link className="option badge badge-light" to="/register">
          Login
        </Link>
      ) : (
        <Link
          className="option badge badge-light"
          to="/"
          onClick={() => auth.signOut()}
        >
          Logout
        </Link>
      )}
      <Link
        className="option badge badge-danger"
        to="/"
        onClick={() => auth.signOut()}
      >
        Logout
      </Link>
    </div>
  </nav>
);

export default Header;
