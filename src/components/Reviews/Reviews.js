import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../Review-card/ReviewCard';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
  return (
    <div className="reviewPage">
      <h1>Review Of The Riders</h1>
      <div className="review-container">
        {reviews.map((review) => (
          <ReviewCard
            key={review.user}
            name={review.name}
            Rating={review.Ratings}
            sayings={review.sayings}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;