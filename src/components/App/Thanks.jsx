import React from 'react';
import './App.css';
import {Link } from "react-router-dom";


//feeling, understanding, support, comment.


function Thanks() {


  return (
    <div className='App'>
    <h1>Thanks for leaving feedback!</h1>
      <br></br>
      <button><Link to="/feelings">Leave more feedback?</Link></button>
    </div>
  );
}

export default Thanks;