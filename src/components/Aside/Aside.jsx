import React from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Buttons/Logout";

const Aside = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("isloggedin");
        alert("Logout Successful.");
        navigate("/login");
      } else {
        // User cancelled logout
        return;
      }
    } catch (error) {
      alert("Logout failed. Please try again later.");
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <aside
        className="w-64 bg-[#2d4031] text-white flex flex-col fixed top-0 "
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
            <span className="text-white">Vivek Prajapati</span>
          </div>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          <a
            href="#"
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
          </a>
          <a
            href="MyOrders"
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
          </a>
          <a
            href="Cart"
            className="flex items-center space-x-2 p-2 hover:bg-green-700  rounded-md relative">
            <lord-icon
              style={{
                height: "20px",
                width: "20px",
              }}
              src="https://cdn.lordicon.com/pbrgppbb.json"
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span>Cart</span>
            <span className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
              5
            </span>
          </a>
          <a
            href="#"
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
          </a>
          <a
            href="#"
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
          </a>
          <a
            href="Help"
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
          </a>
          <a
            href="Contact"
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
          </a>
          <a className="flex items-center space-x-2 p-2 relative justify-center">
            <Logout />
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
