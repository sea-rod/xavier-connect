import React, { useState } from 'react';
import './Dropdownlist.css'; // Import CSS for styling

const Dropdownlist = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = [
    'Fiction', 'Non-Fiction','Fantasy', 'Mystery', 'Other/General'
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.matches('.dropdown-trigger')) {
      setDropdownOpen(false);
    }
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setDropdownOpen(false); // Close dropdown after selecting a genre
  };

  // Attach click event listener to window for closing dropdown on outside click
  React.useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <></>
    // <div className="nav-container">
    //   <ul className="nav-items">
    //     <li className="nav-item nav-item-dropdown">
    //       <a className="dropdown-trigger" href="#" onClick={toggleDropdown}>
    //         {selectedGenre || 'Browse by Genres'}
    //         <i className={`${dropdownOpen ? 'up' : 'down'}`}></i>
    //       </a>
    //       <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
    //         {genres.map((genre, index) => (
    //           <li key={index} className="dropdown-menu-item">
    //             <a href="#" onClick={() => handleGenreSelect(genre)}>{genre}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Dropdownlist;
