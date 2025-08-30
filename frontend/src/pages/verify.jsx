import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const navigate = useNavigate();
  const { token, setCartItem, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!token) return;

        const response = await axios.post(
          backendUrl + "/api/order/verifyStripe", 
          { success, orderId },
          { headers: { token } }
        );

        if (response.data.success) {
          setCartItem({});
          navigate("/orders");
        } else {
          navigate("/cart");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    verifyPayment();
  }, [token, success, orderId, backendUrl, navigate, setCartItem]);

  return <div></div>;
};

export default Verify;
