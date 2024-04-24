import React, { useState } from "react";
import Pagehead from "../../../canteen/CDashboard/Components/Pagehead";
import { Link } from "react-router-dom";
import "./ManageSubevents.css"

export default function ManageSubEvents(){
    const names = [
        {
            name: "MANAGE SUBEVENTS"
        }
    ];

    // State variable for the file name
    const [fileName, setFileName] = useState("Event Image");

    // Create a reference to the file input
    const fileInput = React.useRef();

    // Function to trigger the file input when the button is clicked
    const handleButtonClick = (event) => {
        event.preventDefault();
        fileInput.current.click();
    };

    // Function to handle file upload
    const handleFileUpload = (event) => {
        setFileName(event.target.files[0].name);
    };

    return (
        <>
            <Pagehead names={names} />
            <div id="subevents-dropdown" className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Main Event
                </button>
                <ul class="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Techlipse</Link></li>
                    <li><Link className="dropdown-item" to="#">MediaScope</Link></li>
                    <li><Link className="dropdown-item" to="#">Arena</Link></li>
                </ul>
            </div>
            <form>
                <div id="maineventform" class="mb-3">
                    <input type="text" id="addeventsform" placeholder="Sub Event Name" />
                    <input type="text" id="addeventsform" placeholder="No. of Participants" />
                    <textarea id="addeventsform" rows="3" placeholder="Description"></textarea>
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <label for="formFile" class="form-label">{fileName}</label>
                            <button id="subevents-image" className="btn" onClick={handleButtonClick}>Upload Image</button>
                        </div>
                        <input type="file" id="formFile" className="form-control" style={{display: "none"}} ref={fileInput} onChange={handleFileUpload} />
                    </div>

                </div>
                <button id="addevent-btn" type="submit" className="btn">SUBMIT</button>
            </form>
        </>
    );
}
