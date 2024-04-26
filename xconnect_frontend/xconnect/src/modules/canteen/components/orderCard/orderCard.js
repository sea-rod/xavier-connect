import "./orderCard.css";
import OrderItem from "../../pages/Order/OrderItem";
const OrderCard = (props) => {
  return (
    <div id="order-card" className="container my-3">
      {props.orderItems.map((item) => (
        <OrderItem
          quantity={item.quantity}
          key={item.menu.id}
          id={item.menu.id}
          name={item.menu.item_name}
          image={item.menu.image}
          price={item.menu.price}
          item_id={item.id}
        />
      ))}
      <hr />
      <div className="d-flex justify-content-end mt-2">
        <div className="price">Total {props.total}/-</div>
      </div>
    </div>
  );
};
export default OrderCard;
