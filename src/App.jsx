import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Helmet } from "react-helmet-async";

import Home from "./User/pages/Home";
import UserAuth from "./User/pages/UserAuth";
import Privacy from "./User/pages/Privacy-Policy";
import TermsAndConditions from "./User/pages/TermsAndCondition";


// User pages (FIXED IMPORTS)
import UserAuth from "./User/pages/UserAuth";
import AboutUs from "./User/pages/AboutUs";
import Contributors from "./User/pages/Contributors";
import Contact from "./User/pages/Contacts";
import Dashboard from "./User/pages/Dashboard";
import Home from "./User/pages/Home";
import Privacy from "./User/pages/Privacy-Policy";
import TermsAndConditions from "./User/pages/TermsAndCondition";
import Help from "./User/pages/Help";
import MeetTheMakers from "./User/pages/MeetTheMakers";
import FAQ from "./User/pages/FAQ";
import CareerPage from "./User/pages/Career-Page";
import ServicePage from "./User/pages/Service-Page";
import Shipping from "./User/pages/Shipping";
import GiftCard from "./User/pages/Gift-Card";
import Payment_Policy from "./User/pages/Payment-Policy";
import Certification from "./User/pages/Certification";
import ReturnAndCancellation from "./User/pages/ReturnAndCancellation";
import EPR_Page from "./User/pages/EPRPage";

// Layouts & shared
import UserLayout from "./User/UserLayout";
import Team from "./User/components/Team/Team";
import Error from "./User/pages/404-Page/Error";
import PrivateRoute from "./PrivateRoute";

// Orders
import OrderDetails from "./User/pages/Order/Orderdetails";
import MyOrders from "./User/pages/Order/MyOrders";
import Checkout from "./User/pages/Order/Checkout";
import Cart from "./User/pages/Order/Cart";
import Wishlist from "./User/pages/Order/Wishlist";
import Confirmation from "./User/pages/Confirmation";
import Cancellation from "./User/pages/Cancellation";

// Dashboard extras
import DashboardOrders from "./User/pages/Dashboard/dashboard-order";
import DashboardCart from "./User/pages/Dashboard/dashboard-cart";
import DashboardWishlist from "./User/pages/Dashboard/dashboard-wishlist";
import NotificationPage from "./User/pages/Dashboard/NotificationPage";
import ProfilePage from "./User/pages/Dashboard/ProfilePage";

// Products
import ProductDetails from "./User/components/Products/ProductDetails";

// Latest in Market
import LatestInMarket from "./User/pages/Latest_in_the_Market";
import HandMadeSoaps from "./User/pages/Latest_in_the_Market/HandMadeSoaps";
import ArtSupplies from "./User/pages/Latest_in_the_Market/ArtSupplies";
import CeramicDinnerware from "./User/pages/Latest_in_the_Market/CeramicDinnerware";
import BambooProducts from "./User/pages/Latest_in_the_Market/BambooProducts";
import StorageBaskets from "./User/pages/Latest_in_the_Market/StorageBaskets";
import OrganicSoaps from "./User/pages/Latest_in_the_Market/OrganicSoaps";
import OrganicTea from "./User/pages/Latest_in_the_Market/OrganicTea";
import NaturalCosmetics from "./User/pages/Latest_in_the_Market/NaturalCosmetics";

// Popular Categories
import PopularCategories from "./User/pages/Popular_Categories";
import BeautyWellness from "./User/pages/Popular_Categories/Beauty-Wellness";
import BodyCare from "./User/pages/Popular_Categories/Body-Care";
import CustomizedGifts from "./User/pages/Popular_Categories/Customized-Gifts";
import FashionAccessories from "./User/pages/Popular_Categories/Fashion-Accessories";
import FoodBeverages from "./User/pages/Popular_Categories/Food-Beverages";
import FurnitureDecor from "./User/pages/Popular_Categories/Furniture-Decor";
import HealthSupplements from "./User/pages/Popular_Categories/Health-Supplements";
import PrintingStationery from "./User/pages/Popular_Categories/Printing-Stationery";

// Admin
import AdminVerificationPage from "./User/pages/Admin-Verification";
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Admin/Pages/AdminLogin";
import VigyForm from "./Admin/Pages/VigyForm";
import AdminPanel from "./Admin/Pages/AdminPanel";
import ProductForm from "./Admin/Pages/ProductForm";

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

          {/* Latest in Market */}
          <Route path="latestInMarket" element={<LatestInMarket />} />
          <Route path="latestInMarket/handMadeSoaps" element={<HandMadeSoaps />} />
          <Route path="latestInMarket/artSupplies" element={<ArtSupplies />} />
          <Route path="latestInMarket/ceramicDinnerware" element={<CeramicDinnerware />} />
          <Route path="latestInMarket/bambooProducts" element={<BambooProducts />} />
          <Route path="latestInMarket/storageBaskets" element={<StorageBaskets />} />
          <Route path="latestInMarket/organicSoaps" element={<OrganicSoaps />} />
          <Route path="latestInMarket/organicTea" element={<OrganicTea />} />
          <Route path="latestInMarket/naturalCosmetics" element={<NaturalCosmetics />} />

          {/* Popular Categories */}
          <Route path="popularCategories" element={<PopularCategories />} />
          <Route path="popularCategories/beautyWellness" element={<BeautyWellness />} />
          <Route path="popularCategories/bodyCare" element={<BodyCare />} />
          <Route path="popularCategories/customizedGifts" element={<CustomizedGifts />} />
          <Route path="popularCategories/fashionAccessories" element={<FashionAccessories />} />
          <Route path="popularCategories/foodBeverages" element={<FoodBeverages />} />
          <Route path="popularCategories/furnitureDecor" element={<FurnitureDecor />} />
          <Route path="popularCategories/healthSupplements" element={<HealthSupplements />} />
          <Route path="popularCategories/printingStationery" element={<PrintingStationery />} />

          {/* Static pages */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-and-condition" element={<TermsAndConditions />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="meet-the-makers" element={<MeetTheMakers />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="gift-card" element={<GiftCard />} />
          <Route path="payment-policy" element={<Payment_Policy />} />
          <Route path="return-and-cancellation" element={<ReturnAndCancellation />} />
          <Route path="epr-compliance" element={<EPR_Page />} />
          <Route path="epr" element={<Navigate to="/epr-compliance" replace />} />

          {/* Auth & orders */}
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirm" element={<Confirmation />} />
          <Route path="cancel" element={<Cancellation />} />
          <Route path="orderDetails" element={<OrderDetails />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="productDetails/:productId" element={<ProductDetails />} />

          {/* Private */}
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard-order" element={<DashboardOrders />} />
            <Route path="dashboard-cart" element={<DashboardCart />} />
            <Route path="dashboard-wishlist" element={<DashboardWishlist />} />
            <Route path="dashboard-notifications" element={<NotificationPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>


          <Route path="*" element={<Error />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="vigy-form" element={<VigyForm />} />
          <Route path="product-form" element={<ProductForm />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin-verification" element={<AdminVerificationPage />} />
      </Routes>
    </AuthProvider>
  );
}
