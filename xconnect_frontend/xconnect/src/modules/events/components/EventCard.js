import React from "react";
import { Link } from "react-router-dom";
const EventCard = (props) => {
  return (
    <div class="row mb-2">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis">
              Dept. of BCA presents
            </strong>
            <h3 class="mb-0">{props.name}</h3>
            <div class="mb-1 text-body-secondary">Feb 3</div>
            <p class="card-text mb-auto">{props.desc}</p>
            {props.url}
            <Link
              to="/Subevent"
              state={{ url: props.url }} // Pass props.url as state
              class="icon-link gap-1 icon-link-hover stretched-link mt-2"
            >
              Events List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
