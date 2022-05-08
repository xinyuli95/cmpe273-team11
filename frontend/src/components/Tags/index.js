import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import Tags from "./Tags";
import "./Tags.css";


function Index() {

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Tags />
      </div>
    </div>
  );
}

export default Index;