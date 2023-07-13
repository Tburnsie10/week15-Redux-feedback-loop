import React from "react";
import axios from "axios";
import "./App.css";
import {Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

//feeling, understanding, support, comment.




function Feeling() {

    const dispatch = useDispatch()


  function handleSubmit(event) {
    dispatch({type:'SET_FEELINGS', payload:event.target.parentElement.parentElement.querySelector('input').value})
    console.log(event.target.parentElement.parentElement.querySelector("input").value);
    event.target.parentElement.parentElement.querySelector('input').value = ''
  }

  return (
    <div className="App">
      <h1>How are you feeling today?</h1>
      <p>Feelings?</p>
      <input type="number"></input>
      <button onClick={handleSubmit}><Link to="/understanding">Click</Link></button>
      <br></br>
      <button><Link to="/understanding">Next</Link></button>
    </div>
  );
}

export default Feeling;
