import React from 'react';
import './Cartitem.css';
import burger from '../Ascets/food/Frame 17.png'
import trashbin from '../Ascets/trash-bin.png'
import { Link } from 'react-router-dom';

function 	Cartitem() {
  return (
	<>
    <div className="cartpage">
		<h2>Shopping Cart <span>(1 item in your cart)</span></h2>
		<div className="orderitem">
			<div className="image"><img src={burger} alt="text"/></div>
			<div className="details">
				<div className="name">Burger</div>
				<div className="quantity">2</div>
				<div className="price">Rs 299.00</div>
				<hr />
			</div>
			<div className="trashbin">
				<img src={trashbin} alt='trashbin'/>
			</div>
		</div>
		<div className="orderitem">
			<div className="image"><img src={burger} alt="text"/></div>
			<div className="details">
				<div className="name">Burger</div>
				<div className="quantity">2</div>
				<div className="price">Rs 299.00</div>
				<hr />
			</div>
			<div className="trashbin">
				<img src={trashbin} alt='trashbin'/>
			</div>
		</div>
		</div>
		<div className="cartpage" id="cartpage-sub">
		<div className="total">
			<div className="label">Order total:</div>
			<div className="value">Rs 598</div>
		</div>
		<Link to="/Canteen"><button className="backtocanteen">Continue shopping</button></Link>
		<button className="reserve">Reserve</button>
		</div>
	</>
  );
}

export default Cartitem;
