import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import "./index.css";
import Profile from "./Profile";

function Index() {
  return (
    <div className="stack_index">
      <div className="stack_index_content">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default Index;