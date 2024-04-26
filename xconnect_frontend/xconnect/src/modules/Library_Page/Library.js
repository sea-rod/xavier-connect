import React from "react";
import { Link } from "react-router-dom";
import "./CardSection.css";
// import Newpage from './Newpage';
import { useNavigate } from "react-router-dom";
import BooksDropdown from "./shared/BooksDropdown";
import SearchBar from "./shared/SearchBar";
import { useState, useEffect } from "react";
import axiosInstance from "../../services/axios";
import { toast } from "react-toastify";

const CombinedComponent = () => {
  const [topbookData, setTopBookData] = useState([]);
  const [allbookData, setAllBookData] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = () => {
    axiosInstance
      .get("library/Books/")
      .then((res) => {
        console.log(res.data);
        setAllBookData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/login");
          toast.error("You need to login");
        }
        console.log(err);
      });
  };

  const fetchTopPicks = () => {
    axiosInstance
      .get("library/Books/", {
        params: {
          toppicks: "toppicks",
        },
      })
      .then((res) => {
        console.log(res.data);
        setTopBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTopPicks();
    fetchBooks();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="mt-4">
        <BooksDropdown />
      </div>

      <div className="top-picks-container">
        <h2 className="section-title mt-3">TOP PICKS</h2>
        {/* TOP PICKS BOOKS SECTION */}

        <section className="grid-container">
          {topbookData.map((book) => (
            <Link key={book.id} to="/ReserveBook" state={book}>
              <article className="Lcard">
                <figure className="Lcard-img">
                  <img src={book.image} alt={book.name} />
                </figure>
                <div className="Lcard-body">
                  <h2 className="Lcard-title">{book.name}</h2>
                  <p className="Lcard-text">{book.author}</p>
                </div>
              </article>
            </Link>
          ))}
        </section>
        <h2 className="section-title mt-3">ALL BOOKS</h2>
        <section className="grid-container">
          {allbookData.map((book) => (
            <Link key={book.id} to="/ReserveBook" state={book}>
              <article className="Lcard">
                <figure className="Lcard-img">
                  <img src={book.image} alt={book.name} />
                </figure>
                <div className="Lcard-body">
                  <h2 className="Lcard-title">{book.name}</h2>
                  <p className="Lcard-text">{book.author}</p>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </div>
      {/* <Newpage /> */}
    </>
  );
};

export default CombinedComponent;
