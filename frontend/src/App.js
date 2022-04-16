import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body';
import Question from './components/AddQuestion/Question';

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch> 
          <Route exact path="/addquestion" component={Question} />
          <Route exact path="/" component={Body} />
          {/* <Route exact path="/addquestion" component={Body} />    */}
          
          <Route path="/">
            
          </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
