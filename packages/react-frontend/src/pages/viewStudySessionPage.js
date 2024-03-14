import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
import BackArrowButton from "./BackArrowButton";


const ViewStudySessionPage = () => {
    
    //use states to keep page updated correctly
    // const [studySessionData, setStudySessionData] = useState([]);
    // const [studySpaceData, setStudySpaceData] = useState([]);
    // const id = ""

    // useEffect(() => {
    //     fetch(`http://localhost:8000/sessions/${id}`)
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error("Failed to fetch study session");
    //         }
    //         return response.json();
    //     }).then((data) => {
    //         setStudySessionData(data);
    //     }).catch((error) => {
    //         console.error("Error fetching study session:", error);
    //     });

    //     fetch(`http://localhost:8000/spaces/${studySessionData.space}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setStudySpaceData(data);
    //     }).catch((error) => {
    //         console.error("Error fetching study space:", error);
    //     });
    // })

    return (
        <div>
            <header className="Appheader">
                <BackArrowButton />
                <h1> </h1>
            </header>
            
            <div className="container d-flex">
                <div className="my-3 row justify-content-center">
                    
                        <div className="row">
                            <h1 className="text-start">Mech Allnighter</h1>
                        </div>
                    <div className="col-md-6">
                        <div className="row">
                            <img src="https://storage.googleapis.com/space-images-slo-study-sonar/Ramauldo2.webp" className="img-fluid rounded" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h4 className="mt-2">Location: Placeholder of a Location</h4>
                            <h4>Date: Placeholder of a Date</h4>
                            <h4>Time: Placeholder of a Time</h4>
                        </div>
                        <div className="row">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="row">
                            <h5>Hosted by: C.J. DuHamel</h5>
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
}

export default ViewStudySessionPage;

