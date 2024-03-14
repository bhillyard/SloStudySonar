import React from "react";
import StarRating from "./StarRating"; // Import the StarRating component
import { useState, useEffect } from "react";

const ReviewBox = ({ starRating, reviewTitle, author, date, review }) => {
  const [username, setUsername] = useState(""); // State to store the username
  const [formattedDate, setFormattedDate] = useState(""); // State to store the formatted date
  useEffect(() => {
    // Fetch username for the current review
    // eslint-disable-next-line no-undef
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${author}`) // Assuming userId exists in review data
      .then((response) => response.json())
      .then((data) => setUsername(data.displayName))
      .catch((error) => console.error("Error fetching username:", error));

    const parsedDate = new Date(date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDateString = parsedDate.toLocaleDateString("en-US", options);
    setFormattedDate(formattedDateString);
  }, []); // Only fetch when userId changes

  return (
    <div className="col-12 my-1">
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <StarRating initialRating={starRating} />
          </div>
          <div className=" mt-2 col-md-8">
            <h5>{reviewTitle}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <p className="text-center mb-0">{username}</p>
            <p className="text-center mb-0">{formattedDate}</p>
          </div>
          <div className="col-md-8">
            <p className="me-2">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
