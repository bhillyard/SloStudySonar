import React, { useState, useEffect } from "react";
import "./StudySpacePage.css"; // Import CSS file for styling
import BackArrowButton from "./BackArrowButton"; // Import the BackArrowButton component

const StudySpacePage = () => {

    const [studySpaces, setSpaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/spaces")
        .then((response) => response.json())
        .then((data) => {
            const locations = [];
            for (let i = 0; i < data.length; i++) {
                const location = data[i].location;
                locations.push(location);
            }
            setSpaces(locations)
        });
    
    })

  function getStudySpaces() {
    const promise = fetch("http://localhost:8000/spaces", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const locations = [];
        for (let i = 0; i < data.length; i++) {
          const location = data[i].location;
          locations.push(location);
        }
        console.log("Locations:", locations);
        return locations;
      })
      .catch((error) => {
        console.error("Error getting study sessions:", error);
        throw error; // Re-throw the error to propagate it further
      });

    return promise; // Return the Promise
  }

console.log(getStudySpaces());
//const buildingNames = ["Baker", "Dexter"];

let buildingNames = ["Dexter", "Baker"]; // Declare buildingNames outside the callback function





  const [selectedFilters, setSelectedFilters] = useState([]); // State to manage the selected filters
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown visibility

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
        <BackArrowButton /> {/* Add the BackArrowButton component here */}
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
        <div className="content">{/* Content goes here */}</div>
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
                  {studySpaces.map((building, index) => (
                    <li key={index}>{building}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySpacePage;
