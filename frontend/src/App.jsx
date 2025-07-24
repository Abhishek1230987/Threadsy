import React, { useContext } from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import { ShopContext } from "./context/ShopContext";

const App = () => {
  const { token } = useContext(ShopContext);

  return (
    <>
      <div className="bg-offwhite">
        <ToastContainer />
        <Navbar />
        <SearchBar />

        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Public route */}
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productid" element={<Product />} />

            {/* Protected routes below */}
            <Route
              path="/orders"
              element={token ? <Orders /> : <Navigate to="/login" />}
            />
            <Route
              path="/cart"
              element={token ? <Cart /> : <Navigate to="/login" />}
            />
            <Route
              path="/placeorder"
              element={token ? <PlaceOrder /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
