import React from "react";
import axios from "axios";
import "./App.css";
import Admin from "./Admin";
import Thanks from "./Thanks";
import Feeling from "./Feeling";
import Support from "./Support";
import Comment from "./Comment";
import Review from "./Review";
import Understanding from "./Understanding";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//feeling, understanding, support, comment.

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>Don't forget it!</h4>
            <button><Link to="/admin">Admin</Link></button>
          </header >
          <Route path="/thanks">
            <Thanks></Thanks>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/" exact>
            <button><Link to="/feelings">Give Feedback</Link></button>
          </Route>
          <Route path="/feelings">
            <Feeling></Feeling>
          </Route>
          <Route path="/understanding">
            <Understanding></Understanding>
          </Route>
          <Route path="/support">
            <Support></Support>
          </Route>
          <Route path="/comment">
            <Comment></Comment>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
