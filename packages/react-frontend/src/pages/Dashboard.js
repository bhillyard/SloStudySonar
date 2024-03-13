import React from 'react';
import '../style.css';
import logo from '../logo.svg';
import BackArrowButton from './BackArrowButton'; // Import CircleArrowButton component

function Dashboard() {
    return (
        <div className="user-dashboard">
        <BackArrowButton onClick={() => { /* Add your click handler logic here */ }} />
        <div className="user-info">
            
        </div>
        
        <div className="dashboard-content">
            <div className="content-section">
                <a href="/FavStudySpots" className="dashboard-link">Favorite Study Spots</a>
               
            </div>
            <div className="content-section">
                <a href="/YourSessions" className="dashboard-link">Your Study Sessions</a>
            </div>
            <div className="content-section">
                <a href="/Reviews" className="dashboard-link">Your Reviews</a>
            </div>
        </div>
        
        <div className="profile-photo-section">
            <img src={logo} alt="Profile" className="profile-photo" />
            <button className="btn-change-photo">Change profile photo</button>
        </div>
    </div>
    );
}

export default Dashboard;