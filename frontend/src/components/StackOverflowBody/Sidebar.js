import React from "react";
// import PublicIcon from "@material-ui/icons/Public";
// import StarsIcon from "@material-ui/icons/Stars";
// import WorkIcon from "@material-ui/icons/Work";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_options">
          <div className="sidebar_option">
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar_option">
            <Link to="/">Tags</Link>
          </div>
          <div className="sidebar_option">
            <Link to="/">Users</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
