import React from 'react';
import "./HeroSection.css";

function HeroSection() {
  const collegeImg = process.env.PUBLIC_URL + "/images/college_hero.jpg"

  return (
    <>
<<<<<<< HEAD
     <div className='container vh-100'>
     <div class="px-4 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis mt-3">Welcome to XConnect: Shaping Futures, Igniting Minds</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">At XConnect, we believe in the transformative power of education. Step into a world where academic excellence meets vibrant campus life, and where passion for learning fuels endless possibilities. As a beacon of knowledge and innovation, we are dedicated to nurturing the leaders and thinkers of tomorrow.</p>
=======
     <div className='container'>
     <div className="px-4 text-center border-bottom">
    <h1 className="display-4 fw-bold text-body-emphasis">Welcome to XConnect: Shaping Futures, Igniting Minds</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">At XConnect, we believe in the transformative power of education. Step into a world where academic excellence meets vibrant campus life, and where passion for learning fuels endless possibilities. As a beacon of knowledge and innovation, we are dedicated to nurturing the leaders and thinkers of tomorrow.</p>
>>>>>>> 79713361347e9b152404be02c8a42ff21a7a017d
    </div>
    <div>
      <div className="container">
      <img src={collegeImg} className="img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
  </div>
    </>
  );
};

export default HeroSection;
