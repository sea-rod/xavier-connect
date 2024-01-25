import React, { useState } from 'react'
import './Navbar.css'

import cart_icon from '../Ascets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <h1>X Food</h1>
        {/* <Link to='/login'><button>Back</button></Link> */}
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("food")}}><Link style={{ textDecoration: 'none'}} to='/'>Food</Link>{menu==="food" ? <hr/> : <> </>}</li>
        <li onClick={()=>{setMenu("veg")}}><Link style={{ textDecoration: 'none'}} to='/veg'>Veg</Link> {menu==="veg" ? <hr/> : <> </>}</li>
        <li onClick={()=>{setMenu("non-veg")}}><Link style={{ textDecoration: 'none'}} to='non-veg'>Non-veg</Link> {menu==="non-veg" ? <hr/> : <> </>}</li>
        <li onClick={()=>{setMenu("drinks")}}><Link style={{ textDecoration: 'none'}} to='drinks'>Drinks</Link> {menu==="drinks" ? <hr/> : <> </>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/cart'><img src={cart_icon} alt='cart-icon' /></Link>
         <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
