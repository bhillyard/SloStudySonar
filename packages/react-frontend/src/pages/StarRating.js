import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function StarRating({ initialRating }) {
  const [ratingValue, setRatingValue] = useState(initialRating || 0);

  const handleRating = (ratingValue) => {
    setRatingValue(ratingValue);
  };

  const handleReset = () => {
    setRatingValue(ratingValue);
  };

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
