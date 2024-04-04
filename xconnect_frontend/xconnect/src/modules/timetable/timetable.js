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
                <div className="container mt-4" style={{ width: '100%' }}>
                    <div className="timetable-heading">
                        TYBCA
                        <div className='mt-1' style={{ backgroundColor: '#3D3D3D', height: 'auto', borderRadius: '5px' }}>
                            <table id="timetable">
                                <tbody>
                                    <tr>
                                        <th>MON</th>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                    </tr>
                                    <tr>
                                        <th>TUE</th>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                    </tr>
                                    <tr>
                                        <th>WED</th>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                    </tr>
                                    <tr>
                                        <th>THU</th>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                    </tr>
                                    <tr>
                                        <th>FRI</th>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                    </tr>
                                    <tr>
                                        <th>SAT</th>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                        <td>IOT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}