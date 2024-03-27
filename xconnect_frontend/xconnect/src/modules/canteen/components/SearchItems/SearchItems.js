import CartBar from "../CartBar/CartBar";
import axiosInstance from "../../../../services/axios";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

const SearchItems = ({ search_value }) => {
  const [cartData, setCartData] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(new Set());
  const [searchData, setSearchData] = useState([]);
  const [IsEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("canteen/menu/", {
        params: {
          search: search_value,
        },
      })
      .then((res) => {
        console.log(res);
        setSearchData(res.data, "search data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search_value]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axiosInstance.get("canteen/cart/");
        console.log(response.data.menu_items);
        setIsEmpty(response.data.menu_items.length === 0);

        const d = {};
        response.data.menu_items.forEach((item) => {
          d[item.menu.id] = { quantity: item.quantity, item_id: item.id };
        });
        setCartData(d);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();

    window.addEventListener("cart_updated", function (event) {
      console.log("CartUpdated", event.detail);
      if (event.detail[1]) {
        setCartItemCount((prevItemCount) => {
          const updatedCartItems = new Set(prevItemCount);
          updatedCartItems.add(event.detail[0]);
          return updatedCartItems;
        });
        setIsEmpty(false);
      } else {
        setCartItemCount((prevItemCount) => {
          const updatedCartItems = new Set(prevItemCount);
          updatedCartItems.delete(event.detail[0]);
          return updatedCartItems;
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(cartItemCount, "kk");
    if (!cartItemCount.size) {
      setIsEmpty(true);
    }
  }, [cartItemCount]);

  return (
    <div className="container">
      {searchData.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.item_name}
          image={item.image}
          price={item.price}
          quantity={cartData[item.id]?.quantity || "Add"}
          item_id={cartData[item.id]?.item_id}
          status={item.status}
          search={true}
        />
      ))}
      <CartBar item_count={cartItemCount.size} display={!IsEmpty} />
    </div>
  );
};
export default SearchItems;
