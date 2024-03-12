import React from 'react';
import '../style.css'; 

function YourSessions() {
    return (
        <div className="study-sessions-container">
            <a href="/dashboard" className="back-button">←</a>
            <h1 className="sessions-title">Your Study Sessions</h1>
            <table className="sessions-table">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Time</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SloDoCo</td>
                        <td>10:00 AM - 12:00 PM</td>
                        <td>Math Study Group</td>
                    </tr>
                    <tr>
                        <td>Sierra Madre Community Center</td>
                        <td>2:00 PM - 4:00 PM</td>
                        <td>Physics Revision</td>
                    </tr>
                    <tr>
                        <td>Baker</td>
                        <td>6:00 PM - 8:00 PM</td>
                        <td>Chemistry Homework</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>

            <footer>
             <div class="container">
                <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
            </div>
        </footer>
        </div>
    );
}

export default YourSessions;