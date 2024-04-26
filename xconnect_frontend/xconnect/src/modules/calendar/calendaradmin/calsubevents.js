import React, { useState, useRef } from "react";
import "./calsubevents.css";

const SubEventsForm = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Add your form submission logic here
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="calbody">
      <div className="calheading">
        <h2>SUB EVENTS DESCRIPTION</h2>
      </div>
      <form className="caladdevents" onSubmit={handleSubmit}>
        <div className="Caleventname">
          <input type="text" id="eventName" name="eventName" placeholder="Sub Event Name"/><br />
        </div>
        <div>
          <input type="text" id="eventDate" name="eventDate" placeholder="No. of Participants"/><br />
        </div>
        <div>
          <input type="text" id="startTime" name="startTime" placeholder="Description" /><br /> 
        </div>
        <div className="upload" placeholder="Event Image">
          <span className="upload-text">Event Image</span>
          <button className="upload" onClick={handleUploadButtonClick}>Choose File</button>
          <input 
            type="file" style={{display:"none"}} id="eventImage" name="eventImage"  accept="image/*"  
            onChange={handleImageChange} 
            ref={fileInputRef}
          />
          <br />
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
        </div>
        <div className="calsubmit">
          <button type="submit">ADD ENTRY</button>
        </div>
      </form>
    </div>
  );
};

export default SubEventsForm;
