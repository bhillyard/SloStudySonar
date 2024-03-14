import React, { useState, useEffect } from "react";
import BackArrowButton from "./BackArrowButton";
import { useNavigate, Link } from "react-router-dom";
import "./StudySpacePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const StudySpacePage = () => {
  const [studySpaces, setSpaces] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(`${process.env.REACT_APP_BACKEND_URL}/spaces`)
      .then((response) => response.json())
      .then((data) => {
        setSpaces(data);
      });
  }, []);

  const handleClick = (space) => {
    navigate("/viewStudySpace/" + space._id);
  };

  const handleFilterChange = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedFilters(selectedValues);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function truncate(str, maxLength = 200) {
    return str.length > maxLength
      ? str.substring(0, maxLength - 3) + "..."
      : str;
  }

  const filteredStudySpaces = studySpaces.filter((space) =>
    space.title.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );

  // Remove duplicates based on space ID
  const uniqueStudySpaces = Array.from(
    new Set(filteredStudySpaces.map((space) => space._id)),
  ).map((id) => {
    return filteredStudySpaces.find((space) => space._id === id);
  });

  return (
    <div>
      <header className="Appheader">
        <BackArrowButton />
        <h1> </h1>
      </header>
      <div className="">
        <div className="container">
          <div className="studyspaces-header">
            <h2>Study Spaces</h2>
            <p>Find the perfect study spot</p>
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
          <div>
            Have a study space you want to share?
            <br />
            Submit a new study space
            <Link to="/createStudySpace">here!</Link>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="on-campus-container">
                <h2>All Study Spaces</h2>
                <p>
                  See buildings, labs, and other study locations on and off the Cal Poly
                  campus.
                </p>
                <div className="row">
                  {uniqueStudySpaces.map((space) => (
                    <div key={space.location} className="col-md-4 mb-3">
                      <div className="card h-100">
                        <img
                          src={space.photo}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{space.title}</h5>
                          <p className="card-text">{truncate(space.description)}</p>
                          <a
                            onClick={() => handleClick(space)}
                            className="btn btn-success"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StudySpacePage;
