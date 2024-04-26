import React, { useState  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../shared/SearchBar.css';
import axiosInstance from "../../../services/axios";
import { useLocation , useNavigate } from "react-router-dom";

export default function SearchBar({onKeysearched}) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
  const fetchSearchData = (searchQuery) => {
    axiosInstance.get("library/Books/", {
      params: {
        keyword: searchQuery
      }
    })
    .then((res) => {
      console.log(res.data)
      if (location.pathname !== '/Newpage') {
        navigate("/Newpage", { state: { bookData: res.data } });
      }
      else
      {
        onKeysearched(res.data);
      }
    
    })
    .catch((error) => {
      console.error('Error fetching search data:', error);
    });
  };

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        fetchSearchData(query);

    }

    return (
        <div className="container">
            <div className="searchContainer">
                <input
                    type="text"
                    name="SearchBooks"
                    placeholder="Search Books"
                    className="searchInput"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button className="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}
