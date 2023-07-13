import React from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { MdDeleteForever } from 'react-icons/md';

//feeling, understanding, support, comment.

function Admin() {
    const handleDelete = (event) => {
        let id = event.target.id
        console.log(id)
        axios.delete(`/feedback/${id}`)

        axios.get("/feedback").then((response) => {
            setFeedback(response.data);
        })

    }

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get("/feedback").then((response) => {
      console.log(response.data);
      setFeedback(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Feedback Results</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item) => {
            return (
              <tr id={item.id}>
                <td id={item.id}>{item.feeling}</td>
                <td id={item.id}>{item.understanding}</td>
                <td id={item.id}>{item.support}</td>
                <td id={item.id}>{item.comments}</td>
                <td id={item.id}><button onClick={handleDelete} id={item.id}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <br></br>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Admin;
