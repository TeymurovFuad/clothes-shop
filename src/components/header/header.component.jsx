import React from "react";
import { Link } from "react-router-dom";
import "../../styles/css/header.styles.css";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <nav className="navbar navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option badge badge-primary" to="/shop">
        Shop
      </Link>
      &nbsp;
      <Link className="option badge badge-primary" to="/contact">
        Contact
      </Link>
      &nbsp;
      {!auth.currentUser ? (
        <Link className="option badge badge-warning" to="/register">
          Login
        </Link>
      ) : (
        <Link
          className="option badge badge-primary"
          to="/"
          onClick={() => auth.signOut()}
        >
          Logout
        </Link>
      )}
    </div>
  </nav>
);

const mapSTateToProp = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapSTateToProp)(Header);
