import React from 'react';
import './BooksDropdown.css';

const BooksDropdown = ({ onSelectGenre }) => {
  const genres = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Other/General'
  ];

  const handleGenreSelect = (event) => {
    onSelectGenre(event.target.value);
  };

  return (
    <div id='library-dropdown'>
    <select onChange={handleGenreSelect}>
      <option value="">Browse by Genre</option>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>{genre}</option>
      ))}
    </select>
    </div>
  );
};

export default BooksDropdown;
