import { useState, useEffect } from "react";
import axiosInstance from "../../services/axios";
import { toast } from "react-toastify";

const ResetPasswordEmail = () => {
  const initialFormData = Object.freeze({
    email: "",
  });

  const [formData, updateForm] = useState(initialFormData);

  const handleChange = (e) => {
    updateForm({
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = () => {
    const toastId = toast.info("please wait",{autoClose:false});
    axiosInstance
      .post("password_reset/", { email: formData.email })
      .then(() => {
        toast.dismiss(toastId);
        toast.success("Email sent Successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.dismiss(toastId);
        if (err.response.data?.email) {
          toast.error(String(err.response.data.email));
        } else {
          toast.error("Unable to send Email");
        }
      });
  };

  return (
    <div className="container pt-1 mt-5" id="login" style={{ height: "95vh" }}>
      <div className="custom-container mb-1 mt-5">
        <div className="heading">Sign In</div>

        <form className="form form-floating mt-3 col-10 mx-auto">
          <div className="form-floating mb-3">
            <input
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control input"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput" className="form-label">
              Email
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

export default ResetPasswordEmail;
