import React from 'react';
import axios from 'axios';
import './App.css';
import {Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

//feeling, understanding, support, comment.


function Comment() {

    const dispatch = useDispatch()


    function handleSubmit(event) {
        dispatch({type:'SET_COMMENT', payload:event.target.parentElement.parentElement.querySelector('input').value})
        console.log(event.target.parentElement.parentElement.querySelector('input').value)
        event.target.parentElement.parentElement.querySelector('input').value = ''
    }

  return (
    <div className='App'>
      <h1>Do you have any comments for us?</h1>
      <p>We would like to hear what you have to say.</p>
      <input type="text" ></input>
      <button onClick={handleSubmit}><Link to="/review">Click</Link></button>
      <br></br>
      <button><Link to="/review">Next</Link></button>
      <button><Link to="/support">Last</Link></button>
    </div>
  );
}

export default Comment;