/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar.js";
import { useParams, useNavigate } from "react-router-dom";

import BackArrowButton from "./BackArrowButton";
import { Container } from "react-bootstrap";
import "./ViewStudySpacePage.css";

import StarRating from "./StarRating"; // Import the StarRating component
import ReviewBox from "./ReviewBox"; // Import the reviewBox component

const ViewStudySpacePage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Get the navigate object from React Router
  console.log(id);

  //use states to keep page updated correctly
  const [studySpaceData, setStudySpaceData] = useState([]);
  const [studySessions, setStudySessions] = useState([]);
  const [studySpaceReviews, setStudySpaceReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingUpdated, setRatingUpdated] = useState(false);

  //useEffect to get the study space data, study sessions, and reviews
  useEffect(() => {
    getStudySpace(id);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions?space=` + id)
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
    fetch(`${process.env.REACT_APP_BACKEND_URL}/spaces/${id}/reviews`)
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
  }, [id]);

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

  //function to get the study space data with study space id passed from prev page
  function getStudySpace(id) {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/spaces/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudySpaceData(data);
      });
  }

  const handleClickSessions = () => {
    navigate(`/viewStudySpace/${id}/CreateStudySession`);
  };

  const handleClick = () => {
    navigate(`/viewStudySpace/${id}/CreateSpaceReview`);
  };

  function truncate(str, maxLength = 100) {
    return str.length > maxLength
      ? str.substring(0, maxLength - 3) + "..."
      : str;
  }

  const goToStudySession = (sessionId) => {
    navigate(`/viewStudySession/${sessionId}`);
  };

  return (
    <div>
      <Navbar />
      <header className="Appheader">
        <BackArrowButton /> {/* back arrow button to go back a page */}
        <h1> </h1>
      </header>
      <div className="gap mb-3">
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
              <div className="row mb-3">
                <div className="col-md-9">
                  <h2>Upcoming Study Sessions</h2>
                </div>
                <div className="col-md-3">
                  <a
                    className="btn btn-success mb-1"
                    onClick={handleClickSessions}
                  >
                    Create a Study Session
                  </a>
                </div>
              </div>
              <div className="row">
                {studySessions.map((session) => {
                  return (
                    <div key={session._id} className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-title mt-2">
                          <div className="col-md-12">
                            <h4 className="mx-3">{session.sessionName}</h4>
                          </div>
                        </div>
                        <div className="card-body pt-1">
                          <div className="row">
                            <p>{session.date}</p>
                            <p>
                              {session.startTime} - {session.endTime}
                            </p>
                            <p>{truncate(session.description)}</p>
                          </div>
                          <div className="row mx-2">
                            <a
                              onClick={() => goToStudySession(session._id)}
                              className="btn btn-success moreinfo"
                            >
                              More Information
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <a className="btn btn-success">View All Study Sessions</a>
              </div>

              <hr></hr>
              <div className="container">
                <div className="row align-items-center mb-2">
                  <div className="col">
                    <h2 className="mb-0"> Reviews of {studySpaceData.title}</h2>
                  </div>
                  <div className="col-auto">
                    <a className="btn btn-success mb-1" onClick={handleClick}>
                      Make a Review
                    </a>
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
        <div className="container footer-container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default ViewStudySpacePage;
