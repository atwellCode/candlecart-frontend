import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin,searchQuery , setSearchQuery, getCartCount, getCartAmount } = useAppContext();
  const logout = async () => {
    setUser(null);
    navigate("/");
  };
  useEffect(() => {
    if(searchQuery.length > 0){
      navigate('/products')
    }
  },[searchQuery])
  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all z-50">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-9" src={assets.logo} alt="dummyLogoColored" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/" href="#">
            Home
          </NavLink>
          <NavLink to="/products" href="#">
            Product
          </NavLink>
          <NavLink to="/contact" href="#">
            Contact
          </NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
            onChange={(e)=>setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img
              src={assets.search_icon}
              alt="search-icon"
              className="h-4 w-4"
            />
          </div>

          <div className="relative cursor-pointer">
            <img src={assets.nav_cart_icon} 
            onClick={() => navigate('/cart')}
            alt="card-icon" className="w-6" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {getCartCount()}
            </button>
          </div>

          {!user ? (
            <button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
              Login
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 cursor-pointer"
                alt="Profile"
              />

              <ul className="absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-32 rounded-md text-sm z-40 hidden group-hover:flex flex-col">
                <li
                  onClick={() => navigate("/myOrder")}
                  className="px-4 py-2 hover:bg-primary/20 cursor-pointer transition"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="px-4 py-2 hover:bg-primary/20 cursor-pointer transition"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
          >
            <NavLink to="/" onClick={() => setOpen(false)} className="block">
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="block"
            >
              Products
            </NavLink>
            {user && (
              <NavLink
                to="/orders"
                onClick={() => setOpen(false)}
                className="block"
              >
                Order
              </NavLink>
            )}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block"
            >
              Contact
            </NavLink>
            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
