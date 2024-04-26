import Pagehead from "../Components/pagehead/Pagehead";
import Inventorycard from "../Cards/Inventory/inventorycard";
import axiosInstance from "../../../../services/axios";
import { useEffect, useState } from "react";

const Inventory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("canteen/menu/", { params: { all: true } })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div className="mx-5">
      <Pagehead names="Inventory" />
      <div className="inventory-items">
        <Inventorycard name={"item"} avail_quantity={"Qauntity available"} />
        {data.map((item) => (
          <Inventorycard
            name={item.item_name}
            avail_quantity={item.avail_quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
