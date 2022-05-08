import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import ReactQuill from "react-quill";
import AllQuestions from "../StackOverflowBody/AllQuestions";
import { Link } from "react-router-dom";
import "./index.css";

function MainQuestion() {
  const [show, setShow] = useState(false);
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_top">
          <h2 className="main_question">What does the "yield" keyword do?</h2>
          <Link to="/addquestion">
            <button>Ask Question</button>
          </Link>
          {/* <a href="/add-question">
            <button>Ask Question</button>
          </a> */}
        </div>
        <div className="main_desc">
          <div className="info">
            <p>
              Time Stamp
              <span>Time Span</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all_questions">
          <div className="all_questions_container">
            <div className="all_questions_left">
              <div className="all_options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <CheckIcon />

                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question_answer">
              <p>The yield keyword in Python used to exit from the code without disturbing the state of
                 local variables and when again the function is called
                 the execution starts from the last point where we left the code?</p>

              <div className="author">
                <small>asked</small>
                <div className="auth_details">
                  <Avatar />
                  <p>Javeed</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    This is a comment __ <span>User Name</span>
                    <small>Time Stamp</small>
                  </p>
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      // value={comment}
                      // onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      // onClick={handleComment}
                        style={{
                        maxWidth: "fit-content",
                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all_questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
              Answers
          </p>

              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
       
                className="all_questions_container"
              >
                <div className="all_questions_left">
                  <div className="all_options">
                    <p className="arrow">▲</p>

                    <p className="arrow">0</p>

                    <p className="arrow">▼</p>
                    <CheckIcon/>
                    <BookmarkIcon />
                    <HistoryIcon />
                  </div>
                </div>
                <div className="question_answer">
                  <div className="author">
                    <small>
                      asked
                    </small>
                    <div className="auth_details">
                      {/* <header__rightAvatar/> */}
                      <p>
                         Richard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
 
        </div>
        <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div>
      </div>
      <div className="main_answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          // value={answer}
          // onChange={handleQuill}
          // modules={Editor.modules}
          className="react_quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        // onClick={handleSubmit}
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}

export default MainQuestion;
