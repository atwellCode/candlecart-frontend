import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {
  const adminPath = useLocation().pathname.includes("admin");
  const { showUserLogin } = useAppContext();
  return (
    <>

      {adminPath ? null : <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />
      <div className={`${adminPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
