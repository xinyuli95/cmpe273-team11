import React, { useEffect, useState } from "react";
import Sidebar from "../StackOverflow/Sidebar";
import "./css/index.css";
import Main from "../StackOverflow/Main";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Index() {
  const [questions, setQuestions] = useState([]);
  // const [query, setQuery] = useState("")
  const query = new URLSearchParams(window.location.search).get('s');
  console.log("query: ", query);

  useEffect(() => {
    async function getQuestion() {
      const bodyJSON = {
        title: query
      }
      await axios
          .post("/api/search",bodyJSON)
          .then((res) => {
            setQuestions(res.data.reverse());
          })
          .catch((err) => {
            console.log(err);
          });
    }
    getQuestion();
  }, [query]);

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;