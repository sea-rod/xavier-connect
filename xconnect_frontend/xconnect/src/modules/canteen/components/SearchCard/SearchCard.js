import React from "react";
import Orange from "./Orange.png";
import "./SearchCard.css";

const SearchCard = () => {
  return (
    <div className="container">
      <div className="mt-5 d-flex justify-content-center">
        <div className="col-10 d-flex search-card pt-3 justify-content-between">
          <div className="product-details pt-0">
            <p className="product-title">Tropicana Orange Juice</p>
            <p className="product-price">Rs. 20/-</p>
            <button className="mt-4">Add</button>
          </div>
          <div className="col-2">
            <img src={Orange} alt="Product.img" className="product-image" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default SearchCard;
