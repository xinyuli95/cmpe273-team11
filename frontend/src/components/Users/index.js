import React, { useEffect, useState } from "react";
import Sidebar from "../StackOverflow/Sidebar";
import Users from "./Users";
import "./Users.css";


function Index() {

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Users />
      </div>
    </div>
  );
}

export default Index;