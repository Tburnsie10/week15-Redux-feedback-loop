import React from 'react';
import axios from 'axios';
import './App.css';
import {Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

//feeling, understanding, support, comment.


function Review() {

    let store = useSelector((store) => store)
    let handleSubmit = (event) => {
      axios.post('/feedback', store)
      .then(response => {console.log(response)})
      .then(error => {console.log(error)})

      console.log(store)
    }

  return (
    <div className='App'>
      <h1>Review Your Feedback</h1>
      <p>Feeling</p>
      <p>{store.feeling}</p>
      <p>Understanding</p>
      <p>{store.understanding}</p>
      <p>Support</p>
      <p>{store.support}</p>
      <p>Comment</p>
      <p>{store.comment}</p>

      <button onClick={handleSubmit}><Link to="/thanks">Submit</Link></button>
      <br></br>
      <button><Link to="/">Restart</Link></button>
    </div>
  );
}

export default Review;