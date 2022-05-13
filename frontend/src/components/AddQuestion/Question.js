import React, {useState} from "react";
// import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "./Question.css";
import Editor from "react-quill/lib/toolbar";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import {useHistory} from "react-router-dom";
// import Editor from "react-html-parser/demo/src/js/components/Editor";
// import { selectUser } from "../../feature/userSlice";
// import { useHistory } from "react-router-dom";
// import ChipsArray from "./TagsInput";

function Question() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  // const [user, setUSer] = useState("");
  const history = useHistory();
  const handleQuill = (value) => {
    setBody(value);
  };

  // setUsername("Javeed Sanganakal");

  alert(localStorage.getItem("username"));
  

  // const [question, setQuestion] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    alert();

    if (title !== "" && body !== "") {
      const body = {
        title: title,
        body: body,
        tag: JSON.stringify(tag),
        user: localStorage.getItem("username"),

      };
      await axios
          // .post("http://34.226.123.6:3001/question/create", bodyJSON)
          .post("/api/question", body)
          .then((res) => {
            // console.log(res.data);
            alert("Question added successfully");
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
    }
  };
  return (
    <div className="add_question">
      <div className="add_question_container">
        <div className="head_title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question_container">
          <div className="question_options">
            <div className="question_option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question_option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
                  value={body}
                  onChange={handleQuill}
                  modules={Editor.modules}
                  className="react_quill"
                  theme="snow"
                />
              </div>
            </div>
            <div className="question_option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>
                {/* <input
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  data-role="tagsinput"
                  data-tag-trigger="Space"
                  type="text"
                  placeholder="e.g. (asp.net-mvc php react json)"
                /> */}

                <TagsInput
                  value={tag}
                  onChange={setTag}
                  className="tagsInput"
                  name="tags"
                  placeHolder="press enter to add new tag"
                />

                {/* <ChipsArray /> */}
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleSubmit}className="button">
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Question;