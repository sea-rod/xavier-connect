import React from "react";
import Popular from "../../components/Popular/Popular";
import { useState } from "react";
import axiosInstance from "../../../../services/axios";
import "./Canteen.css";

export default function Canteen() {
  const [searchValue, setSearchValue] = useState("");
  const searchValueChanged = (e) => {
    setSearchValue(e.target.value);
  };
  const search = () => {
    console.log(searchValue);
    axiosInstance
      .get("canteen/menu/", {
        params: {
          search: searchValue,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="canteen">
      <div className="d-flex mx-5 mt-4 justify-content-end">
        <input
          type="search"
          placeholder="Search"
          className="mx-lg-2 col-11 col-lg-3 "
          value={searchValue}
          onChange={searchValueChanged}
        />
        <button onClick={search} className="col-lg-2 " id="search">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <Popular />
    </div>
  );
}
