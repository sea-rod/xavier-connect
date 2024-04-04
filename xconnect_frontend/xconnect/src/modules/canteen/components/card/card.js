//menu UI
import AddBtn from "../AddBtn/AddBtn";
const Card = (props) => {
  return (
    <div className="d-flex flex-column col-5 col-md-2 py-2 px-0 justify-content-be mx-1">
      <div className="m-0 p-0">
        <img src={props.image} alt="" className="col-12 m-0" />
      </div>
      <div className="text-white  mt-2 d-flex flex-column justify-content-start">
        <p className="m-0 item ">{props.name}</p>
        <p className="m-0 price">Rs {props.price}/-</p>
        <AddBtn
          quantity={props.quantity}
          status={props.status}
          incItem={props.incItem}
          descItem={props.descItem}
        />
      </div>
    </div>
  );
};

export default Card;
