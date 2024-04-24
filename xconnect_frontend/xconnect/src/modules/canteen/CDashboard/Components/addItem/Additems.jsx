import { useState } from "react";
import Pagehead from "../pagehead/Pagehead";
import axiosInstance from "../../../../../services/axios";
import { toast } from "react-toastify";
import "./additem.css";
const names = [
  {
    name: "Add items",
  },
];

const Additems = () => {
  const initialFormData = Object.freeze({
    item_name: "",
    price: "",
    avail_quantity: "",
    status: true,
  });
  const [formdata, updateForm] = useState(initialFormData);
  const [file, setFile] = useState();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleChange = (e) => {
    if (e.target.name === "status") {
      updateForm({
        ...formdata,
        [e.target.name]: e.target.checked,
      });
    } else
      updateForm({
        ...formdata,
        [e.target.name]: e.target.value.trim(),
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formdata);

    const axiosData = new FormData();

    for (const key in formdata) {
      if (formdata[key] === "") {
        toast.error("All the fields are required");
      }
      axiosData.append(key, formdata[key]);
    }

    if (file) {
      axiosData.append("image", file);
    }

    axiosInstance
      .post("canteen/menu/", axiosData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Added Successfully");
        console.log(res);
        updateForm({
          ...initialFormData,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Occurred!");
      });
    return;
  };

  return (
    <>
      <Pagehead names={names} />
      <div className="container px-5" id="add-item">
        <form action="" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Item Name
            </label>
            <input
              value={formdata.item_name}
              onChange={handleChange}
              type="text"
              class="form-control"
              name="item_name"
              placeholder="Panroll"
              required
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Price
            </label>
            <input
              type="number"
              class="form-control"
              value={formdata.price}
              onChange={handleChange}
              name="price"
              placeholder="99.00"
              required
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Available Quantity
            </label>
            <input
              type="number"
              value={formdata.avail_quantity}
              onChange={handleChange}
              class="form-control"
              name="avail_quantity"
              placeholder="100"
              required
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Enter Image
            </label>
            <input
              class="form-control"
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={handleChange}
              name="status"
              checked={formdata.status}
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              status
            </label>
          </div>
          <button
            className="btn btn-primary"
            // onClick={handleSubmit}
            // type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Additems;
