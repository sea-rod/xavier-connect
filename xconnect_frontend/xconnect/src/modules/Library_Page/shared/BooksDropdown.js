import React, { useState, useEffect } from 'react';
import './BooksDropdown.css';
import axiosInstance from '../../../services/axios';
import { useLocation , useNavigate } from "react-router-dom";

const BooksDropdown = ({onGenreSelected}) => {
  const [genreData, setGenreData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchGenre();
  }, []);

  const fetchGenre= () => {
    axiosInstance.get('library/Genre/')
      .then((res) => {
        setGenreData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching genre data:', error);
      });
  };

  const fetchGenreBook = (searchQuery) => {
    axiosInstance.get("library/Books/", {
      params: {
        genre: searchQuery
      }
    })
    .then((res) => {
      if (location.pathname !== '/Newpage') {
        navigate("/Newpage", { state: { bookData: res.data } });
      }
      else
      {
        onGenreSelected(res.data);
      }
    
    })
    .catch((error) => {
      console.error('Error fetching search data:', error);
    });
  };


  const handleGenreSelect = (event) => {
    fetchGenreBook(event.target.value)
    
  };

  return (
    <div id='library-dropdown'>
      <select onChange={handleGenreSelect}>
        <option value=''>Browse by Genre</option>
        {genreData.map((genre, index) => (
          <option key={index} value={genre.genre}>{genre.genre}</option>
        ))}
      </select>
    </div>
  );
};

export default BooksDropdown;
