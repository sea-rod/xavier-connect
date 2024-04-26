const OrderItem = (props) => {

  return (
    <div className="d-flex px-2 pt-1 mb-0 mt-2 justify-content-between">
      <div className="d-flex col-5">
        <img src={props.image} alt="" className="col-2 my-auto me-1" />
        <p className="my-auto item-name">{props.name}</p>
      </div>
      <div className="d-flex flex-column ms-auto col-6 justify-content-end m-0">
        <p className="my-auto price ms-auto">Rs {props.price}/-</p>
        <p className="my-auto price ms-auto">qauntity {props.quantity}</p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default OrderItem;
