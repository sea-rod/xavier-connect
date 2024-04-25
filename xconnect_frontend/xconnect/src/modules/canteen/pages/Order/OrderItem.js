import { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import axiosInstance from "../../../../services/axios";

const OrderItem = (props) => {

  return (
    <div className="d-flex px-2 pt-1 mb-0 justify-content-between">
      <div className="d-flex col-5">
        <img src={props.image} alt="" className="col-2 my-auto me-1" />
        <p className="my-auto item-name">{props.name}</p>
      </div>
      <div className="d-flex col-6 justify-content-end m-0" >
        <p className="my-auto price">Rs {props.price}/-</p>
      </div>
    </div>
  );
};

export default OrderItem;
