// Book1.js
import React from 'react';
import './Book1.css';

const Book1 = () => {
  const handleReserve = () => {
    // Add your reserve functionality here
    console.log('Book reserved!');
  };

  return (
    <article className="Book1">
      <div className="Book1-img">
        <img src="/images/Library/book1.jpg" alt="To Kill a Mockingbird" />
      </div>
      <div className="Book1-bodytitle">
        <h2 className="Book1-title">To Kill a Mockingbird</h2>
        </div>
        <div className='Book1-bodytext'>
        <p className="Book1-text">Harper Lee</p>
        <button className="reserve-button" onClick={handleReserve}>Reserve</button>
      </div>
    </article>
  );
};

export default Book1;
