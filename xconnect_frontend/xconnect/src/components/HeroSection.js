import React from 'react';
import "./HeroSection.css";

function HeroSection () {
    const imagePath = process.env.PUBLIC_URL + "/images/college-corridor.jpg"

    return (
        <div className="hero-section" style={{ backgroundImage: `url(${imagePath})`, justifyContent: 'space-around'}}>
        <div className="container my-5">
    <div className="hero-section row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" >
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
    </div>
        </div>
        </div>      
    );
  };
  
  export default HeroSection;