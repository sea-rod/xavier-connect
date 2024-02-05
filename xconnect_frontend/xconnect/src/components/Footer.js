import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom';

export default function Footer() {
    const yearObj = new Date();
    const year = yearObj.getFullYear();
    return (
        <>
            <div className="container" >
                <footer className="py-5 my-5 border-top">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3 text-white">
                            <h5>LINKS</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Terms and Conditions</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Guidelines</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About Us</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white"> Student Help</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-5 mb-3 text-white">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top align-items-center text-white">
                        <p className="mb-0">© {year} XConnect. All rights reserved.</p>
                        <ul className="list-unstyled d-flex mb-0">

                            <li className="social-media"><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="social-media"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                            <li className="social-media"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                            <li className="social-media"><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>

                </footer>
            </div>
        </>
    )
}
