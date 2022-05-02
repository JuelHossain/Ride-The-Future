import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
      <div className="blogs-container">
        <h1>Blogs</h1>
        <div className="question-container">
          <div className="question">
            <h2>What is context api?</h2>
            <p>
              context api made our life easy because we can pass our data with
              context api without drilling props through all children elements
            </p>
          </div>
          <div className="question">
            <h2>What is semantic tag?</h2>
            <p>
              Semantic tag describe itself by its name. thats how its is easy to
              read to the developer and the browser as well.{" "}
            </p>
          </div>
          <div className="question">
            <h2>Inline Vs Inline Block Element?</h2>
            <p>
              inline element does not start on a new line and it only takes up
              as much width as necessary and the inline block element is inline
              element but act like a block element{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;