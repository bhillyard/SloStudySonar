import React from 'react';
import '../style.css'; 
import BackArrowButton from "./BackArrowButton";
import Navbar from '../Navigation/Navbar';

function YourSessions() {
    return (
        <div className="study-sessions-container"> {/* This class should make the div use the full page */}
        
        <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>

      <div className="back-arrow-container">    
        <BackArrowButton onClick={() => { /* Add your click handler logic here */ }} /></div>
    
    <main className="sessions-content"></main>
    <h2 className="sessions-title">Your Study Sessions</h2> {/* Use h2 if h1 is used for the main page title */}
    <table className="sessions-table">
        {/* table content */}
    </table>
    
    <footer className="app-footer">
            <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </footer>
    </div>    
    );
}

export default YourSessions;