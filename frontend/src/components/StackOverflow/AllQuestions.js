import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({ data }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // console.log(FormData)
  // console.log(data?.votes[data?.votes?.length - 1]?.vote);
  // console.log(data?.user);
  // console.log(data?.created_at.toISOString().slice(0,10).replace(/-/g,""));



  //setVoteCount(res.data[0].votes[res.data[0].votes.length - 1].vote);
  // let tags = data?.tags;
  let tags = JSON.parse(data?.tags[0]);

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>

              {data?.votes?.length > 0
                  ? data?.votes[data?.votes?.length - 1]?.vote
                  : 
                0}

                {/* {data?.votes[data?.votes?.length - 1]?.vote} */}
              </p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${data?._id}`}>{data.title}</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(data.body, 200))}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>
          <div className="author">
            <small>{data.create_at}</small>
            <div className="auth-details">
               
              <Link to="/userprofile">
              <Avatar {...stringAvatar(data?.user?.displayName)} />
              </Link>
               
              <p>
                {data?.user ===  undefined || data?.user === null || data?.user === ""
                  ?  "Elon"
                  :  data?.user
                }
                  
              </p>
              <p style={{color: "black"}}>asked {new Date(data.created_at).toLocaleString()}</p>

               
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
