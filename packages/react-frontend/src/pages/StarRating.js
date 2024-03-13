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
    </div>
  );
}

export default StarRating;
