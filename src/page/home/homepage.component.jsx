import React from "react";
import "../../styles/css/homepage.styles.css";
import Directory from "../../components/directory/directory.component";

const HomePage = ({ history }) => (
  <div className="homePage">
    <Directory history={history} />
  </div>
);

export default HomePage;
