import React from 'react';
import "./HeroSection.css";

function HeroSection() {
  const collegeImg = process.env.PUBLIC_URL + "/images/college_hero.jpg"

  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 vh-100">
      <div className="col-10 col-sm-8 col-lg-6 mx-auto">
        <img src={collegeImg} className="d-block img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to XConnect: Shaping Futures, Igniting Minds</h1>
        <p className="lead">At XConnect, we believe in the transformative power of education. Step into a world where academic excellence meets vibrant campus life, and where passion for learning fuels endless possibilities. As a beacon of knowledge and innovation, we are dedicated to nurturing the leaders and thinkers of tomorrow.</p>
      </div>
    </div>
  );
};

export default HeroSection;
