// import circleacrdimage from '../../../canteen/Ascets//circleincard.png'
import './Resstatuscard.css';
import { Link } from 'react-router-dom';

function Resstatuscard() {
  return (
    <div id="bookreservarioncard-card" className="bookreservarioncard" style={{margin:'0.5rem'}}>
      <div id="top-section" className="bookreservarioncard">
        <div id="top-left" className="bookreservarioncard">
        <div style={{width: '60px', 
            height: '60px', 
            backgroundColor: '#fff', 
            borderRadius: '60%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: '7px'
            }}>
        <img width="35" height="35" src="https://img.icons8.com/ios/50/books.png" alt="add-book"/>
        </div>
          <div id="customer-name-time" className="bookreservarioncard" style={{marginTop: '10px'}}>
            <h5>Sam Cardozo</h5>
            <p style={{fontSize:'11px'}}>Today at <span>10:30 AM</span></p>
          </div>
        </div>
        <div id="top-right" className="bookreservarioncard">
          <p style={{fontSize:'15px'}}>Reservation ID: <span>679</span></p>
          <p style={{fontSize:'11px'}}>ISBN ID: <span>6742567425084</span></p>
        </div>
      </div>
      <div id="middle-section" className="bookreservarioncard">
        <div id="middle-left" className="bookreservarioncard">
          <p>The Great Gatsby</p>
        </div>
        <div id="middle-middle" className="bookreservarioncard">
          {/* empty div for space in between */}
        </div>
        <div id="middle-right" className="bookreservarioncard">
          <div id="bookstatus-dropdown" className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Status
              </button>
              <ul class="dropdown-menu" id='reservvestatus-dropdown'>
                  <li><Link className="dropdown-item" to="#">Preparing</Link></li>
                  <li><Link className="dropdown-item" to="#">Ready</Link></li>
                  <li><Link className="dropdown-item" to="#">Issued</Link></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resstatuscard;
