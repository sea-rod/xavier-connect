import React from 'react';
import { Link } from 'react-router-dom';
import './CardSection.css'; // Import CSS for styling

const CardSection = () => {
  return (
    <div className="top-picks-container">
      <h2 className="section-title">Top Picks</h2>
      <section>
        <Link to="Book1" className="card-link">
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book1.jpg" alt="To Kill a Mockingbird" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">To Kill a Mockingbird</h2>
              <p className="Lcard-text">Harper Lee</p>
            </div>
          </article>
        </Link>
        <Link to="/book2" className="card-link">
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book2.jpg" alt="1984" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">1984</h2>
              <p className="Lcard-text">George Orwell</p>
            </div>
          </article>
        </Link>
        <Link to="/book3" className="card-link">
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book3.jpg" alt="Pride and Prejudice" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">Pride and Prejudice</h2>
              <p className="Lcard-text">Jane Austen</p>
            </div>
          </article>
        </Link>
        <Link to="/book4" className="card-link">
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book4.jpg" alt="it ends with us" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">it ends with us</h2>
              <p className="Lcard-text">Colleen Hoover</p>
            </div>
          </article>
        </Link>
      </section>
    </div>
  );
};

export default CardSection;
