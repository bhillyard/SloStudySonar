import React from "react";
import StarRating from "./StarRating"; // Import the StarRating component
import { useState, useEffect } from "react";

const ReviewBox = ({ starRating, reviewTitle, author, date }) => {
  const [username, setUsername] = useState(""); // State to store the username
  const [formattedDate, setFormattedDate] = useState(""); // State to store the formatted date
  useEffect(() => {
    // Fetch username for the current review
    fetch(`slostudysonar.azurewebsites.net/users/${author}`) // Assuming userId exists in review data
      .then((response) => response.json())
      .then((data) => setUsername(data.displayName))
      .catch((error) => console.error("Error fetching username:", error));

    const parsedDate = new Date(date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDateString = parsedDate.toLocaleDateString("en-US", options);
    setFormattedDate(formattedDateString);
  }, []); // Only fetch when userId changes

  return (
    <div className="review-box d-flex flex-column border p-3">
      <div className="d-flex align-items-center mb-2">
        <div className="star-rating mr-2">
          <StarRating initialRating={starRating} />{" "}
          {/* Replace with SimpleStarRating */}
        </div>
        <div className="reviewer-info">
          <div className="review-title flex-grow-1">{reviewTitle}</div>
          <div className="user-info text-muted">
            <span className="mr-2">{username}, </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
