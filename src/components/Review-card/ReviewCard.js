import React from 'react';
import './ReviewCard.css';
import Star from './Star';

const ReviewCard = ({ name, Rating, sayings }) => {
    
    return (
      <div className="reviewcard">
        <h1 className="name">{name}</h1>
          <Star value={Rating}></Star>
        <p className="sayings">{sayings}</p>
      </div>
    );
};

export default ReviewCard;