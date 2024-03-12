import React from "react";
import '../style.css';
import BackArrowButton from "./BackArrowButton";
import Navbar from "../Navigation/Navbar";

function FavStudySpots() {
    return (
        
    <div class="study-spots-container">
    < BackArrowButton />
    <Navbar />
            <header className="App-header">
            <h1>SLO Study Sonar</h1>
            </header>

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