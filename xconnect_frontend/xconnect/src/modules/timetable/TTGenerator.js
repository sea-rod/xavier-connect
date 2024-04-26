import React, { useState } from 'react';
import axiosInstance from "../../services/axios";
import TimeTable from "./timetable";

const TimetableGenerator = () => {
  const [stream, setStream] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [streamList, setStreamList] = useState([]);
  const [timetable, setTimetable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const handleAddStream = () => {
    if (stream.trim() !== '' && subject.trim() !== '' && teacher.trim() !== '') {
      const existingStreamIndex = streamList.findIndex(item => item.stream === stream.trim());
      if (existingStreamIndex !== -1) {
        const updatedStreamList = [...streamList];
        updatedStreamList[existingStreamIndex].subjects.push(subject.trim());
        updatedStreamList[existingStreamIndex].teachers.push(teacher.trim());
        setStreamList(updatedStreamList);
      } else {
        setStreamList([...streamList, { stream: stream.trim(), subjects: [subject.trim()], teachers: [teacher.trim()] }]);
      }
      setStream('');
      setSubject('');
      setTeacher('');
    } else {
      setError('Please fill in all fields before adding a stream.');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const handleAddTeacher = () => {
    if (stream.trim() !== '' && subject.trim() !== '' && teacher.trim() !== '' && streamList.length > 0) {
      const existingStreamIndex = streamList.findIndex(item => item.stream === stream.trim());
      if (existingStreamIndex !== -1) {
        const updatedStreamList = [...streamList];
        updatedStreamList[existingStreamIndex].subjects.push(subject.trim());
        updatedStreamList[existingStreamIndex].teachers.push(teacher.trim());
        setStreamList(updatedStreamList);
        setSubject('');
        setTeacher('');
      } else {
        setError('Stream not found.');
        setTimeout(() => {
          setError('');
        }, 5000);
      }
    } else {
      setError('Please fill in all fields and add a stream before adding a teacher.');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const handleDeleteRow = (streamIndex, rowIndex) => {
    const updatedStreamList = [...streamList];
    updatedStreamList[streamIndex].subjects.splice(rowIndex, 1);
    updatedStreamList[streamIndex].teachers.splice(rowIndex, 1);
    if (updatedStreamList[streamIndex].subjects.length === 0) {
      updatedStreamList.splice(streamIndex, 1);
    }
    setStreamList(updatedStreamList);
  };
  // const response = await axiosInstance.post('/api/timetable/gt/', streamList);
  // setTimetable(response.data);
  // console.log(response.data)

  const formatStreamList = (streamList) => {
    const classes = {};
    const teachers_by_subject = {};
  
    streamList.forEach((item) => {
      // Add teachers for each stream
      classes[item.stream] = item.teachers;
  
      // Create a map to store subjects for each teacher
      const subjectsMap = {};
  
      // Populate subjects for each teacher
      item.teachers.forEach((teacher, index) => {
        const subject = item.subjects[index] || ''; // Get subject at the same index or an empty string if not present
        
        if (!subjectsMap[teacher]) {
          subjectsMap[teacher] = [subject];
        } else {
          subjectsMap[teacher].push(subject);
        }
      });
  
      // Merge subjects for teachers with the same name
      Object.entries(subjectsMap).forEach(([teacher, subjects]) => {
        if (!teachers_by_subject[teacher]) {
          teachers_by_subject[teacher] = subjects;
        } else {
          teachers_by_subject[teacher] = teachers_by_subject[teacher].concat(subjects);
        }
      });
    });
  
    // Merge values for duplicate keys in teachers_by_subject
    const mergedTeachersBySubject = {};
    Object.entries(teachers_by_subject).forEach(([teacher, subjects]) => {
      if (!mergedTeachersBySubject[teacher]) {
        mergedTeachersBySubject[teacher] = subjects;
      } else {
        mergedTeachersBySubject[teacher] = [...new Set(mergedTeachersBySubject[teacher].concat(subjects))];
      }
    });
  
    return { classes, teachers_by_subject: mergedTeachersBySubject };
  };
  
  
  
  
  
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (streamList.length > 0) {
      setLoading(true);
      try {
        const formattedStreamList = formatStreamList(streamList);
        const response = await axiosInstance.post('/timetable/gt/', formattedStreamList);
        setTimetable(response.data);
        
      } catch (error) {
        setError('Error generating timetable');
        setTimeout(() => {
          setError('');
        }, 5000);
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please add at least one stream before generating the timetable.');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };
  

  return (
    <div className="container mt-4">
      <h2>Timetable Generator</h2>
      {error && <div className="alert alert-danger">{error}</div>}
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
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter subject name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="teacher" className="form-label">Teacher</label>
          <input
            type="text"
            className="form-control"
            id="teacher"
            placeholder="Enter teacher name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={handleAddStream}>
          Add Stream
        </button>
        <button type="button" className="btn btn-primary" onClick={handleAddTeacher}>
          Add Teacher
        </button>
        <button type="submit" className="btn btn-primary ms-2" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Timetable'}
        </button>
      </form>
      {streamList.length > 0 && (
        <div className="mt-4">
          <h3>Selected Items</h3>
          {streamList.map((item, streamIndex) => (
            <div key={streamIndex} className="mb-3">
              <h4>Stream: {item.stream}</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Teacher</th>
                    <th>Subject</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {item.subjects.map((subjectName, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{item.teachers[rowIndex]}</td>
                      <td>{subjectName}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteRow(streamIndex, rowIndex)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
      {timetable && (
        <div className="mt-4">
          <h3>Generated Timetable</h3>
          <TimeTable data={timetable} />
        </div>
      )}
    </div>
  );
};

export default TimetableGenerator;
