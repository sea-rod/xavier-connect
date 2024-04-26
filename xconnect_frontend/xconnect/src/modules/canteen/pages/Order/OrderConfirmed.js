import { useEffect,useState } from "react";
import OrderCard from "../../components/orderCard/orderCard";
import axiosInstance from "../../../../services/axios";

const OrderConfirmed = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("canteen/order/")
      .then((res) => {
        console.log(res.data);
        setOrderData(res.data);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);
  return (
    <div
      className="vh-100 d-flex flex-column justify-content-between"
      id="canteen-cart"
    >
      <div>
        <h1 className="text-center">Your Orders</h1>
        <div className="py-2 px-2">
          {orderData.map((item) => (
            <OrderCard
              key={item.id}
              id={item.id}
              total={item.cart_id?.total}
              orderItems={item.cart_id?.menu_items}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrderConfirmed;
