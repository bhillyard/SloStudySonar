import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function StarRating({ initialRating }) {
  const [ratingValue] = useState(initialRating || 0);

  return (

    
    <div className="App">
      <Rating
        initialValue={ratingValue}
        allowFraction={true}
        readonly
        /*onClick={handleReset}*/
        /* other props */
      />

      <footer>
             <div className="container">
                <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
            </div>
      </footer>
    </div>
  );
}

export default StarRating;
