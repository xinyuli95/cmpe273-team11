import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import  {TagsInput} from 'react-tag-input-component';
import { WithContext as ReactTags } from 'react-tag-input';
import './Question.css'

function Question() {
  return (
    <div className="question">
      <div className="question__containter">
        <div className="question__containterTitle">
          <h1>Ask a Public Question</h1>
        </div>
        <div className="question__containterQuestion">
          <div className="question__containterQuestionOptions">
            <div className="question__containterQuestionOptionsOption">
              <div className="question__containterQuestionOptionsOptionTitle">
                <h3>Title</h3>
                <small className="">
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                  type="text"
                  className=""
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question__containterQuestionOptionsOption">
              <div className="question__containterQuestionOptionsOptionTitle">
                <h3>Body</h3>
                <small className="">
                  Include all the information someone would need to answer your
                  question.
                </small>
                <ReactQuill className="question__reactQuill" theme="snow" />
              </div>
            </div>
            <div className="question__containterQuestionOptionsOption">
              <div className="question__containterQuestionOptionsOptionTitle">
                <h3>Tags</h3>
                <small className="">
                  Add up to 5 tags to describe what your question is about
                </small>
                <ReactTags
                  name="fruits"
                  className="question__ReactTags"
                  placeHolder="press enter to add new tag"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="question__containterButton">Add your question</button>
      </div>
    </div>
  );
}

export default Question;
