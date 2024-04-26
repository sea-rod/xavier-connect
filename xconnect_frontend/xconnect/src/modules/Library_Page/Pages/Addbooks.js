import LibraryPagehead from "../Components/pagehead/LibraryPagehead";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Addbooks.css';

function Addbooks() {

  const [fileName, setFileName] = useState("Book Image");

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
    <LibraryPagehead name={"Add BOOKS"}/>
    <form>
        <div id="mainaddbooksform" class="mb-3">
            <input type="text" id="addbooksform" placeholder="Book Name" />
            <input type="text" id="addbooksform" placeholder="ISBN" />
            <input type="text" id="addbooksform" placeholder="Category" />
            <div class="mb-3 mt-3" id="uploadbookimagecontainer">
                <div class="d-flex justify-content-around align-items-center" style={{justifyContent:'space-between'}}>
                    <label for="formFile" class="form-label">{fileName}</label>
                    <button id="newbook-image" className="btn" onClick={handleButtonClick}>Upload Image</button>
                </div>
            <input type="file" id="uploadbookimage" className="library-form-control" style={{display: "none"}} ref={fileInput} onChange={handleFileUpload} />
        </div>
        </div>
        <button id="addbook-btn" type="submit" className="btn">ADD BOOK</button>
      </form>   
    </>
  )
}

export default Addbooks;
