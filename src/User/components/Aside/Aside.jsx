import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate, useLocation } from "react-router-dom";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const noOfItems = cartItems.reduce((a, b) => a + b.quantity, 0);

  return (
    <Link
      to="/dashboard_cart"
      className="flex items-center space-x-2 p-2 hover:bg-green-700  rounded-md relative">
      <lord-icon
        style={{
          height: "20px",
          width: "20px",
        }}
        src="https://cdn.lordicon.com/pbrgppbb.json"
        trigger="hover"
        colors="primary:#ffffff"></lord-icon>
      Cart
      <div className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
        {noOfItems}
      </div>
    </Link>
  );
};

const WishlistIcon = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const noOfItem = wishlistItems.reduce((a, b) => a + (b.quantity ?? 1), 0);

  return (
    <Link
      to="/dashboard_wishlist"
      className="flex items-center space-x-2 p-2 hover:bg-green-700 rounded-md relative">
      <lord-icon
        style={{
          height: "20px",
          width: "20px",
        }}
        src="https://cdn.lordicon.com/ulnswmkk.json"
        trigger="hover"
        colors="primary:#ffffff"></lord-icon>
      <span>Wishlist</span>
      <div className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
        {noOfItem}
      </div>
    </Link>
  );
};

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    // const email = params.get("email");
    const name = params.get("name");

    if (name) {
      // localStorage.setItem("useremail", email);
      localStorage.setItem("username", name);
    }
  }, [location]);

  const userEmail = localStorage.getItem("useremail");
  const username = localStorage.getItem("username") || "Admin";

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("username");
        navigate("/auth");

        Swal.fire({
          title: "Logout successfully!",
          text: "Visit Again to VigyBag!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
      }
    });
  };

  return (
    <>
      <aside
        className="w-64 bg-[#2d4031] text-white flex flex-col fixed top-0 mt-20 index-"
        style={{ position: "sticky" }}>
        <div className="flex items-center space-x-4 mt-10 ml-5">
          <div className="h-10 bg-green-700 flex items-center justify-center p-8 rounded-lg gap-2">
            <lord-icon
              style={{
                height: "40px",
                width: "40px",
              }}
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span className="text-white">{username}</span>
          </div>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          <Link
            to="#"
            className="flex items-center space-x-2 p-2 hover:bg-green-700 rounded-md">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>My Profile</span>
          </Link>

          <Link
            to="/dashboard_order"
            className="flex items-center space-x-2 p-2 hover:bg-green-700  rounded-md">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/xljvqlng.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>Orders</span>
          </Link>

          <CartIcon />

          {/* <Link
            to="/dashboard_wishlist"
            className="flex items-center space-x-2 p-2 hover:bg-green-700 rounded-md">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/ulnswmkk.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>Wishlist</span>
          </Link> */}
          <WishlistIcon />

          <Link
            to="#"
            className="flex items-center space-x-2 p-2 hover:bg-green-700 rounded-md relative">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/lznlxwtc.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>Notifications</span>
            <span className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
              2
            </span>
          </Link>

          <Link
            to="/Help"
            className="flex items-center space-x-2 p-2 hover:bg-green-700 rounded-md">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/ojnjgkun.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>Help</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-2 p-2 hover:bg-green-700 rounded-md">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>Contact Us</span>
          </Link>

          <div className="flex items-center space-x-2 p-2 relative justify-center">
            <button
              type="button"
              onClick={handleLogout}
              className="mt-10 bg-green-700"
              style={{
                padding: "12px 30px",
                borderRadius: "8px",
                border: "1px solid #98bf8cff",
              }}>
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
