import { useState } from "react";
import { assets, dummyAddress } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Cart = () => {
  const [showAddress, setShowAddress] = useState(false);
  const {navigate,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    getCartAmount,
    getCartCount} = useAppContext();
const [cartArray, setCartArray] = useState([]);
const [addresses, setAddresses] = useState(dummyAddress);
const [showAddress, setShowAddress] = useState([]);


  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-12">
      {/* Cart Items */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-semibold mb-6">
          Shopping Cart{" "}
          <span className="text-sm text-primary ml-2">({products.length} Items)</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3 border-b border-gray-300">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] items-center text-sm md:text-base font-medium pt-4 border-b border-gray-200 pb-4"
          >
            <div className="flex items-center gap-4 md:gap-6 ">
              <div className="w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden ">
                <img
                  className="object-cover w-full h-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div>
                <p className="font-semibold text-black mb-1">{product.name}</p>
                <p className="text-gray-500 text-sm">Size: {product.size}</p>
                <div className="flex items-center text-sm gap-2">
                  <span>Qty:</span>
                  <select className="border border-gray-300 rounded px-2 py-1 outline-none">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <p className="text-center font-semibold text-gray-700">
              ${product.offerPrice * product.quantity}
            </p>

            <div className="flex justify-center">
              <button className="hover:text-red-500 transition">
                <img
                  className="w-4 md:w-5"
                  src={assets.remove_icon}
                  alt="Remove item"
                />
              </button>
            </div>
          </div>
        ))}

        <button className="group cursor-pointer py-3 px-6 flex items-center gap-2 text-primary font-medium mt-8 hover:bg-primary/10 transition">
          <img className="w-4 md:w-5" src={assets.arrow_right_icon_colored} alt="Arrow icon" />
          Continue Shopping
        </button>
      </div>

      {/* Order Summary */}
      <div className="max-w-sm w-full bg-gray-50 p-5 border border-gray-300 rounded">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <hr className="border-gray-300 mb-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <div className="relative mt-2 flex justify-between items-start">
            <p className="text-gray-500 text-sm">No address found</p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-primary hover:underline text-sm"
            >
              Change
            </button>

            {showAddress && (
              <div className="absolute top-10 left-0 w-full bg-white border border-gray-300 text-sm shadow-md z-10 rounded">
                <p
                  onClick={() => setShowAddress(false)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  New York, USA
                </p>
                <p
                  onClick={() => setShowAddress(false)}
                  className="p-2 text-center text-primary hover:bg-primary/10 cursor-pointer"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
          <select className="w-full border border-gray-300 px-3 py-2 mt-2 rounded outline-none bg-white text-sm">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-300" />

        <div className="text-gray-600 mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span>$750</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (2%)</span>
            <span>$15</span>
          </div>
          <div className="flex justify-between text-base font-semibold mt-4">
            <span>Total Amount:</span>
            <span>$765</span>
          </div>
        </div>

        <button className="w-full py-3 mt-6 bg-primary text-white font-medium hover:bg-primary/90 transition rounded">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
