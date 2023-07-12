import React from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//feeling, understanding, support, comment.

function Understanding() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    dispatch({
      type: "SET_SUPPORT",
      payload: event.target.parentElement.querySelector("input").value,
    });
    console.log(event.target.parentElement.querySelector("input").value);
  }

  return (
    <div className="App">
      <h1>How are you understanding the material?</h1>
      <p>Understanding?</p>
      <input type="number"></input>
      <button onClick={handleSubmit}>Click</button>
      <br></br>
      <button>
        <Link to="/support">Next</Link>
      </button>
      <button>
        <Link to="/feelings">Last</Link>
      </button>
    </div>
  );
}

export default Understanding;