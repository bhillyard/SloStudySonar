/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useLocation, Link } from "react-router-dom";
import BackArrowButton from "./BackArrowButton";
import Navbar from "../Navigation/Navbar.js";

const ViewStudySessionPage = () => {
  const { id } = useParams();

  // use states to keep page updated correctly
  const [studySessionData, setStudySessionData] = useState([]);
  const [studySpaceData, setStudySpaceData] = useState([]);
  const [hostData, setHostData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch study session");
        }
        return response.json();
      })
      .then((data) => {
        setStudySessionData(data);
      })
      .catch((error) => {
        console.error("Error fetching study session:", error);
      });

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/spaces/${studySessionData.space}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setStudySpaceData(data);
      })
      .catch((error) => {
        console.error("Error fetching study space:", error);
      });

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${studySessionData.host}`)
      .then((response) => response.json())
      .then((data) => {
        setHostData(data);
      })
      .catch((error) => {
        console.error("Error fetching host:", error);
      });
  }, [id, studySessionData.space, studySessionData.host]);

  return (
    <div>
      <Navbar />
      <header className="Appheader">
        <h1> </h1>
        <BackArrowButton />
      </header>

      <div className="container d-flex">
        <div className="my-3 row justify-content-center">
          <div className="row">
            <h1 className="text-start">{studySessionData.sessionName}</h1>
          </div>
          <div className="col-md-6">
            <div className="row">
              <img
                src={studySpaceData.photo}
                className="img-fluid rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h4 className="mt-2">{studySpaceData.title}</h4>
              <h4>{studySessionData.date}</h4>
              <h4>
                {studySessionData.startTime} - {studySessionData.endTime}
              </h4>
            </div>
            <div className="row">
              <p>{studySessionData.description}</p>
            </div>
            <div className="row">
              <h5>Hosted by: {hostData.displayName} </h5>
            </div>
            <div className="row mt-3">
              <a className="btn btn-success">Join Study Session</a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container footer-container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ViewStudySessionPage;
