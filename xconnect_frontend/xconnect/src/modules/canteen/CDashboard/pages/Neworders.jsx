// import { wrap } from "framer-motion";
import Pagehead from "../Components/pagehead/Pagehead";
import Neworder from "../Cards/Neworders/neworders";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../services/axios";
// import Neworder from "../components/cards/neworders";
// import '../index.css';

const names = [
  {
    name: "New orders",
  },
];

const Neworders = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    axiosInstance.get("canteen/order/").then((res) => {
      console.log(res.data);
      setOrderData(res.data);
    });
  }, []);
  return (
    <>
      <Pagehead names={names} />
      <div className="scroll-container-insideadmin">
        <div
          id="neworder-cards-neworders"
          className="neworders "
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {orderData.map((item) => (
            <div className="container-for-cards">
              <Neworder
                key={item.id}
                id={item.id}
                total={item.cart_id?.total}
                orderItems={item.cart_id?.menu_items}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Neworders;
