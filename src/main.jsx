import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// DONOT EDIT THIS FILE ONLY USE APP.JSX AND MUST FOLLOW THE CODE CUIDLELINES
// Components
import Team from "./components/Team/Team";
import ProductDetails from "./components/Products/ProductDetails";

// Order related pages
import Cart from "./pages/Order/Cart";
import CartEmpty from "./pages/Order/CartEmpty";
import Checkout from "./pages/Order/Checkout";
import MyOrders from "./pages/Order/MyOrders";
import OrderDetails from "./pages/Order/Orderdetails";
import Confirmation from "./pages/Confirmation/Confirmation";
import Cancellation from "./pages/Cancellation/Cancellation";

// Other pages
import Payment from "./pages/Payment/Payment";
import ReturnAndCancellation from "./pages/ReturnAndCancellation/returnAndCancellation";
import EPRPage from "./pages/EPRPage/EPR_Page";

// Product pages
import BambooProducts from "./pages/Latest_in_the_Market/BambooProducts";

// Popular Categories
import PopularCategories from "./pages/Popular_Categories/Popular_Categories";
import BeautyWellness from "./pages/Popular_Categories/Beauty-Wellness";
import BodyCare from "./pages/Popular_Categories/Body-Care";
import CustomizedGifts from "./pages/Popular_Categories/Customized-Gifts";
import FashionAccessories from "./pages/Popular_Categories/Fashion-Accessories";
import FoodBeverages from "./pages/Popular_Categories/Food-Beverages";
import FurnitureDecor from "./pages/Popular_Categories/Furniture-Decor";
import HealthSupplements from "./pages/Popular_Categories/Health-Supplements";
import PrintingStationery from "./pages/Popular_Categories/Printing-Stationery";

// Admin
import AdminLogin from "./Admin/AdminLogin";
import LoggedInContent from "./Admin/LoggedInContent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      {/* Admin routes */}
      <Route path="admin" element={<AdminLogin />} />
      <Route path="loggedin" element={<LoggedInContent />} />

      {/* Popular Categories */}
      <Route path="popularCategories" element={<PopularCategories />} />
      <Route
        path="popularCategories/beautyWellness"
        element={<BeautyWellness />}
      />
      <Route path="popularCategories/bodyCare" element={<BodyCare />} />
      <Route
        path="popularCategories/customizedGifts"
        element={<CustomizedGifts />}
      />
      <Route
        path="popularCategories/fashionAccessories"
        element={<FashionAccessories />}
      />
      <Route
        path="popularCategories/foodBeverages"
        element={<FoodBeverages />}
      />
      <Route
        path="popularCategories/furnitureDecor"
        element={<FurnitureDecor />}
      />
      <Route
        path="popularCategories/healthSupplements"
        element={<HealthSupplements />}
      />
      <Route
        path="popularCategories/printingStationery"
        element={<PrintingStationery />}
      />

      {/* Other routes */}
      <Route path="about" element={<AboutUs />} />
      <Route path="help" element={<Help />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="team" element={<Team />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="confirm" element={<Confirmation />} />
      <Route path="cancel" element={<Cancellation />} />
      <Route path="orderDetails" element={<OrderDetails />} />
      <Route path="myOrders" element={<MyOrders />} />
      <Route path="bambooProducts" element={<BambooProducts />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="cart" element={<Cart />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="payment" element={<Payment />} />
      <Route path="returnAndCancellation" element={<ReturnAndCancellation />} />
      <Route path="EPR_Page" element={<EPRPage />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="CartEmpty" element={<CartEmpty />} />

      {/* 404 route */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
