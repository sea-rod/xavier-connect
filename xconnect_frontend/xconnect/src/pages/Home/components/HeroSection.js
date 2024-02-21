import React from 'react';
import "./HeroSection.css";

function HeroSection() {
  const collegeImg = process.env.PUBLIC_URL + "/images/college-corridor.jpg"

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${collegeImg})`, justifyContent: 'space-around' }}>
      <div className="container my-5">
        <div className="hero-section row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" >
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Welcome to XConnect: Shaping Futures, Igniting Minds</h1>
            <p>At XConnect, we believe in the transformative power of education. Step into a world where academic excellence meets vibrant campus life, and where passion for learning fuels endless possibilities. As a beacon of knowledge and innovation, we are dedicated to nurturing the leaders and thinkers of tomorrow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;