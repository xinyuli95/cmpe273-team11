import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import PublicIcon from "@material-ui/icons/Public";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__containerOptions">
          <div className="sidebar__containerOptionsOption">
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar__containerOptionsOption">
            <p>PUBLIC</p>
            <div className="sidebar__containerOptionsOptionLink">
              <div className="sidebar__containerOptionsOptionLinkTag">
                <PublicIcon />
                <Link to="/">Question</Link>
              </div>
              <div className="sidebar__containerOptionsOptionLinkTags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar