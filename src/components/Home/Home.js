import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import '../Reviews/Reviews.css';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../Review-card/ReviewCard';



const Home = () => {
  const [reviews, setReviews] = useReviews([]);
  const [sliced, setSliced] = useState([]);
  useEffect(() => {
    setSliced(reviews.slice(3));
  },[reviews])
    return (
      <div className="home-container">
        <Banner></Banner>
        <div className="reviewPage">
          <h1>Review Of The Riders</h1>
          <div className="review-container">
            {sliced.map((review) => (
              <ReviewCard
                key={review.user}
                name={review.name}
                Rating={review.Ratings}
                sayings={review.sayings}
              ></ReviewCard>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home;