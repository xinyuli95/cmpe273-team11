import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import CheckIcon from "@material-ui/icons/Check";
import ReactQuill from "react-quill";
import Editor from "react-quill/lib/toolbar";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import { stringAvatar } from "../../utils/Avatar";

function MainQuestion() {
  const [voteCount, setVoteCount, RefVote] = useState(1);
  const [checkMark, setCheckMark] = useState("");
  const [bookMark, setBookMark] = useState("");

  //   useEffect(() => {
  //  setVoteCount(voteCount + 1);

  // }, [voteCount]);

  const handleUpVote = () => {
    setVoteCount(voteCount + 1);
    console.log("first" + voteCount);
    const body = {
      question_id: id,
      vote: voteCount,
    };
    console.log("second" + voteCount);
    axios
      .post(`/api/vote/${id}`, body)
      .then((res) => {
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };
  const handleDownVote = () => {
    setVoteCount(voteCount - 1);
    const body = {
      question_id: id,
      vote: voteCount,
    };

    axios
      .post(`/api/vote/${id}`, body)
      .then((res) => {
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [
      { color: ["#ff0000", "#00ff00", "#0000ff", "#220055"] },
      { background: [] },
    ], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  Editor.modules = {
    syntax: false,
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [showanswercomment, setShowanswercomment] = useState(false);
  const [comment, setComment] = useState("");
  const [answercomment, setanswercomment] = useState("");
  // const [comments, setComments] = useState([]);
  // const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    async function getFunctionDetails() {
      await axios
        .get(`/api/question/${id}`)
        .then((res) => {
          setQuestionData(res.data[0]);
          console.log(res.data[0]);
          setVoteCount(res.data[0].votes[res.data[0].votes.length - 1].vote);
        })
        .catch((err) => console.log(err));
    }
    getFunctionDetails();
 
  }, [id]);




  async function getUpdatedAnswer() {
    await axios
      .get(`/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  // console.log(questionData);
  const handleSubmit = async () => {
    const body = {
      question_id: id,
      answer: answer,
      user: localStorage.getItem('username'),
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/api/answer", body, config)
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
        user: localStorage.getItem('username'),
      };
      await axios.post(`/api/comment/${id}`, body).then((res) => {
        setComment("");
        setShow(false);
        getUpdatedAnswer();
        // console.log(res.data);
      });
    }

    // setShow(true)
  };

  const handleanswercomment = async () => {
    if (answercomment !== "") {
      const body = {
        question_id: id,
        answercomment: answercomment,
        user: localStorage.getItem('username'),
      };
      await axios.post(`/api/answercomment/${id}`, body).then((res) => {
        setanswercomment("");
        setShowanswercomment(false);
        getUpdatedAnswer();
        // console.log(res.data);
      });
    }

    // setShow(true)
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title} </h2>
          <Link to="/addquestion">
            <button>Ask Question</button>
          </Link>
          {/* <a href="/addquestion">
            <button>Ask Question</button>
          </a> */}
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked
              <span>{new Date(questionData?.created_at).toLocaleString()}</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p
                  className="arrow"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={handleUpVote}
                >
                  ▲
                </p>

                <p
                  className="arrow"
                  id="voteCount"
                  style={{ fontSize: "30px" }}
                >
                  {voteCount}
                </p>

                <p
                  className="arrow"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={handleDownVote}
                >
                  ▼
                </p>

                <BookmarkIcon style={{ fontSize: "25px", cursor: "pointer" }} />

                <HistoryIcon style={{ fontSize: "25px", cursor: "pointer" }} />
              </div>
            </div>
            <div className="question-answer">
              <p>{ReactHtmlParser(questionData?.body)}</p>

              <div className="author">
                <small>
                  asked {new Date(questionData?.created_at).toLocaleString()}
                </small>
                <div className="auth-details">
                  <Link to="/userprofile">
                  <Avatar {...stringAvatar(questionData?.user?.displayName)} />
                  </Link>
                  <p>
                   
                    {questionData?.user ===  undefined || questionData?.user === null || questionData?.user === ""
                      ?"Lee"
                      : questionData?.user}
                  </p>
                </div>
              </div>

              <div className="comments">
                <div className="comment">
                  {questionData?.comments &&
                    questionData?.comments.map((_qd) => (
                      <p key={_qd?._id}>
                        {_qd.comment}{" "}
                        <span>
                          - {_qd.user ? _qd.user.displayName : "Nate Eldredge"}
                        </span>{" "}
                        {"    "}
                        <small>
                          {new Date(_qd.created_at).toLocaleString()}
                        </small>
                      </p>
                    ))}
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
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      onClick={handleComment}
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
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {questionData && questionData?.answerDetails.length} Answers
          </p>
          {questionData?.answerDetails.map((_q) => (
            <>
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                key={_q._id}
                className="all-questions-container"
              >
                <div className="all-questions-left">

                <div className="all-options">
                <p
                  className="arrow"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                 
                >
                  ▲
                </p>

                <p
                  className="arrow"
                  id="voteCount"
                  style={{ fontSize: "30px" }}
                >
                  0
                </p>

                <p
                  className="arrow"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  
                >
                  ▼
                </p>
                <CheckIcon
                      style={{ fontSize: "50px", cursor: "pointer" }}
                    />

                <BookmarkIcon style={{ fontSize: "25px", cursor: "pointer" }} />

                <HistoryIcon style={{ fontSize: "25px", cursor: "pointer" }} />
              </div>

                
                </div>
                <div className="question-answer">
                  {ReactHtmlParser(_q.answer)}
                  <div className="author">
                    <small>
                      asked {new Date(_q.created_at).toLocaleString()}
                    </small>
                    <div className="auth-details">
                      <Avatar {...stringAvatar(_q?.user?.displayName)} />
                      <p>
                   
                   {_q?.user ===  undefined || _q?.user === null || _q?.user === ""
                     ?"Lee"
                     : _q?.user}
                 </p>
                    </div>
                  </div>

                  {/* answercomments */}

                  <div className="comments">
                    <div className="comment">
                      {questionData?.answercomments &&
                        questionData?.answercomments.map((_qd) => (
                          <p key={_qd?._id}>
                            {_qd.answercomment}{" "}
                            <span>
                              -{" "}
                              {_qd.user
                                ? _qd.user.displayName
                                : "Nate Eldredge"}
                            </span>{" "}
                            {"    "}
                            <small>
                              {new Date(_qd.created_at).toLocaleString()}
                            </small>
                          </p>
                        ))}
                    </div>
                    <p onClick={() => setShowanswercomment(!showanswercomment)}>
                      Add a comment
                    </p>
                    {showanswercomment && (
                      <div className="title">
                        <textarea
                          style={{
                            margin: "5px 0px",
                            padding: "10px",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            borderRadius: "3px",
                            outline: "none",
                          }}
                          value={answercomment}
                          onChange={(e) => setanswercomment(e.target.value)}
                          type="text"
                          placeholder="Add your comment..."
                          rows={5}
                        />
                        <button
                          onClick={handleanswercomment}
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
            </>
          ))}
        </div>

      </div>
      <div className="main-answer">
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
          value={answer}
          onChange={handleQuill}
          modules={Editor.modules}
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
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
