import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../services/axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    console.log(searchParams.get("token"));
  }, []);
  const initialFormData = Object.freeze({
    password: "",
  });

  const [formData, updateForm] = useState(initialFormData);
  const handleChange = (e) => {
    console.log("jj");
    updateForm({
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = () => {
    axiosInstance
      .post("/password_reset/confirm/?token=" + searchParams.get("token"), {
        password: formData.password,
        token: searchParams.get("token"),
      })
      .then((res) => {
        toast.success("Password Resetted Successfully");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error("Link with that token not found or expired");
        } else if (err.response.status == 403) {
          toast.error("ensure the link is right");
        } else toast.error("reset fail");
      });
  };

  return (
    <div className="container pt-1 mt-5" id="login" style={{ height: "95vh" }}>
      <div className="custom-container mb-1 mt-5">
        <div className="heading">Sign In</div>

        <form className="form form-floating mt-3 col-10 mx-auto">
          <div className="form-floating mb-3">
            <input
              autoComplete="username"
              onChange={handleChange}
              value={formData.password}
              type="password"
              name="password"
              className="form-control input"
              id="floatingInput"
            />
            <label htmlFor="floatingInput" className="form-label">
              Password
            </label>
          </div>

          <button
            className="login-button btn mx-auto col-12 mt-4"
            type="button"
            onClick={handleSubmit}
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
