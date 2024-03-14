import React, { useState } from "react";
import StarRating from "./ClickStarRating"; // Import the StarRating component
import { useLocation } from "react-router-dom";
import BackArrowButton from "./BackArrowButton";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";


const CreateSpaceReviewPage = () => {
  const location = useLocation();
  const _id = location.state ? location.state._id : null;
  //const spaceId = id ? id : null;
  console.log(_id);
  //const navigate = useNavigate(); // Get the navigate object from React Router

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [curRating, setRating] = useState(0);

  function postReview(id, reviewData) {
    const promise = fetch(
      `${process.env.BACKEND_URL}
    /spaces/${id}/reviews`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      },
    );
    return promise;
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Review:", review);
    console.log("Rating:", curRating);
    // Reset form fields after submission
    const formData = {
      title: title,
      review: review,
      rating: curRating,
    };
    console.log(formData);
    if (title === "") {
      alert("Please provide title");
      return;
    } else if (review === "") {
      alert("Please provide review details");
      return;
    }
    postReview(_id, formData)
      .then((response) => {
        if (response.status === 201) {
          alert("Review added successfully");
        } else {
          alert(response.status);
        }
      })
      .catch((error) => {
        alert(error);
      });
    setTitle("");
    setReview("");
    setRating(0);
    //setTimeout(() => {
    //    navigate(-1, { state: { _id: spaceId } });
    //  }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="container">
      <BackArrowButton />
      <h1 className="my-3">Submit Review</h1>
      <form onSubmit={handleSubmit}>
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
          <br />
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Enter review"
          ></textarea>
        </div>
        <div>
          <label>Rating:</label>
          <StarRating initialRating={curRating} onChange={handleRatingChange} />
        </div>
        <div className="col-md-6">
          <Button className="mt-3 btn" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateSpaceReviewPage;
