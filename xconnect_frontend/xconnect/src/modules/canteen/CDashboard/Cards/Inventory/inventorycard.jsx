import React from 'react'
import './inventorycard.css';

const inventorycard = () => {
  return (
    <div id='inventorycard'>
      {/* whatever v use ex p, h5,h6 but this getting margin bottom clashing css properties coz of _reboot.scss  */}
      <h6 className='inevntory-cardp'>ITEM</h6>
      <div className=""></div>
      <p className='inevntory-cardp'>QUANTITY LEFT</p>
    </div>
  )
}

export default inventorycard
