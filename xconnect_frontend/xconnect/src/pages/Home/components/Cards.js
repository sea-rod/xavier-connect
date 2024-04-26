import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

export default function Cards() {

  const imageData = [
    { id: 1, imagePath: process.env.PUBLIC_URL+'/images/canteen1.jpg', cardTitle: 'Canteen', cardDescription: 'Simplifying online food ordering and management for students.', pagePath: "/Canteen" },
    { id: 2, imagePath: process.env.PUBLIC_URL+'/images/library1.jpg', cardTitle: 'Library', cardDescription: 'Organize, manage, and access a collection of resources or functionalities.', pagePath: "/Library" },
    { id: 3, imagePath: process.env.PUBLIC_URL+'/images/calendar3.jpg', cardTitle: 'Calendar', cardDescription: 'Calendar tool for scheduling and managing events.' , pagePath: "/Calendar"},
    { id: 4, imagePath: process.env.PUBLIC_URL+'/images/stuhelp1.jpg', cardTitle: 'Student Helpline', cardDescription: ' Providing support and resources for academic and personal success.' ,pagePath: "/Helpline"},
  ];

  return (
    <div style={{ justifyContent: 'space-around' }}>
      {imageData.map((item) => (
        <div key={item.id} style={{ position: 'relative', textAlign: 'center', height: '500px', padding: "30px", borderRadius: "10px" }}>
          <img src={item.imagePath} alt={`${item.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom: '20px', borderRadius: "10px" }} />
          <div className="row card-body text-center">
            <div className="col-sm-6 mb-6 mb-sm-4">
              <div className="card card-container">
                <div className="card-body">
                  <h2>{item.cardTitle}</h2>
                  <p>{item.cardDescription}</p>
                  <Link to={item.pagePath} className="btn btn-primary btnStyle">ENTER</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
