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
  };
  return (
    <div id="canteen">
      <div className="d-flex mx-5 mt-4">
        <input
          type="search"
          placeholder="Search"
          className="mx-auto col-12"
          value={searchValue}
          onChange={searchValueChanged}
        />
        <button onClick={search}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <Popular />
    </div>
  );
}
