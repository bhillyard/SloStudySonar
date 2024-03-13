import React from "react";
import "../style.css";
import BackArrowButton from "./BackArrowButton";
import Navbar from "../Navigation/Navbar";

function Reviews() {
  return (
    <div className="reviews-container">
      <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>

      <div className="back-arrow-container">
        <BackArrowButton
          onClick={() => {
            /* Add your click handler logic here */
          }}
        />
      </div>

      <h1 className="reviews-title">Your Reviews</h1>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Study Space</th>
            <th>Rating</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Baker</td>
            <td>★★★☆☆</td>
            <td>
              Great spot. Go here on weekends.
              <br />
              Jan 2021
            </td>
          </tr>
        </tbody>
      </table>
      <footer>
        <div className="container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Reviews;
