import React from 'react';
import '../style.css';
import logo from '../logo.svg';

function Dashboard() {
    return (
        <div class="user-dashboard">
        <div class="user-info">
            
        </div>
        
        <div class="dashboard-content">
            <div class="content-section">
                <a href="/FavStudySpots" class="dashboard-link">Favorite Study Spots</a>
               
            </div>
            <div class="content-section">
                <a href="/YourSessions" class="dashboard-link">Your Study Sessions</a>
            </div>
            <div class="content-section">
                <a href="/Reviews" class="dashboard-link">Your Reviews</a>
            </div>
        </div>
        
        <div class="profile-photo-section">
            <img src={logo} alt="Profile" className="profile-photo" />
            <button class="btn-change-photo">Change profile photo</button>
        </div>
    </div>
    );
}

export default Dashboard;