import React, { useState,useEffect  } from 'react';
import './Newpage.css';
import SearchBar from './shared/SearchBar';
import BooksDropdown from './shared/BooksDropdown';
import { Link ,useLocation} from 'react-router-dom';


const Newpage = () => {
  const [bookData, setBookData] = useState([]);
  const location = useLocation();
  const state = location.state;

  const handleDataChange = () => {
    setBookData(state.bookData);
  };

  useEffect(() => {
    handleDataChange();
  }, [state]);

  const handleGenreSelection = (genre) => {
    setBookData(genre);
  };

  const handleKeysearch = (genre) => {
    setBookData(genre);
  };

  return (
    <>
      <SearchBar onKeysearched={handleKeysearch}/>
      <div className='mt-4'>
        <BooksDropdown onGenreSelected={handleGenreSelection} />
      </div>
      <div id='SearchResults' className='container'>
        <div className="book">
          
          {bookData.map((book) => (
            <Link key={book.id} to='/ReserveBook' state={book}  >
              
              <div className="Newpage">
                <div className="Newpage-img">
                  <img src={book.image} alt={book.name}/>
                </div>
                <div className='newtext'>
                  <h2 className="Newpage-title">{book.name}<p>{book.author}</p></h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Newpage;
