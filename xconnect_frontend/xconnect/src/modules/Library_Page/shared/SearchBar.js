import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../shared/SearchBar.css';
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("../Newpage");
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="searchContainer">
                        <input
                            type="text"
                            name="SearchBooks"
                            placeholder="Search Books"
                            className="searchInput"
                        />
                        <button type="submit" className="searchButton">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
