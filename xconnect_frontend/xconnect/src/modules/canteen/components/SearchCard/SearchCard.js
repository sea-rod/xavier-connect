import React from "react";
import Orange from "./Orange.png";
import "./SearchCard.css";

const SearchCard = () => {
  return (
    <div class="mt-5 col-10 d-flex mx-4 search-card pt-3 justify-content-between">
      <div class="product-details pt-0">
        <p class="product-title">Tropicana Orange Juice</p>
        <p class="product-price">Rs. 20/-</p>
        <button class="mt-4">Add</button>
      </div>
      <div className="col-2">
        <img src={Orange} alt="Product Image" class="product-image" />
      </div>
    </div>
  );
};

export default SearchCard;
