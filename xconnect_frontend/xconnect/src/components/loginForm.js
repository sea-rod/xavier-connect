import React from "react";
import { useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });
  const [formData, updateForm] = useState(initialFormData);
  const handleChange = (e) => {
    updateForm({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = () => {
    console.log("submit btn clicked", formData);
    axiosInstance
      .post("token/", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          localStorage.getItem("access_token");
        navigate("/");
        let event = new Event("addedToken");
        window.dispatchEvent(event);
      });
  };

  return (
    <div className="custom-container mb-1">
      <div className="heading text-center">Sign In</div>

      <form className="form form-floating">
        <div className="form-floating mb-3">
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            name="username"
            className="form-control input"
            id="floatingInput"
            placeholder=""
          />
          <label htmlFor="floatingInput" className="text-black-50">
            Username
          </label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
            className="form-control input"
            id="floatingPassword"
            placeholder=""
          />
          <label htmlFor="floatingPassword" className="text-black-50">
            Password
          </label>
        </div>
        <span className="forgot-password">
          <a href="/">Forgot Password?</a>
        </span>
        <button
          className="btn btn-primary btn-block login-button"
          type="button"
          onClick={handleSubmit}
        >
          Login In
        </button>
      </form>
    </div>
  );
}
