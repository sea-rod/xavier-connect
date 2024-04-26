// Book1.js
import React from "react";
import "./ReserveBook.css";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../services/axios";
import { toast } from "react-toastify";

const ReserveBook = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const handleReserve = () => {
    // Add your reserve functionality here
    axiosInstance
      .post("library/CreateReservation/", {
        book_id: state.id, // Include the book ID in the request payload
      })
      .then((response) => {
        toast.success("Book reserved successfully:");
        console.log("Book reserved successfully:", response.data);
      })
      .catch((error) => {
        toast.error("Error reserving book");
        console.error("Error reserving book:", error);
      });
  };

  return (
    <div className="container">
      <div>
        <h1 className="rb-title mb-3">RESERVE BOOK</h1>
      </div>
      <article className="Book1">
        <div className="Book1-img">
          <img src={state.image} alt={state.name} />
        </div>
        <div className="Book1-bodytitle">
          <h2 className="Book1-title">{state.name}</h2>
        </div>
        <div className="Book1-bodytext">
          <p className="Book1-text">{state.author}</p>
          <button className="reserve-button" onClick={handleReserve}>
            RESERVE
          </button>
        </div>
      </article>
    </div>
  );
};

export default ReserveBook;
