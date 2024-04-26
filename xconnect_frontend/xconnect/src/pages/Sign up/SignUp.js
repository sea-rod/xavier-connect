import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../services/axios";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialFormData = Object.freeze({
    username: "",
    email: "",
    password: "",
    password2: "",
    class: "",
    stream: "",
  });
  const [formData, updateForm] = useState(initialFormData);
  const handleChange = (e) => {
    updateForm({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const submit_form = (event) => {
    event.preventDefault();
    console.log(formData);
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password2: formData.password2,
      class_stream: {
        class_name: formData.class,
        stream_name: formData.stream,
      },
    };
    axiosInstance
      .post("accounts/signup/", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Signup Successful");
        navigate("/Login");
      })
      .catch((err) => {
        console.log("failed", err);
        if (err.response.data) {
          Object.keys(err.response.data).forEach((val) => {
            toast.error(String(val) + ":" + String(err.response.data[val]), {
              autoClose: false,
            });
          });
        } else {
          toast.error("Error" + String(err));
        }
      });
  };
  return (
    <>
      <div className="container">
        <div className="custom-container mb-1 mt-5">
          <div className="title">SignUp</div>
          <form
            id="signup"
            className="form form-floating mt-3 col-10 mx-auto "
            onSubmit={submit_form}
          >
            <div className="form-floating mx-auto col-12 mb-3">
              <input
                type="text"
                className="form-control"
                value={formData.username}
                name="username"
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingInput" style={{ paddingLeft: "20px" }}>
                Roll Number
              </label>
            </div>
            <div className="form-floating mx-auto col-12 mb-3">
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="form-control"
                required
              />
              <label htmlFor="floatingInput" style={{ paddingLeft: "20px" }}>
                Email address
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder=""
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingPassword" style={{ paddingLeft: "20px" }}>
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn position-absolute top-50 end-0 translate-middle-y"
                style={{
                  background: "none",
                  border: "none",
                  zIndex: 2,
                  right: "10px",
                }}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="form-floating">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="floatingConfirmPassword"
                placeholder=""
                value={formData.password2}
                name="password2"
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floatingConfirmPassword"
                style={{ paddingLeft: "20px" }}
              >
                Confirm Password
              </label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="btn position-absolute top-50 end-0 translate-middle-y"
                style={{
                  background: "none",
                  border: "none",
                  zIndex: 2,
                  right: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {/* DropDown Section */}
            <div className="d-flex justify-content-between">
              <div className="dropdown mt-3">
                {/* <label htmlFor="classSelect">Class:</label> */}
                <select
                  className="form-control form-select"
                  name="class"
                  onChange={handleChange}
                  id="classSelect"
                  required
                >
                  <option value="">Select class</option>
                  <option value="FY">FY</option>
                  <option value="SY">SY</option>
                  <option value="TY">TY</option>
                  <option value="NA">NA</option>
                </select>
              </div>
              <div className="dropdown mt-3">
                {/* <label htmlFor="stream">Stream:</label> */}
                <select
                  className="form-select form-control"
                  id="streamSelect"
                  name="stream"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Stream</option>
                  <option value="BCA">B.C.A</option>
                  <option value="BBA">BBA</option>
                  <option value="B.sc">B.Sc</option>
                  <option value="B.com">B.com</option>
                  <option value="BA">BA</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="signupbtn col-10 d-flex justify-content-center mx-auto mt-5"
            >
              SignUp
            </button>
            <div className="signin mt-3">
              Already have an account? <a href="/">Signin</a>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
