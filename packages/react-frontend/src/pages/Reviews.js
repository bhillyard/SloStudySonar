import React from 'react';
import '../style.css';
import BackArrowButton from "./BackArrowButton";


function Reviews() {
    return (
        <div className="reviews-container">
        < BackArrowButton />
        <h1 className="reviews-title">Your Reviews</h1>
        <table className="reviews-table">
            <thead>
                <tr>
                    <th>Study Space</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Baker</td>
                    <td>★★★☆☆</td>
                    <td>Great spot. Go here on weekends.<br />Jan 2021</td>
                </tr>
                
            </tbody>
        </table>
    </div>
    );
}

export default Reviews;