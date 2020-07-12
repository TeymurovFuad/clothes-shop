import React from "react";
import "../../styles/css/form-input.styles.css";

const FormInput = ({ handelChange, label, ...otherProps }) => (
  <div className="group">
    <input
      // disabled={auth.currentUser ? true : false}
      className="form-input"
      onChange={handelChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? `shrink` : ``
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
