import Pagehead from "../Components/pagehead/Pagehead";
import Cancelledorder from "../Cards/Cancellorders/cancelledorders";
// import '../index.css';

const Cancelledorders = () => {
  return (
    <>
      <Pagehead names="Cancelled orders" />
      <div className="scroll-container-insideadmin">
        <div
          id="cancelledorder-cards-cancelledorders"
          className="cancelledorders"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className="container-for-cards">
            <Cancelledorder />
          </div>
          <div className="container-for-cards">
            <Cancelledorder />
          </div>
          <div className="container-for-cards">
            <Cancelledorder />
          </div>
          <div className="container-for-cards">
            <Cancelledorder />
          </div>
          <div className="container-for-cards">
            <Cancelledorder />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cancelledorders;
