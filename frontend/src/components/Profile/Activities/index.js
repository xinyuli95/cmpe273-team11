import React from "react";
import Sidebar from "../../StackOverflow/Sidebar";
import "./index.css";
import Activities from "./Activities";

function Index() {
  return (
    <div className="stack_index">
      <div className="stack_index_content">
        <Sidebar />
        <Activities />
      </div>
    </div>
  );
}

export default Index;