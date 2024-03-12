import React from 'react';
import '../style.css';
import logo from '../logo.svg';
import BackArrowButton from './BackArrowButton'; // Import CircleArrowButton component
import Navbar from '../Navigation/Navbar';

function Dashboard() {
    return (
        
        <div class="user-dashboard">
        <BackArrowButton onClick={() => { /* Add your click handler logic here */ }} />
        <div class="user-info">
            
        </div>
        <Navbar />
            <header className="App-header">
            <h1>SLO Study Sonar</h1>
            </header>
    
        
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
      
        <footer>
             <div class="container">
                <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
            </div>
        </footer>

    </div>
    
    );
}

export default Dashboard;