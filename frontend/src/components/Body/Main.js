import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./Main.css";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";


function Main({ questions }) {

  return (
    <div className="main">
      <div className="main__container">
        <div className="main__containerTop">
          <h2>All Questions</h2>
          <Link to="/addquestion">
            <button>Ask Question</button>
          </Link>


        </div>

        <div className="main__containerDesc">
          <p>4 questions</p>
          <div className="main__containerDescFilter">
            <div className="main__containerDescTabs">
              <div className="main__containerDescTab">

                <Link to="/">Newest</Link>
              </div>
              <div className="main__containerDescTab">
                <Link to="/">Active</Link>
              </div>
              <div className="main__containerDescTab">
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="main__containerDescFilterItem">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="main__containerQuestions">
        <AllQuestions />
        <AllQuestions />
        <AllQuestions />
        <AllQuestions />
        <AllQuestions />
        <AllQuestions />
        <AllQuestions />
        <AllQuestions />
          {/* {questions?.map((_q) => (
            <div className="question">
              <AllQuestions data={_q} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Main;