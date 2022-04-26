import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
// import axios from "axios";

function Main() {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top">
          <h2>All Questions</h2>
          <Link to="/addquestion">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main_desc">
          <p>questions</p>
          <div className="main_filter">
            <div className="main_tabs">
              <div className="main_tab">
                <Link to="/">Newest</Link>
              </div>
              <div className="main_tab">
                <Link to="/">Active</Link>
              </div>
              <div className="main_tab">
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="main_filter_item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
         
            <div className="question">
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
              <AllQuestions/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
