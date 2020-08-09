import React from "react";

import "../../styles/css/menu-item.styles.css";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, col, linkUrl, history, match }) => (
  <div className="menu-item" onClick={() => history.push(match.url + linkUrl)}>
    <div className={"menu-item col-md-" + col}>
      <div
        className="bg-image"
        style={{ backgroundImage: "url(" + imageUrl + ")" }}
      >
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
