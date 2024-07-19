import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// User components
import Login from "./User/pages/Login/Login";
import AboutUs from "./User/pages/About/AboutUs";
import Contact from "./User/pages/Contacts/Contact";
import Dashboard from "./User/pages/Dashboard/Dashboard";
import Home from "./User/pages/Home/Home";
import UserLayout from "./User/UserLayout";
import Team from "./User/components/Team/Team";
import Confirmation from "./User/pages/Confirmation/Confirmation";
import Cancellation from "./User/pages/Cancellation/Cancellation";
import OrderDetails from "./User/pages/Order/Orderdetails";
import MyOrders from "./User/pages/Order/MyOrders";
import Dashboard_Orders from "./User/pages/Dashboard/dashboard_order";
import Dashboard_Cart from "./User/pages/Dashboard/dashboard_cart";
import Checkout from "./User/pages/Order/Checkout";
import Cart from "./User/pages/Order/Cart";
import Error from "./User/pages/404-Page/Error";
import ProductDetails from "./User/components/Products/ProductDetails";
import Help from "./User/pages/Help/Help";
import Privacy from "./User/pages/Privacy-Policy/Privacy";
import Payment from "./User/pages/Payment/Payment";
import ReturnAndCancellation from "./User/pages/ReturnAndCancellation/returnAndCancellation";
import EPRPage from "./User/pages/EPRPage/EPR_Page";
import Signup from "./User/pages/Signup/Signup";
import FAQ from "./User/pages/FAQ/Faq";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "./User/pages/TermsAndCondition/TermsAndCondition";
import FeedbackButton from "./User/components/FeedbackForm/FeedBtn";
import FeedbackModal from "./User/components/FeedbackForm/Feedback";
import AdminVerificationPage from "./User/pages/Admin-Verification/Admin.jsx";
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Admin/Pages/AdminLogin";
// import AdminDashboard from "./Admin/pages/AdminDashboard";
import VigyForm from "./Admin/VigyForm";
import AdminPanel from "./Admin/Pages/AdminPanel";
import ProductForm from "./Admin/Pages/ProductForm";
import Certifications from "./User/pages/Certifications/Certifications";

// Latest In Market
import LatestInMarket from "./User/pages/Latest_in_the_Market/LatestInMarket";
import HandMadeSoaps from "./User/pages/Latest_in_the_Market/HandMadeSoaps";
import ArtSupplies from "./User/pages/Latest_in_the_Market/ArtSupplies";
import CeramicDinnerware from "./User/pages/Latest_in_the_Market/CeramicDinnerware";
import BambooProducts from "./User/pages/Latest_in_the_Market/BambooProducts";
import StorageBaskets from "./User/pages/Latest_in_the_Market/StorageBaskets";
import OrganicSoaps from "./User/pages/Latest_in_the_Market/OrganicSoaps";
import OrganicTea from "./User/pages/Latest_in_the_Market/OrganicTea";
import NaturalCosmetics from "./User/pages/Latest_in_the_Market/NaturalCosmetics";
import ForgotPasswordForm from "./User/pages/ForgotPasswordForm";

// Popular Categories
import PopularCategories from "./User/pages/Popular_Categories/Popular_Categories";
import BeautyWellness from "./User/pages/Popular_Categories/Beauty-Wellness";
import BodyCare from "./User/pages/Popular_Categories/Body-Care";
import CustomizedGifts from "./User/pages/Popular_Categories/Customized-Gifts";
import FashionAccessories from "./User/pages/Popular_Categories/Fashion-Accessories";
import FoodBeverages from "./User/pages/Popular_Categories/Food-Beverages";
import FurnitureDecor from "./User/pages/Popular_Categories/Furniture-Decor";
import HealthSupplements from "./User/pages/Popular_Categories/Health-Supplements";
import PrintingStationery from "./User/pages/Popular_Categories/Printing-Stationery";

import { Helmet } from "react-helmet";

export default function App() {
  return (
    <AuthProvider>
      <Helmet>
        <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/f910a06e-f7d4-4424-8642-e3cdffe933b5/webchat/v2/config.js"></script>
      </Helmet>

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* Latest in the Market */}
          <Route path="latestInMarket" element={<LatestInMarket />} />
          <Route
            path="latestInMarket/handMadeSoaps"
            element={<HandMadeSoaps />}
          />
          <Route path="latestInMarket/artSupplies" element={<ArtSupplies />} />
          <Route
            path="latestInMarket/ceramicDinnerware"
            element={<CeramicDinnerware />}
          />
          <Route
            path="latestInMarket/bambooProducts"
            element={<BambooProducts />}
          />
          <Route
            path="latestInMarket/storageBaskets"
            element={<StorageBaskets />}
          />
          <Route
            path="latestInMarket/organicSoaps"
            element={<OrganicSoaps />}
          />
          <Route path="latestInMarket/organicTea" element={<OrganicTea />} />
          <Route
            path="latestInMarket/naturalCosmetics"
            element={<NaturalCosmetics />}
          />

          {/* PopularCategories */}
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

          <Route path="about" element={<AboutUs />} />
          <Route path="help" element={<Help />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="forgot-password"
            element={<ForgotPasswordForm></ForgotPasswordForm>}
          />

          <Route path="team" element={<Team />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="termsAndCondition" element={<TermsAndConditions />} />
          <Route path="feedback" element={<FeedbackModal />} />
          <Route
            path="returnAndCancellation"
            element={<ReturnAndCancellation />}
          />
          <Route path="EPR_Page" element={<EPRPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="confirm" element={<Confirmation />} />
            <Route
              path="admin-verification"
              element={<AdminVerificationPage></AdminVerificationPage>}
            ></Route>
            <Route path="cancel" element={<Cancellation />} />
            <Route path="orderDetails" element={<OrderDetails />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="productDetails" element={<ProductDetails />} />
            <Route path="payment" element={<Payment />} />
            <Route path="dashboard_order" element={<Dashboard_Orders />} />
            <Route path="dashboard_cart" element={<Dashboard_Cart />} />
            <Route path="certificate" element={<Certifications />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
          <Route path="vigy_form" element={<VigyForm />} />
          <Route path="product_form" element={<ProductForm />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </AuthProvider>
  );
}
