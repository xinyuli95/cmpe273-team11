import React from "react";
import Sidebar from "../StackOverflowBody/Sidebar";
import "./index.css";
import MainQuestion from "./MainQuestion";

function Index() {
  return (
    <div className="stack_index">
      <div className="stack_index_content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default Index;
