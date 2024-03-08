import React from 'react';
import '../style.css';



function Reviews() {
    return (
        <div class="reviews-container">
        <a href="/dashboard" class="back-button">←</a>
        <h1 class="reviews-title">Your Reviews</h1>
        <table class="reviews-table">
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