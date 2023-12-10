import React from "react";
import "../components/loginForm.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
    return (
        <div className="container">
            <div className="heading text-center">Sign In</div>
            
            <form action="" className="form">
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input required="" className="form-control input" type="email" name="email" id="email" placeholder="E-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input required="" className="form-control input" type="password" name="password" id="password" placeholder="Password" />
                </div>
                <span className="forgot-password"><a href="#">Forgot Password?</a></span>
                <input className="btn btn-primary btn-block login-button" type="submit" value="Sign In" />
            </form>
        </div>
    );
}
