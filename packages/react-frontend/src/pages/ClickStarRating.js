import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function StarRating({ initialRating, onChange }) {
  const [ratingValue, setRatingValue] = useState(initialRating || 0);

  const handleRating = (rate) => {
    setRatingValue(rate);
    onChange(rate);
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        initialValue={ratingValue}
        allowFraction={true}
        /*onClick={handleReset}*/
        /* other props */
      />
    </div>
  );
}

export default StarRating;
