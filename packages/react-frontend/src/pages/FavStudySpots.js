import React from "react";
import '../style.css';
import BackArrowButton from "./BackArrowButton";


function FavStudySpots() {
    return (
    <div className="study-spots-container">
    < BackArrowButton />
    <h1 className="spots-title">Favorite Study Spots</h1>
    <table className="spots-table">
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
</div>
)}

export default FavStudySpots;