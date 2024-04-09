import React from 'react';
import { Link } from 'react-router-dom';
import './CardSection.css';
// import Newpage from './Newpage';
import BooksDropdown from './shared/BooksDropdown';
import SearchBar from './shared/SearchBar';

const CombinedComponent = () => {
  return (
    <>
    <SearchBar/>
      <div className='mt-4'>
        <BooksDropdown />
      </div>

      <div className="top-picks-container">
        <h2 className="section-title mt-3">TOP PICKS</h2>
        {/* TOP PICKS BOOKS SECTION */}
        <section className="grid-container">
          <Link to="/ReserveBook">
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
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book2.jpg" alt="1984" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">1984</h2>
              <p className="Lcard-text">George Orwell</p>
            </div>
          </article>
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book3.jpg" alt="Pride and Prejudice" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">Pride and Prejudice</h2>
              <p className="Lcard-text">Jane Austen</p>
            </div>
          </article>
          <article className="Lcard">
            <figure className="Lcard-img">
              <img src="/images/Library/book4.jpg" alt="it ends with us" />
            </figure>
            <div className="Lcard-body">
              <h2 className="Lcard-title">it ends with us</h2>
              <p className="Lcard-text">Colleen Hoover</p>
            </div>
          </article>
        </section>
      </div>
      {/* <Newpage /> */}
    </>
  );
};

export default CombinedComponent;
