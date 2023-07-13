import React from 'react';
import axios from 'axios';
import './App.css';
import {Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

//feeling, understanding, support, comment.


function Support() {

    const dispatch = useDispatch()


    function handleSubmit(event) {
        dispatch({type:'SET_SUPPORT', payload:event.target.parentElement.parentElement.querySelector('input').value})
        console.log(event.target.parentElement.parentElement.querySelector('input').value)
        event.target.parentElement.parentElement.querySelector('input').value = ''
    }

  return (
    <div className='App'>
      <h1>How do you feel you are being supported in the course?</h1>
      <p>Level of Support?</p>
      <input type="number" ></input>
      <button onClick={handleSubmit}><Link to="/comment">Click</Link></button>
      <br></br>
      <button><Link to="/comment">Next</Link></button>
      <button><Link to="/understanding">Last</Link></button>
    </div>
  );
}

export default Support;