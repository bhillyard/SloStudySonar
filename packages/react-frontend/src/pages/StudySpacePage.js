import React, { useState, useEffect } from "react";
import BackArrowButton from "./BackArrowButton"; // Import the BackArrowButton component
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import "./StudySpacePage.css"; // Import CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'

const StudySpacePage = () => {
  const [studySpaces, setSpaces] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]); // State to manage the selected filters
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown visibility
  const navigate = useNavigate(); // Get the navigate object from React Router

  //get all study spaces (going to need to separate to on campus and off campus later)
  useEffect(() => {
    fetch("http://localhost:8000/spaces")
      .then((response) => response.json())
      .then((data) => {
        setSpaces(data);
      });
  }, []);

  const handleClick = (space) => {
    navigate("/viewStudySpace", {
      state: { _id: space._id },
    });
  };

  const handleFilterChange = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedFilters(selectedValues); // Update the selected filters state when the user changes the selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  return (
    <div>
      <header className="Appheader">
        <BackArrowButton /> {/* back arrow button to go to prev page */}
        <h1> </h1>
      </header>
      <div className="study-spaces-container">
        <div className="container">
          <div className="studyspaces-header">
            <h2>Study Spaces</h2>
            <p>Find the perfect study spot</p>
            {/* Search Bar */}
            <input type="text" placeholder="Search..." onChange={() => {}} />
          </div>
          {/* Drop-down Menu */}
          <div className="dropdown">
            <div className="selected-filters" onClick={toggleDropdown}>
              Filters{" "}
              <span className={`arrow ${isOpen ? "up" : "down"}`}>&#9660;</span>
            </div>
            {isOpen && (
              <select
                multiple
                value={selectedFilters}
                onChange={handleFilterChange}
              >
                <option value="quiet">Quiet</option>
                <option value="crowdedness">Not busy</option>
                <option value="outlet">Has outlets</option>
                <option value="hours">Open late</option>
                {/* Add more options as needed */}
              </select>
            )}
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="on-campus-container">
                <h2>On-Campus</h2>
                <p>
                  See buildings, labs, and other study locations on the Cal Poly
                  campus.
                </p>
                <div className="placeholder-box"></div>
                <ul className="building-list">
                  {studySpaces.map((space) => (
                    <li key={space.location} onClick={() => handleClick(space)}>
                      {space.location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
             <div class="container">
                <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
            </div>
      </footer>  
    </div>
  );
};

export default StudySpacePage;
