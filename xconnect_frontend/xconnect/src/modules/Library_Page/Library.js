import React from 'react';
import './Library.css';

export default function Library() {
  return (
    <div id="libary">
      <header>
        <div className="header">
          <h1>XConnect Library</h1>
        </div>
        <div className="input-group">
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="btn rounded" data-mdb-ripple-init>search</button>
        </div>

      </header>
      <div className="bgimg">
        <img src={process.env.PUBLIC_URL + '/images/Library/library.jpg'} alt="Library" />
      </div>
      <div className="books">
        <h3>TOP PICKS</h3>
        <p>A source of endless knowledge</p>
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