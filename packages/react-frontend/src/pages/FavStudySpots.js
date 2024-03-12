import React from "react";
import '../style.css';


function FavStudySpots() {
    return (
    <div class="study-spots-container">
    <a href="/dashboard" class="back-button">←</a>
    <h1 class="spots-title">Favorite Study Spots</h1>
    <table class="spots-table">
        <thead>
            <tr>
                <th>
                    Location
                </th>
            </tr>
        </thead>

        <tbody>
            
            <tr><td>SloDoCo</td></tr>
            <tr><td>Sierra Madre Community Center</td></tr>
            <tr><td>Baker</td></tr>
        </tbody>
    </table>
    <footer>
             <div class="container">
                <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
            </div>
        </footer>
</div>
)}

export default FavStudySpots;