import React from "react";
import "./contact.css";
import BackArrowButton from "./BackArrowButton"; // Import CircleArrowButton component
import Navbar from "../Navigation/Navbar.js";

function Contact() {
  return (
    <body>
      <Navbar />
      <header className="App-header">
        <h1 className="alumni-sans">SLO Study Sonar</h1>
      </header>

      <div className="contact-main">
        <div className="back-arrow-container">
          <BackArrowButton
            onClick={() => {
              /* Add your click handler logic here */
            }}
          />
        </div>
        <div className="container">
          <h2 className="alumni-sans">Contact Us</h2>

          <p>
            Got a feature suggestion? Have any questions, comments, or concerns?
            Feel free to contact us!
          </p>
          <p>E-Mail: slostudysonar@gmail.com</p>
          <p>Phone: 805-000-0SSS</p>
        </div>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </body>
  );
}

export default Contact;
