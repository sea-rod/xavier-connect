import React, { useState } from "react";
import "./caladdevents.css";
import axiosInstance from "../../../services/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
  const navigate = useNavigate();
  const [announcementname, setAnnouncementName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    announcementname: "",
    eventDate: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    let isValid = true;
    const newErrors = {
      announcementname: "",
      eventDate: "",
      description: "",
    };

    if (!announcementname.trim()) {
      newErrors.announcementname = "Announcement name is required";
      isValid = false;
    }

    if (!eventDate) {
      newErrors.eventDate = "Event date is required";
      isValid = false;
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      const response = await axiosInstance.post("calendar/event/", {
        name: announcementname,
        date: eventDate,
        description: description,
      });
      toast.success("Announcement Added Successfully:");
      console.log("Response:", response.data);
  
      setAnnouncementName("");
      setEventDate("");
      setDescription("");
    } catch (err) {
      if (err.response.status === 403) {
        toast.error("You need to login");
        navigate("/login");
        
      }
    }
  };

  return (
    <div className="calbody">
      <div className="calheading">
        <h2>ADD NEW ANNOUNCEMENT</h2>
      </div>
      <form className="caladdevents" onSubmit={handleSubmit}>
        <div className="Caleventname">
          <input
            type="text"
            id="eventName"
            name="eventName"
            placeholder="ANNOUNCEMENT Name"
            value={announcementname}
            onChange={(e) => setAnnouncementName(e.target.value)}
          />
          <span className="error">{errors.announcementname}</span>
        </div>
        <br />
        <div>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <span className="error">{errors.eventDate}</span>
        </div>
        <br />
        <div>
          <input
            type="text"
            id="Description"
            name="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="error">{errors.description}</span>
        </div>
       <br />
        <div className="calsubmit">
          <button type="submit">SUBMIT</button> 
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
