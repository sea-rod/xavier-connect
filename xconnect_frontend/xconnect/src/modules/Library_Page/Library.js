import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import  { Link } from 'react-router-dom';
import './SearchBar.css';
import './CardSection.css';
import Book1 from './ReserveBook';
// import Newpage from './Newpage';
import BooksDropdown from './BooksDropdown';

const CombinedComponent = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="searchContainer">
            <input
              type="text"
              name="SearchBooks"
              placeholder="Search Books"
              className="searchInput" // Added className for styling
            />
            <button type="submit" className="searchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
      <div className="top-picks-container">
        <h2 className="section-title mt-3">TOP PICKS</h2>
        <BooksDropdown />
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
      {/* <Book1 /> */}
      {/* <Newpage /> */}
    </>
  );
};

export default CombinedComponent;
