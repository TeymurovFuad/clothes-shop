import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "../../styles/css/directory.styles.css";
import SectionsData from "../../data/sections.data.js";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SectionsData,
    };
  }

  render() {
    console.log("directory components");
    return (
      <div className="row">
        <div className="directory-menu">
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
