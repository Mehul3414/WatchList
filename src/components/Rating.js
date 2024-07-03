import React from 'react';

const Rating = ({ rating, onRatingChange }) => {
  const handleChange = (e) => {
    onRatingChange(parseFloat(e.target.value));
  };

  return (
    <div>
      <label>Rating: </label>
      <input
        type="number"
        value={rating}
        onChange={handleChange}
        min="1"
        max="5"
        step="0.5"
      />
    </div>
  );
};

export default Rating;
