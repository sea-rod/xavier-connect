import React from 'react';
import './Library.css';

export default function Library() {
  return (
    <div id="libary">
      <header>
        <div className="header">
          <h1>Welcome to Xavier's Library</h1>
        </div>
        <div className="main-search-input-wrap">
          <div className="main-search-input fl-wrap">
            <div className="main-search-input-item">
              <input type="text" value="" placeholder="Search Books" />
            </div>
            <button className="main-search-button">SEARCH BOOKS</button>
          </div>
        </div>
      </header>
      <div className="bgimg">
        <img src={process.env.PUBLIC_URL + '/images/Library/library.jpg'} alt="Library" />
      </div>
      <div className="books">
        <h3>USING THE LIBRARY</h3>
        <p>Get started using the library with these guides</p>
        <br />
        <div className="row">
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book1.jpg'} alt="Snow" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book2.jpg'} alt="Forest" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book3.jpg'} alt="Forest" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book4.jpg'} alt="Snow" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book5.jpg'} alt="Forest" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book6.jpeg'} alt="Forest" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book7.jpg'} alt="Snow" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book8.jpg'} alt="Forest" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/images/Library/book10.jpg'} alt="Forest" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}