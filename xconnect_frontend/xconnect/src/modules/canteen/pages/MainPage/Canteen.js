import React from "react";
import Popular from "../../components/Menu/Menu";
import { useState } from "react";
import SearchItems from "../../components/SearchItems/SearchItems";
import "./Canteen.css";

export default function Canteen() {
  const [searchValue, setSearchValue] = useState("");
  const [flag, setFlag] = useState(false);
  const searchValueChanged = (e) => {
    setSearchValue(e.target.value);
  };

  const search = () => {
    setFlag(true);
    console.log(searchValue);
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
      {flag ? <SearchItems search_value={searchValue} /> : <Popular />}
    </div>
  );

}

