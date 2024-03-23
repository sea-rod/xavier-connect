import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { Link, useNavigate } from "react-router-dom";
// import axiosInstance from "../../services/axios";
import "./SignUp.css"

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <div className="container">
                <div className="custom-container mb-1 mt-5">
                    <div className="title">SignUp</div>
                    <form id="signup" className="form form-floating mt-3 col-10 mx-auto ">


                        <div className="form-floating mx-auto col-12 mb-3">
                            <input type="email" className="form-control" placeholder="" />
                            <label htmlFor="floatingInput" style={{ paddingLeft: "20px" }}>Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type={showPassword ? "text" : "password"} className="form-control" placeholder="" />
                            <label htmlFor="floatingPassword" style={{ paddingLeft: "20px" }}>Password</label>
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn position-absolute top-50 end-0 translate-middle-y" style={{ background: 'none', border: 'none', zIndex: 2, right: '10px' }}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        <div className="form-floating">
                            <input type={showConfirmPassword ? "text" : "password"} className="form-control" id="floatingConfirmPassword" placeholder="" />
                            <label htmlFor="floatingConfirmPassword" style={{ paddingLeft: "20px" }}>Confirm Password</label>
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="btn position-absolute top-50 end-0 translate-middle-y" style={{ background: 'none', border: 'none', zIndex: 2, right: '10px' }}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        {/* DropDown Section */}
                        <div className="d-flex justify-content-between">
                            <div className="dropdown mt-3">
                                <a className="btn dropdown-btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Class
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">FY</a></li>
                                    <li><a className="dropdown-item" href="/">SY</a></li>
                                    <li><a className="dropdown-item" href="/">TY</a></li>
                                </ul>
                            </div>
                            <div className="dropdown mt-3">
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

                        <button className="signupbtn col-10 d-flex justify-content-center mx-auto mt-5">SignUp</button>
                        <div className="signin mt-3">Already have an account? <a href="/">Signin</a> </div>
                    </form>
                </div>
            </div>
        </>
    );
}
