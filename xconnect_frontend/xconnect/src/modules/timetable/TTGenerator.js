// src/components/TimetableGenerator.js

import React, { useState } from 'react';

const TimetableGenerator = () => {
  const [stream, setStream] = useState('');
  const [classes, setClasses] = useState('');
  const [teachers, setTeachers] = useState('');
  const [streamList, setStreamList] = useState([]);
  const [timetable, setTimetable] = useState(null);

  const handleAddStream = () => {
    if (stream.trim() !== '') {
      const existingStreamIndex = streamList.findIndex(item => item.stream === stream.trim());
      if (existingStreamIndex !== -1) {
        const updatedStreamList = [...streamList];
        updatedStreamList[existingStreamIndex].classes.push(classes.trim());
        updatedStreamList[existingStreamIndex].teachers.push(teachers.trim());
        setStreamList(updatedStreamList);
      } else {
        setStreamList([...streamList, { stream: stream.trim(), classes: [classes.trim()], teachers: [teachers.trim()] }]);
      }
      setStream('');
      setClasses('');
      setTeachers('');
    }
  };

  const handleAddClass = () => {
    if (stream.trim() !== '') {
      const existingStreamIndex = streamList.findIndex(item => item.stream === stream.trim());
      if (existingStreamIndex !== -1) {
        const updatedStreamList = [...streamList];
        updatedStreamList[existingStreamIndex].classes.push(classes.trim());
        setStreamList(updatedStreamList);
        setClasses('');
      } else {
        // Handle the case where the stream doesn't exist
        console.error('Stream not found');
      }
    }
  };

  const handleAddTeacher = () => {
    if (stream.trim() !== '') {
      const existingStreamIndex = streamList.findIndex(item => item.stream === stream.trim());
      if (existingStreamIndex !== -1) {
        const updatedStreamList = [...streamList];
        updatedStreamList[existingStreamIndex].teachers.push(teachers.trim());
        setStreamList(updatedStreamList);
        setTeachers('');
      } else {
        // Handle the case where the stream doesn't exist
        console.error('Stream not found');
      }
    }
  };

  const handleDeleteClass = (streamIndex, classIndex) => {
    const updatedStreamList = [...streamList];
    updatedStreamList[streamIndex].classes.splice(classIndex, 1);
    setStreamList(updatedStreamList);
  };

  const handleDeleteTeacher = (streamIndex, teacherIndex) => {
    const updatedStreamList = [...streamList];
    updatedStreamList[streamIndex].teachers.splice(teacherIndex, 1);
    setStreamList(updatedStreamList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/timetable/gt/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(streamList),
    });
    const data = await response.json();
    setTimetable(data);
  };

  return (
    <div className="container mt-4">
      <h2>Timetable Generator</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="stream" className="form-label">Stream</label>
          <input
            type="text"
            className="form-control"
            id="stream"
            placeholder="Enter stream"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="classes" className="form-label">Classes</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter class name"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddClass}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="teachers" className="form-label">Teachers</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter teacher name"
              value={teachers}
              onChange={(e) => setTeachers(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddTeacher}
            >
              Add
            </button>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddStream}>
          Add Stream
        </button>
        <button type="submit" className="btn btn-primary">Generate Timetable</button>
      </form>
      {streamList.length > 0 && (
        <div className="mt-4">
          <h3>Selected Items</h3>
          {streamList.map((item, streamIndex) => (
            <div key={streamIndex} className="mb-3">
              <h4>Stream: {item.stream}</h4>
              <ul>
                <li><strong>Classes:</strong></li>
                {item.classes.map((className, classIndex) => (
                  <li key={classIndex}>
                    {className}
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => handleDeleteClass(streamIndex, classIndex)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <ul>
                <li><strong>Teachers:</strong></li>
                {item.teachers.map((teacher, teacherIndex) => (
                  <li key={teacherIndex}>
                    {teacher}
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => handleDeleteTeacher(streamIndex, teacherIndex)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {timetable && (
        <div className="mt-4">
          <h3>Generated Timetable</h3>
          {/* Display the generated timetable here */}
        </div>
      )}
    </div>
  );
};

export default TimetableGenerator;
