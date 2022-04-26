import React from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";

function Index() {

  return (
    <div className="stack_index">
      <div className="stack_index_content">
        <Sidebar />
        <Main/>
      </div>
    </div>
  );
}

export default Index;
