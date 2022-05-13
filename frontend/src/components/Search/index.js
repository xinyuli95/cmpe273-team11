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
  // console.log("query: ", query);

  function parseQuery(query) {;
      let tagsMatch;
      
      let result = {
        title: "",
        user: "",
        tags: [],
        type: "",
        accepted: "",
      };

      const exactRE = /"([A-Za-z0-9_\-.]*)"/gm
      const exactMatch = exactRE.exec(query);
      const userRE = /user:([A-Za-z0-9_\-.]*)/gm;
      const userMatch = userRE.exec(query);
      const tagsRE = /\[([A-Za-z0-9_\-.]*)\]/gm;
      do {
        tagsMatch = tagsRE.exec(query);
        if (tagsMatch) {
            result.tags.push(tagsMatch[1]);
        }
      } while (tagsMatch);
      for (let i in result.tags) {
          const tagstring = "["+result.tags[i]+"]";
          query = query.replace(tagstring, "");
      }

      const typeRE = /is:([A-Za-z0-9_\-.]*)/gm;
      const typeMatch = typeRE.exec(query);
      const acceptedRE = /isaccepted:([A-Za-z0-9_\-.]*)/gm;
      const acceptedMatch = acceptedRE.exec(query);

      if (exactMatch) {
        result.title = exactMatch[1];
        query = query.replace(exactMatch[0], "");
      }
      if (userMatch) {
        result.user = userMatch[1];
        query = query.replace(userMatch[0], "");
      }
      if (typeMatch) {
        result.type = typeMatch[1];
        query = query.replace(typeMatch[0], "");
      }
      if (acceptedMatch) {
        result.accepted = acceptedMatch[1];
        query = query.replace(acceptedMatch[0], "");
      }
      query = query.replace(" ", "").trim();
      if (result.title === ""){
        result.title = query;
      };

      return result;
  };

  useEffect(() => {
    async function getQuestion() {
      const bodyJSON = parseQuery(query);
      console.log(bodyJSON);
      /*
      await axios
          .post("/api/search",bodyJSON)
          .then((res) => {
            setQuestions(res.data.reverse());
          })
          .catch((err) => {
            console.log(err);
          });
      */
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