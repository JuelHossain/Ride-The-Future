import React from 'react';
import bike from "../../766-Bike.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="home">
          <div className="photo">
            <img src={bike} alt="766-bike" />
            <div className="text">
              <h1> Ride The Future</h1>
              <p>
                You can leterally travel to the future with this
                bike."766-Monster"
              </p>
            </div>
          </div>
        </div>
    );
};

export default Banner;