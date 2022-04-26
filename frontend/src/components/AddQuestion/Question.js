import React from "react";
// import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "./Question.css";
// import Editor from "react-quill/lib/toolbar";
// import axios from "axios";
import { TagsInput } from "react-tag-input-component";
// import { selectUser } from "../../feature/userSlice";
// import { useHistory } from "react-router-dom";
// import ChipsArray from "./TagsInput";

function Question() {

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
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
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
                  // value={body}
                  // onChange={handleQuill}
                  // modules={Editor.modules}
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
                  // value={tag}
                  // onChange={setTag}
                  className="tagsInput"
                  name="tags"
                  placeHolder="press enter to add new tag"
                />

                {/* <ChipsArray /> */}
              </div>
            </div>
          </div>
        </div>

        <button className="button">
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Question;