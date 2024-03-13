import React, { useState } from "react";
import StarRating from "./StarRating"; // Import the StarRating component
import { useLocation } from "react-router-dom";

const SpaceReviewPage = () => {
  const location = useLocation();
  const { _id } = location.state;
  console.log(_id);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Logic to submit review
    console.log("Title:", title);
    console.log("Review:", review);
    console.log("Rating:", rating);
    // Reset form fields after submission
    setTitle("");
    setReview("");
    setRating(0);
  };

  return (
    <div>
      <h1>Submit Review</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
        />
      </div>
      <div>
        <label>Review:</label>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Enter review"
        ></textarea>
      </div>
      <div>
        <label>Rating:</label>
        <StarRating initialRating={rating} onChange={handleRatingChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default SpaceReviewPage;
