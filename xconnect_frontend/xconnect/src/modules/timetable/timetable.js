import React from "react";
import "./TimeTable.css";

export default function TimeTable() {
    return (
        <>
            <div className="container">
                <div style={{ textAlign: 'center', fontSize: '35px', fontWeight: 'bolder' }}>TIMETABLE GENERATOR</div>
                <div className="d-flex justify-content-center">
                    <div className="dropdown mt-3 mx-2">
                        <a className="btn dropdown-btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Class
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">FY</a></li>
                            <li><a className="dropdown-item" href="/">SY</a></li>
                            <li><a className="dropdown-item" href="/">TY</a></li>
                        </ul>
                    </div>
                    <div className="dropdown mt-3 mx-2">
                        <a className="btn dropdown-btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Stream
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">BCA</a></li>
                            <li><a className="dropdown-item" href="/">BBA</a></li>
                            <li><a className="dropdown-item" href="/">B.Sc</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4" style={{width:'100%'}}>
                    <div className="" style={{backgroundColor:"#E34A64", border:'5px solid #E34A64', paddingLeft:'10px', borderRadius:"5px"}}>
                        TYBCA
                    </div>
                </div>
            </div>
        </>
    );
}