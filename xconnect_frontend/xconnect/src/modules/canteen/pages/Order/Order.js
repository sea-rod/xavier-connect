import React from "react";
import OrderItem from "../Order/OrderItem";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../services/axios";
import useRazorpay from "react-razorpay";

export default function Order() {
  const navigate = useNavigate();
  const [Razorpay, isLoading] = useRazorpay();
  const [itemData, setItemData] = useState([]);
  const [cartData, setCartData] = useState({});

  const fetchData = () => {
    axiosInstance.get("canteen/cart/").then((res) => {
      console.log(res.data);
      setCartData(res.data);
      setItemData(res.data.menu_items);
    });
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("cart_updated", (e) => {
      fetchData();
      console.log("event triggred");
    });
  }, []);

  const [data, setData] = useState("");
  const complete_order = (paymentID, orderID, signature) => {
    console.log(paymentID, orderID, signature);
    axiosInstance
      .post("canteen/payment-client/", {
        payment_id: paymentID,
        pay_order_id: orderID,
        signature: signature,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Payment succesful");
        navigate("/canteen");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const razorPay = () => {
    console.log("kk");
    axiosInstance
      .post("canteen/order/")
      .then((response) => {
        console.log(response.data);
        var order_id = response.data.payment.razorpay_order_id;

        // handle payment
        const options = {
          key: response.data.payment.razorpay_merchant_key, // Enter the Key ID generated from the Dashboard
          name: "Xconnect",
          description: "Test Transaction",
          image: "%PUBLIC_URL%/favicon.ico",
          currency: "INR",
          order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            //complete order
            complete_order(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="container vh-100 d-flex flex-column justify-content-between"
      id="canteen-cart"
    >
      <div>
        <h1 className="text-center">Your Order</h1>
        <div className="py-2">
          {itemData.map((item) => (
            <OrderItem
              quantity={item.quantity}
              key={item.menu.id}
              id={item.menu.id}
              name={item.menu.item_name}
              image={item.menu.image}
              price={item.menu.price}
              item_id={item.id}
              status={item.status}
              callback={fetchData}
            />
          ))}

          <hr className="my-2 " />
        </div>
      </div>
      <button className="order-btn" onClick={razorPay}>
        Pay | Rs {cartData.total}/-
      </button>
    </div>
  );
}
