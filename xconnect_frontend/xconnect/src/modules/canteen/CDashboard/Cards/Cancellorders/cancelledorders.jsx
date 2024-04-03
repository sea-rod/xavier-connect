import './cancelledorders.css'
import circleacrdimage from '../../../Ascets//circleincard.png'

function cancelledorders() {
  return (
    <div id="cancelledorders-card" className="cancelledorders">
      <div id="top-section" className="cancelledorders">
        <div id="top-left" className="cancelledorders">
          <div id="image-div" className="cancelledorders">
          <img src={circleacrdimage} alt="Image" id="card-image" className="cancelledorders" />
          </div>
          <div id="customer-name-time" className="cancelledorders">
            <h3>Sam Cardozo</h3>
            <p>Today at <span>10:30 AM</span></p>
          </div>
        </div>
        <div id="top-right" className="cancelledorders">
          <p>Order ID: <span>679</span></p>
          <p>Total: Rs<span>100</span>/-</p>
        </div>
      </div>
      <div id="middle-section" className="cancelledorders">
        <div id="middle-left" className="cancelledorders">
          <p>Samosa</p>
        </div>
        <div id="middle-middle" className="cancelledorders">
          <p>Qty:<span>2</span></p>
        </div>
        <div id="middle-right" className="cancelledorders">
          <p>Rs:<span>30</span></p>
        </div>
      </div>
    </div>
  )
}

export default cancelledorders
