import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import StackoverflowBody from './components/StackOverflowBody';
import AskQuestion from './components/AddQuestion/Question';
import ViewQuestion from './components/ViewQuestion';
import Auth from './components/Auth';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={StackoverflowBody} />
        <Route exact path="/viewquestion" component={ViewQuestion} />
        <Route path="/addquestion" >
          <AskQuestion/>
        </Route>
        <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
