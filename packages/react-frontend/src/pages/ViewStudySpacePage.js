import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, Link, useNavigate } from "react-router-dom";
import BackArrowButton from "./BackArrowButton";
import { Container } from "react-bootstrap";
import "./ViewStudySpacePage.css";
import StarRating from "./StarRating"; // Import the StarRating component
import ReviewBox from "./ReviewBox"; // Import the reviewBox component

const ViewStudySpacePage = () => {
  const location = useLocation();
  const { _id } = location.state;
  const navigate = useNavigate(); // Get the navigate object from React Router
  console.log(_id);

  //use states to keep page updated correctly
  const [studySpaceData, setStudySpaceData] = useState([]);
  const [studySessions, setStudySessions] = useState([]);
  const [studySpaceReviews, setStudySpaceReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingUpdated, setRatingUpdated] = useState(false);

  //useEffect to get the study space data, study sessions, and reviews
  useEffect(() => {
    getStudySpace(_id);
    fetch("http://localhost:8000/sessions?space=" + _id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch study sessions");
        }
        return response.json();
      })
      .then((data) => {
        setStudySessions(data);
      })
      .catch((error) => {
        console.error("Error fetching study sessions:", error);
      });
    fetch(`http://localhost:8000/spaces/${_id}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch study space reviews");
        }
        return response.json();
      })
      .then((data) => {
        setStudySpaceReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching study space reviews", error);
      });
  }, [_id]);

  useEffect(() => {
    let totalRating = 0;
    studySpaceReviews.forEach((review) => {
      totalRating += review.rating;
    });
    const avgRating =
      studySpaceReviews.length > 0 ? totalRating / studySpaceReviews.length : 0;
    setAverageRating(avgRating);
  }, [studySpaceReviews]);

  useEffect(() => {
    setRatingUpdated(averageRating !== 0 || studySpaceReviews.length > 0);
  }, [averageRating, studySpaceReviews]);

  const mapUpcomingStudySessions = studySessions.map((session) => {
    return (
      <li key={session._id}>
        <Link to="/StudySessionPage" style={{ color: "black" }}>
          {session.sessionName}
        </Link>
      </li>
    );
  });
  //function to get the study space data with study space id passed from prev page
  function getStudySpace(_id) {
    fetch(`http://localhost:8000/spaces/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudySpaceData(data);
      });
  }

  const handleClick = () => {
    navigate("/CreateSpaceReview", {
      state: { _id: studySpaceData._id },
    });
  };

  return (
    <div>
      <header className="Appheader">
        <BackArrowButton /> {/* back arrow button to go back a page */}
        <h1> </h1>
      </header>
      <div className="gap">
        <Container fluid className="align-items-center">
          {/* Row to separate from the header */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              {/* Use half the column width */}
              {studySpaceData ? (
                <h2>{studySpaceData.title}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
              <div>
                {studySpaceData ? (
                  <img
                    src={studySpaceData.photo}
                    alt="study space"
                    className="img-fluid study-space-photo rounded"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/300"
                    alt="study space"
                    className="study-space-photo"
                  />
                )}
              </div>
              <div className="row">
                <div className="col-md-3 me-3">
                  <div>
                    {studySpaceReviews.length > 0 ? (
                      ratingUpdated ? (
                        <StarRating initialRating={averageRating} />
                      ) : null
                    ) : (
                      <StarRating initialRating={0} />
                    )}
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="col-md-6">
                    <p className="mt-2">
                      {averageRating} ({studySpaceReviews.length} reviews)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    {/* If the study space data is loaded, display the operating hours */}
                    <h1 className="hours">
                      Hours:{" "}
                      {studySpaceData ? (
                        <span>{studySpaceData.operatingHours}</span>
                      ) : (
                        <span>Loading...</span>
                      )}{" "}
                    </h1>
                  </div>
                  <div>
                    {/* If the study space data is loaded, display the location */}
                    <h1 className="location">
                      Location:{" "}
                      {studySpaceData ? (
                        <span>{studySpaceData.location}</span>
                      ) : (
                        <span>Loading...</span>
                      )}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div>
                  <div className="col-12">
                    <h1 className="description">
                      Description:{" "}
                      {studySpaceData ? (
                        <span>{studySpaceData.description}</span>
                      ) : (
                        <span>Loading...</span>
                      )}
                    </h1>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div>
                <h2> Upcoming Study Sessions</h2>
                <ul className="building-list">
                  <ul>{mapUpcomingStudySessions}</ul>
                </ul>
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col">
                    <h2> Reviews of {studySpaceData.title}</h2>
                  </div>
                  <div className="col-auto">
                    <Button variant="primary" onClick={handleClick} type="submit">
                      Make a Review
                    </Button>
                  </div>
                </div>
                {studySpaceReviews.length === 0 ? (
                  <p>Be the first to leave a review!</p>
                ) : (
                  studySpaceReviews.map((review, index) => (
                    <ReviewBox
                      key={index}
                      starRating={review.rating}
                      reviewTitle={review.title}
                      author={review.author}
                      date={review.date}
                      review={review.review}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default ViewStudySpacePage;
