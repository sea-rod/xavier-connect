import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

export default function Events() {
    return (
        <>
            <main className="container">
            <h1 id="events-header">EVENTS</h1>
                {/* <div className="border rounded p-md-5 mb-4  text-body-emphasis">
                    <h1 className="display-4 fst-italic text-center">Explore, Engage, Experience <br /> Vibrant Campus Events</h1>
                    <p className="lead my-3 text-center">Immerse yourself in a world of knowledge, creativity, and excitement.
                        Join us in making every moment on campus memorable.</p>
                </div> */}

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border border-warning rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body">
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <div className="rounded event-time">TODAY 10:00AM</div>
                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0 event-font">TECHLIPSE</h3>
                                <p className="mt-2 card-text mb-auto event-info">The BCA Department of St. Xavier’s College, Mapusa is organising the most fun event.</p>
                                <Link to="/SubEvents" className="icon-link gap-1 icon-link-hover stretched-link mt-2">
                                    Events List
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row g-0 border border-warning rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body">
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <div className="rounded event-time">9TH FEB 09:30AM</div>
                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0 event-font">MEDIA.SCOPE</h3>
                                <p className="mt-2 card-text mb-auto event-info">The Mass Comm. Department of St. Xavier’s College, Mapusa is organising the most fun event.</p>
                                <Link to="/" className="icon-link gap-1 icon-link-hover stretched-link mt-2">
                                    Events List
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </main >
        </>
    );
}