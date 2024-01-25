import React from 'react'
import './Hero.css'
import hand_icon from '../Ascets/hand_icon.png'
import arrow from '../Ascets/arrow.png'
import canteenhero1 from '../Ascets/canteen-hero1.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>TASTY FOOD</h2>
        <div>
            <div className="hero-hand-icon">
                <p>fuuuruu</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>great food</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Reserve Now</div>
            <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={canteenhero1} alt="" />
      </div>
    </div>
  )
}

export default Hero
