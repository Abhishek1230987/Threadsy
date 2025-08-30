import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        {
          headers: { token },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 ">
      <div className="text-2xl">
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>

      <div>
        {orderData && orderData.length > 0 ? (
          orderData.map((item, itemIndex) => (
            <div key={itemIndex} className="py-4 border-b text-gray-700">
              {/* Main content container with proper alignment */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Left section: Image and Product Details */}
                <div className="flex items-start gap-6 text-sm flex-1">
                  <img
                    className="w-16 sm:w-20 object-cover rounded"
                    src={
                      item.images && item.images[0]
                        ? item.images[0]
                        : "/placeholder.jpg"
                    }
                    alt={item.name || "Product"}
                  />
                  <div className="flex-1">
                    <p className="sm:text-base font-medium">
                      {item.name || "Product Name"}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                      <p className="text-lg">
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="mt-1">
                      Date :
                      <span className="text-gray-400 ml-2">
                        {new Date(item.date).toDateString()}
                      </span>
                    </p>
                    <p className="mt-1">
                      Payment :
                      <span className="text-gray-400 ml-2">
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Center section: Order Status */}
                <div className="flex items-center justify-center md:justify-start gap-2 md:w-40">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base font-medium">
                    {item.status}
                  </p>
                </div>

                {/* Right section: Track Order Button */}
                <div className="flex justify-end md:w-32">
                  <button
                    className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors"
                    style={{ borderColor: "#cccac2" }}
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
