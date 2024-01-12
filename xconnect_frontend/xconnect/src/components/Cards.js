import React from 'react';
import "./Cards.css";

export default function Cards({ event }) {

  const imageData = [
    { id: 1, imagePath: 'images/canteen1.jpg', cardTitle: 'Canteen', cardDescription: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, imagePath: 'images/library1.png', cardTitle: 'Library', cardDescription: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, imagePath: 'images/calendar3.jpg', cardTitle: 'Calendar', cardDescription: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, imagePath: 'images/stuhelp1.jpg', cardTitle: 'Student Helpline', cardDescription: 'With supporting text below as a natural lead-in to additional content.' },
  ];

    return (
    <div style={{justifyContent: 'space-around' }}>
      {imageData.map((item) => (
        <div key={item.id} style={{ position: 'relative', textAlign: 'center'}}>
          <img src={item.imagePath} alt={`${item.id}`} style={{ maxWidth: '100%', width: '800px', height:'280px', marginBottom: '20px'}} /> 
          <div className="row card-body text-center">
            <div className="col-sm-6 mb-6 mb-sm-4"> 
            <div className="card card-container">
              <div className="card-body">
                <h2>{item.cardTitle}</h2>
                <p>{item.cardDescription}</p>
                <a href="/" className="btn btn-primary btnStyle">Enter</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>    
  );
}
