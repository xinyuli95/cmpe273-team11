import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link to="/">Home</Link>
          </div>

          <div className="sidebar-option">
            <div className="link">
              <div className="link-tag">
                <PublicIcon  />
                <Link to="/">Questions</Link>
              </div>
              
              {/* <div className="link-tag">
                <Link to="/tags">Tags</Link>
              </div>
              <div className="link-tag">
                <Link to="/users" >Users</Link>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
