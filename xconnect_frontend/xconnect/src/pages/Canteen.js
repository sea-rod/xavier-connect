import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import './Canteen.css'
import Services from '../components/Services/Services'
import fpack from '../components/Ascets/fpack.png'
import { Link } from 'react-router-dom'

export default function Canteen() {
  return (
    <div id='canteen'> 
      <Link to="/Cart"> <div className="cart">
        <img src={fpack} alt='food pack icon'/>
      </div> </Link>
      <Hero />
      <Popular />
      <Services />
    </div>
  )
}
