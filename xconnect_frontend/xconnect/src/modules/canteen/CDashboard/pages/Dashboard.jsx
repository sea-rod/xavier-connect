import Pagehead from "../Components/pagehead/Pagehead";
import Barchart from "../Charts/Barchart";
import Linechart from "../Charts/Linechart";
import { useState, useEffect } from "react";
import Neworder from "../Cards/Neworders/neworders";
import Cancelledorders from "../Cards/Cancellorders/cancelledorders";
import axiosInstance from "../../../../services/axios";
import "./dashboard.css";
// import '../index.css';

const Dashboard = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    axiosInstance.get("canteen/order/").then((res) => {
      console.log(res.data);
      setOrderData(res.data);
    });
  }, []);

  return (
    <>
      <Pagehead names="Dashboard" />
      <div className="scroll-container-insideadmin">
        <div
          id="chart-containers"
          className="dashboard justify-content-center"
          style={{ display: "flex" }}
        >
          <Barchart />
          <Linechart />
        </div>
        {/* <Pagehead name={names[1].name} /> */}
        <div
          id="order-cards-dashboard"
          className="dashboard"
          style={{ margin: "2rem" }}
        >
          <div id="neworder-cards-dashboard">
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
      </div>
    </>
  );
};

export default Dashboard;
