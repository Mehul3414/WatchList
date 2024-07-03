import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewMovie } from '../redux/slices/moviesSlice';
import './Review.css';

const Review = ({ movieId }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewMovie({ id: movieId, rating, review }));
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Rating:
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
            />
          </label>
        </div>
        <div>
          <label>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Review;
