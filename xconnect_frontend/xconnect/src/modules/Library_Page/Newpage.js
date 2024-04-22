import React from 'react';
import './Newpage.css';
import SearchBar from './shared/SearchBar';
import BooksDropdown from './shared/BooksDropdown';
const Newpage = () => {
  const handleReserve = () => {
    // Add your reserve functionality here
    console.log('Book reserved!');
  };

  return (
    <>
      <SearchBar />
      <div className='mt-4'>
        <BooksDropdown />
      </div>
      <div id='SearchResults' className='container'>
        <div className="book">
          <div className="Newpage">
            <div className="Newpage-img">
              <img src="/images/Library/book1.jpg" alt="To Kill a Mockingbird" />
            </div>
            <div className='newtext'>
              <h2 className="Newpage-title">To Kill a Mockingbird<p>Harper Lee</p></h2>
              <button className="reserve-button" onClick={handleReserve}>Reserve</button>
            </div>
          </div>

          <div className="Newpage">
            <div className="Newpage-img">
              <img src="/images/Library/book2.jpg" alt="1984" />
            </div>
            <div className='newtext'>
              <h2 className="Newpage-title">1984<p>George Orwell</p></h2>
              <button className="reserve-button" onClick={handleReserve}>Reserve</button>
            </div>
          </div>

          <div className="Newpage">
            <div className="Newpage-img">
              <img src="/images/Library/book2.jpg" alt="1984" />
            </div>
            <div className='newtext'>
              <h2 className="Newpage-title">1984<p>George Orwell</p></h2>
              <button className="reserve-button" onClick={handleReserve}>Reserve</button>
            </div>
          </div>

          <div className="Newpage">
            <div className="Newpage-img">
              <img src="/images/Library/book2.jpg" alt="1984" />
            </div>
            <div className='newtext'>
              <h2 className="Newpage-title">1984<p>George Orwell</p></h2>
              <button className="reserve-button" onClick={handleReserve}>Reserve</button>
            </div>
          </div>

          <div className="Newpage">
            <div className="Newpage-img">
              <img src="/images/Library/book2.jpg" alt="1984" />
            </div>
            <div className='newtext'>
              <h2 className="Newpage-title">1984<p>George Orwell</p></h2>
              <button className="reserve-button" onClick={handleReserve}>Reserve</button>
            </div>
          </div>

          {/* Add more books similarly */}
        </div>
      </div>
    </>
  );
};

export default Newpage;
