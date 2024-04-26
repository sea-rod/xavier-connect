import './neworders.css'
import circleacrdimage from '../../../Ascets/circleincard.png'


function neworders() {
  return (
    <div id="neworders-card" className="neworders">
      <div id="top-section" className="neworders">
        <div id="top-left" className="neworders">
          <div id="image-div" className="neworders">
            <img src={circleacrdimage} alt="Image" id="card-image" className="neworders" />
          </div>
          <div id="customer-name-time" className="neworders">
            <h3>Sam Cardozo</h3>
            <p>Today at <span>10:30 AM</span></p>
          </div>
        </div>
        <div id="top-right" className="neworders">
          <p>Order ID: <span>679</span></p>
          <p>Total: Rs<span>100</span>/-</p>
        </div>
      </div>
      <div id="middle-section" className="neworders">
        <div id="middle-left" className="neworders">
          <p>Samosa</p>
        </div>
        <div id="middle-middle" className="neworders">
          <p>Qty:<span>2</span></p>
        </div>
        <div id="middle-right" className="neworders">
          <p>Rs:<span>30</span></p>
        </div>
      </div>
      <div id="bottom-section" className="neworders">
        <div id="bottom-left" className="neworders"></div>
        <div id="bottom-right" className="neworders">
          {/* <p>Total: Rs<span>100</span>/-</p> */}
          <a id="btn-ordercompleted" href="#" className="neworders">
            Order Completed
          </a>
        </div>
      </div>
    </div>
  )
}

export default neworders;
