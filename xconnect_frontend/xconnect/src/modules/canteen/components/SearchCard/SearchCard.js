import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import "./SearchCard.css";
const SearchCard = (props) => {
  return (
    <div className="container">
      <div className="mt-5 col-12">
        <div className="col-12 d-flex bg-dark ps-2 row">
          <div className="d-flex justify-content-between my-3 flex-column col-6">
            <div className="d-flex flex-column">
              <p className="item m-0">{props.name}</p>
              <p className="price">Rs {props.price}/-</p>
            </div>
            <AddBtn
              quantity={props.quantity}
              status={props.status}
              incItem={props.incItem}
              descItem={props.descItem}
            />
          </div>
          <div className="col-6 p-0">
            <img src={props.image} alt="Product image" className="col-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
