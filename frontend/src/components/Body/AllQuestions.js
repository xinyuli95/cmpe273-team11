import { Avatar } from "@material-ui/core";
import React from "react";
import "./AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions() {
  return (
    <div className="allquestions">
      <div className="allquestions__container">
        <div className="allquestions__containerLeft">
          <div className="allquestions__containerLeftOptions">
            <div className="allquestions__containerLeftOptionsOption">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="allquestions__containerLeftOptionsOption">
              <p>0</p>
              <span>answers</span>
            </div>
            <div className="allquestions__containerLeftOptionsOption">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="allquestions__containerAnswer">  
          <Link>What does the "yield" keyword do?</Link> 

          <div style={{ maxWidth: "90%",}}>
            <div>The yield keyword in Python used to exit from the code without disturbing the state 
                 of local variables and when again the function is
                 called the execution starts from the last point where we left the code.</div>
          </div>


          <div style={{display: "flex",}}>
              <span className="allquestions__containerAnswerTags">python</span>  
              <span className="allquestions__containerAnswerTags">react</span>  
              <span className="allquestions__containerAnswerTags">java</span>      
                    
          </div>

          <div className="allquestions__containerAnswerAuthor">
            <small>Time Stamp</small>
            <div className="allquestions__containerAnswerAuthorDetails">
              <Avatar />
              <p>User Name</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
