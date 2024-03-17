import React,{useEffect} from "react";
import { Link } from "react-router-dom";

const CartBar = (props) => {
  useEffect(() => {}, [props.display]);
  return (
    <>
      {props.display ? (
        <div
          id="cart-bar"
          className="d-flex justify-content-between px-3 align-items-end"
        >
          <p className="my-1">{props.item_count} Item Added</p>
          <Link to="/Cart" className="my-1">
            View Cart
            <i className="fa fa-chevron-right ms-1"></i>
          </Link>
        </div>
      ) : null}
      ;
    </>
  );
};

export default CartBar;
