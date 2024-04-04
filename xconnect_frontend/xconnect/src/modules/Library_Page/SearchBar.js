import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'; // Import your CSS file

// Define the Library component
const SearchBar = () => {
  return (
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
  );
};

// Export the Library component
export default SearchBar;

