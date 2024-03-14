import React from "react";
import Popular from "../../components/Popular/Popular";
import "./Canteen.css";

export default function Canteen() {
  return (
    <div id="canteen">
      <div className="d-flex mx-5 mt-4">
        <input type="search" placeholder="Search" className="mx-auto col-12" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <Popular />
    </div>
  );
}
