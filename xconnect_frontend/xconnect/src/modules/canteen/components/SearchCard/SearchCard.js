import React from "react";
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
            {props.quantity === "Add" ? (
              <button
                className=" col-7 add"
                onClick={props.incItem}
                disabled={!props.status}
              >
                {props.quantity}
              </button>
            ) : (
              <button className="d-flex justify-content-between mt-1">
                <i className="fa fa-minus my-auto" onClick={props.descItem}></i>
                <p>{props.quantity}</p>
                <i className="fa fa-plus my-auto" onClick={props.incItem}></i>
              </button>
            )}
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
