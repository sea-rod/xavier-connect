import React from "react";
import "./loginForm.css";

export default function LoginForm() {
    return (
        <div className="custom-container mb-1">
            <div className="heading text-center">Sign In</div>

            <form action="" className="form form-floating">
                <div className="form-floating mb-3">
                    <input type="email" class="form-control input" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput" className="text-black-50">Email Address</label>
                </div>
                <div className="form-floating">
                    <input type="password" class="form-control input" id="floatingPassword" placeholder="" />
                    <label htmlFor="floatingPassword" className="text-black-50">Password</label>
                </div>
                <span className="forgot-password"><a href="/">Forgot Password?</a></span>
                <input className="btn btn-primary btn-block login-button" type="submit" value="Sign In" />
            </form>
        </div>
    );
}
