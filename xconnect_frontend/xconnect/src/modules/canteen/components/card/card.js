//menu UI
const Card = (props) => {
  return (
    <div className="d-flex flex-column col-5 col-md-2 py-2 px-0 justify-content-be mx-1">
      <div className="m-0 p-0">
        <img src={props.image} alt="" className="col-12 m-0" />
      </div>
      <div className="text-white  mt-2 d-flex flex-column justify-content-start">
        <p className="m-0 item ">{props.name}</p>
        <p className="m-0 price">Rs {props.price}/-</p>
        {props.quantity === "Add" ? (
          <button
            className=" col-7 mt-1"
            onClick={props.incItem}
            disabled={!props.status}
          >
            {props.quantity}
          </button>
        ) : (
          <button className="d-flex justify-content-between mt-1">
            <i className="fa fa-minus my-auto" onClick={props.descItem}></i>
            <p>{props.quantity}</p>
            <i className="fa fa-plus my-auto" onClick={props.incItem}></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
