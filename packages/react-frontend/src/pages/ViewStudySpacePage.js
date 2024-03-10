import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import BackArrowButton from "./BackArrowButton";
import { Container } from "react-bootstrap";
import "./ViewStudySpacePage.css";
import StarRating from "./StarRating"; // Import the StarRating component

const ViewStudySpacePage = () => {
  const location = useLocation();
  const { _id } = location.state;
  console.log(_id);

  const [studySpaceData, setStudySpaceData] = useState(null);
  useEffect(() => {
    getStudySpace(_id);
  }, [_id]);

  const studySessions = [
    "Mech Allnigher",
    "357 Cram Session",
    "203 A Star Strategizing",
  ];

  const upcomingStudySessions = studySessions.map((session) => {
    return (
      <li>
        <Link to="/StudySessionPage" style={{ color: "black" }}>
          {session}
        </Link>
      </li>
    );
  });

  function getStudySpace(_id) {
    fetch(`http://localhost:8000/spaces/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudySpaceData(data);
      });
  }

  return (
    <div>
      <header className="Appheader">
        <BackArrowButton /> {/* back arrow button component */}
        <h1> </h1>
      </header>
      <div className="gap">
        <Container fluid className="align-items-center">
          {/* Row to separate from the header */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              {" "}
              {/* Use half the column width */}
              {studySpaceData ? (
                <h2>{studySpaceData.title}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
              <div className="placeholder-box"></div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <StarRating initialRating={3.25} />{" "}
                    {/* set initial rating of 3 to test*/}
                  </div>
                  <div>
                    <h1 className="hours">
                      {" "}
                      Hours:{" "}
                      {studySpaceData ? (
                        <span>{studySpaceData.operatingHours}</span>
                      ) : (
                        <span>Loading...</span>
                      )}{" "}
                    </h1>
                  </div>
                  <div>
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
                <div className="col-md-6">
                  <p>Total Reviews</p>
                </div>
              </div>
              <div>
                <h2> Upcoming Study Sessions</h2>
                <ul className="building-list">
                  <ul>{upcomingStudySessions}</ul>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ViewStudySpacePage;
