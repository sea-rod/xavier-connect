const AddBtn = (props) => {
  return (
    <>
      {props.quantity === "Add" ? (
        <button
          className=" col-7 my-auto me-1"
          onClick={props.incItem}
          disabled={!props.status}
        >
          {props.quantity}
        </button>
      ) : (
        <button className="d-flex justify-content-between my-auto me-1">
          <i className="fa fa-minus my-auto" onClick={props.descItem}></i>
          <p className="my-auto">{props.quantity}</p>
          <i className="fa fa-plus my-auto" onClick={props.incItem}></i>
        </button>
      )}
    </>
  );
};

export default AddBtn;
