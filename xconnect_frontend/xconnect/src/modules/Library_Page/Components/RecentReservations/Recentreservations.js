import React from 'react'
import './Recentreservations.css';

function Recentreservations() {
  return (
    <div id="recentreservationscard-card" className="recentreservationscard" style={{margin:'0.5rem'}}>
      <div id="top-section" className="recentreservationscard">
        <div style={{width: '55px', 
            height: '55px', 
            backgroundColor: '#fff', 
            borderRadius: '60%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: '7px'
            }}>
        <img width="40" height="40" src="https://img.icons8.com/carbon-copy/100/ingredients-list.png" alt="add-book"/>
        </div>
          <div id="customer-name-time" className="recentreservationscard" style={{marginTop: '10px'}}>
            <h5>Reservations</h5>
          </div>
      </div>
      <div id="middle-section" className="recentreservationscard">
        <div id="middle-left" className="recentreservationscard">
          <p>Daniel Bareto</p>
        </div>
        <div id="middle-middle" className="recentreservationscard">
        <p style={{fontSize:'15px'}}># <span>679</span></p>
        </div>
        <div id="middle-right" className="recentreservationscard">
        <p style={{fontSize:'15px'}}>Today at <span>10:30 AM</span></p>
        </div>
      </div>
    </div>
  )
}

export default Recentreservations
