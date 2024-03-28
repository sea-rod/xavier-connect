import React from "react";
import { Link } from "react-router-dom";
const EventCard = (props) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border border-warning rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="rounded event-time">TODAY 10:00AM</div>
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0 event-font">{props.name}</h3>
          <p className="mt-2 card-text mb-auto event-info">{props.desc}</p>
          <Link
            to="/SubEvents"
            state={{ url: props.url }}
            className="icon-link gap-1 icon-link-hover stretched-link mt-2"
          >
            Events List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
