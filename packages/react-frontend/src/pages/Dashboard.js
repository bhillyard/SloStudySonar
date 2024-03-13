import React, { useState } from "react";
import "../style.css";
import logo from "../logo.svg";
import BackArrowButton from "./BackArrowButton"; // Import CircleArrowButton component
import Navbar from "../Navigation/Navbar";

function Dashboard() {
  const [profilePhoto, setProfilePhoto] = useState(logo);

  //upload-profile-photo is the endpoint on server designed to receive the image upload.
  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const formData = new FormData();
      formData.append("profilePhoto", file);

      try {
        const response = await fetch("/upload-profile-photo", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (result.url) {
          setProfilePhoto(result.url);
        }
      } catch (error) {
        console.error("Error uploading the file:", error);
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profilePhotoInput").click();
  };

  return (
    <div className="app-container">
      {" "}
      {/* This class should make the div use the full page */}
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
      <main className="dashboard-content">
        {/* Links Section */}
        <div className="links-section">
          <a href="/FavStudySpots" className="dashboard-link">
            Favorite Study Spots
          </a>
          <a href="/YourSessions" className="dashboard-link">
            Your Study Sessions
          </a>
          <a href="/Reviews" className="dashboard-link">
            Your Reviews
          </a>
        </div>

        {/* User Info Section */}
        <div className="user-info-section">
          <div className="profile-photo-container">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <button className="btn-change-photo" onClick={triggerFileInput}>
              Change profile photo
            </button>
            <input
              type="file"
              id="profilePhotoInput"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
