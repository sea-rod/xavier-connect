import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's snow theme CSS

const QuillEditor = () => {
  const [content, setContent] = useState("");
  const handleChange = (value) => {
    setContent(value);
    console.log(value);
  };
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleGetText = () => {
    console.log(content);
  };

  return (
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Write something amazing..."
      />
      
  );
};

export default QuillEditor;
