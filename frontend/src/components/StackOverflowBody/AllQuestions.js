import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions() {
  return (
    <div className="all_questions">
      <div className="all_questions_container">
        <div className="all_questions_left">
          <div className="all_options">
            <div className="all_option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all_option">
              <p>3</p>
              <span>answers</span>
            </div>
            <div className="all_option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question_answer">
          <Link to="/viewquestion"> Does Python have a ternary conditional operator?</Link>

          <div style={{maxWidth: "90%"}}>
            <div>
              The order of the arguments is different from those of the classic
              condition ? a : b ternary operator from many other languages (such
              as C, C++, Go, Perl, Ruby, Java, JavaScript, etc.), which may lead
              to bugs when people unfamiliar with Python's "surprising" behavior
              use it (they may reverse the argument order). Some find it
              "unwieldy" since it goes contrary to the normal flow of thought
              (thinking of the condition first and then the effects).
            </div>

          </div>

          <div style={{display: "flex"}}>
          {/* <p
            // style={{
            //   margin: "10px 5px",
            //   padding: "5px 10px",
            //   backgroundColor: "#007cd446",
            //   borderRadius: "3px",
            // }}
          > */}
            <span className="question_tags">react</span>
            <span className="question_tags">python</span>
            <span className="question_tags">c++</span>
          {/* </p> */}
        </div>

        <div className="author">
          <small>Time Stamp</small>
          <div className="auth_details">
            <Avatar />
            <p>Javeed</p>
          </div>
        </div>

        </div>

        
      </div>
    </div>
  );
}

export default AllQuestions;
