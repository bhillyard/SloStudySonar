import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router

const BackArrowButton = ({ path }) => {
  const navigate = useNavigate(); // Make navigate object

  const handleButtonClick = () => {
    navigate(-1); // Navigate back to the "/" path
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "15px",
        left: "15px",
        zIndex: "1000",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        onClick={handleButtonClick} // Call handleButtonClick when clicked
      >
        {/* SVG content for circle with left arrow */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#EFEFEF"
          stroke="#333333"
          strokeWidth="2"
        />
        <path
          d="M15 20L25 20M15 20L20 15M15 20L20 25"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BackArrowButton;
