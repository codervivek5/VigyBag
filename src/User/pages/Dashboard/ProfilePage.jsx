import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside";
import copy from "../../../assets/copy.png";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./model.css";
import "./profile.css";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000/api/users";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    profile_picture: "",
  });

  const profile_picture =
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg";

  const username = localStorage.getItem("username") || "";

  const fetchUserDetails = () => {
    try {
      axios.get(API_URL + `/${username}`).then((res) => {
        console.log(res);
        setUser(res.data.user);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  console.log(user);
  // --- Deactivate and Delete modals remain as you wrote them ---
  const DeactivateAccount = () => (
    <Popup
      trigger={
        <button className="button text-blue-500 font-bold text-sm hover:cursor-pointer">
          Deactivate Account
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal p-4">
          {" "}
          <button className="close" onClick={close}>
            {" "}
            &times;{" "}
          </button>{" "}
          <div className="content">
            {" "}
            <h1 className="text-[14px] font-bold">
              {" "}
              When You <b>Deactivate</b> Your VigyBag Account{" "}
            </h1>{" "}
            <br />{" "}
            <ul className="text-xsm">
              {" "}
              <li>You are logged out of your VigyBag account.</li> <br />{" "}
              <li>Your public profile on VigyBag is no longer visible.</li>{" "}
              <br />{" "}
              <li>
                {" "}
                Your reviews/ratings are still visible, but your profile
                information is shown as ‘unavailable’ due to deactivation.{" "}
              </li>{" "}
              <br />{" "}
              <li>
                {" "}
                Your wishlist items are no longer accessible through the
                associated public hyperlink. The wishlist is shown as
                ‘unavailable’ due to deactivation.{" "}
              </li>{" "}
              <br />{" "}
              <li>
                {" "}
                You will be unsubscribed from receiving promotional emails from
                VigyBag.{" "}
              </li>{" "}
              <br />{" "}
              <li>
                {" "}
                Your account data is retained and can be restored if you choose
                to reactivate your account.{" "}
              </li>{" "}
            </ul>{" "}
            <br />{" "}
            <h1 className="text-[14px] font-bold">
              {" "}
              How Do I Reactivate My VigyBag Account?{" "}
            </h1>{" "}
            <p>Reactivation is easy.</p> <br />{" "}
            <ul>
              {" "}
              <li>
                {" "}
                Simply log in with your registered email ID or mobile number and
                the password used prior to deactivation. Your account data will
                be fully restored.{" "}
              </li>{" "}
              <br />{" "}
              <li>
                {" "}
                Default settings will be applied, and you will be subscribed to
                receive promotional emails from VigyBag.{" "}
              </li>{" "}
              <br />{" "}
            </ul>{" "}
            <p>
              {" "}
              VigyBag retains your account data so you can conveniently resume
              from where you left off if you decide to reactivate your account.{" "}
            </p>{" "}
            <p>
              {" "}
              <strong>Remember:</strong> Account reactivation can be done only
              on the desktop version.{" "}
            </p>{" "}
          </div>{" "}
          <div className="actions">
            {" "}
            <button
              className="button bg-blue-600 text-white p-4 font-bold rounded-md"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              {" "}
              CONFIRM DEACTIVATION{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}
    </Popup>
  );

  const DeleteAccount = () => (
    <Popup
      trigger={
        <button className="button text-red-600 font-bold text-sm">
          Delete Account
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal p-4">
          {" "}
          <button className="close" onClick={close}>
            {" "}
            &times;{" "}
          </button>{" "}
          <div className="content">
            {" "}
            <p className="text-xsm">
              {" "}
              Please note that once you choose to <b>delete</b> your account
              with VigyBag (“Platform”), your account will no longer be
              available to you and you will not be able to activate, restore, or
              use the account again.{" "}
            </p>{" "}
            <p className="text-xsm">
              {" "}
              In case you are not sure about deleting your account, you may
              instead deactivate your account.{" "}
            </p>{" "}
            <p className="text-xsm">
              {" "}
              When you deactivate your account, you are logged out of your
              account, your public profile on the Platform is no longer visible,
              your wishlist items are no longer accessible through the
              associated public hyperlink, and you will be unsubscribed from
              receiving promotional emails.{" "}
            </p>{" "}
            <h2 className="text-xsm font-bold">
              {" "}
              If you wish to proceed with an account deletion request, please
              ensure that you have read and understood the following:{" "}
            </h2>{" "}
            <ul className="text-xsm">
              {" "}
              <li>
                {" "}
                There are no pending orders, cancellations, returns, refunds, or
                other requests (“Transactions”). If there are pending
                Transactions, please raise your account deletion request once
                the Transactions are completed.{" "}
              </li>{" "}
              <li>
                {" "}
                If you hold any subscription or membership, you will lose all
                benefits and rewards associated with it immediately upon
                deletion of the account.{" "}
              </li>{" "}
              <li>
                {" "}
                You have exhausted or do not intend to use SuperCoins, Gift
                Cards, or any such reward points or balances associated with
                your account. Please note that once your account is deleted, you
                will not be able to access any such reward points.{" "}
              </li>{" "}
              <li>
                {" "}
                You will not be able to access or request to access order
                history, profile, wishlists, saved addresses, previous orders
                and invoices, saved or preferred payment methods, content,
                images, or use any of the products and services offered by the
                Platform immediately on deletion and will have to create a new
                account to use products and services offered by us.{" "}
              </li>{" "}
              <li>
                {" "}
                The Platform may choose to refuse deletion of your account in
                case you have any legal dispute, or grievances related to
                pending payments to your orders, shipments or deliveries, credit
                lines, etc.{" "}
              </li>{" "}
              <li>
                {" "}
                The Platform may retain certain data for legitimate reasons
                (towards enforcement of legal rights or regulatory compliance)
                such as security, fraud prevention, future abuse, and regulatory
                compliance including the exercise of legal rights or comply with
                legal orders under applicable laws.{" "}
              </li>{" "}
              <li>
                {" "}
                After your account is deleted, if you log into the Platform
                using the same phone number or email ID, a fresh new account
                will be created and your old account data will not be
                accessible.{" "}
              </li>{" "}
              <li>
                {" "}
                Please uninstall the VigyBag App after your account is deleted
                to stop receiving any notifications from VigyBag. Notifications
                are app-level settings and uninstalling the app is required to
                stop the notifications.{" "}
              </li>{" "}
            </ul>{" "}
            <p>
              {" "}
              You acknowledge that you have read our{" "}
              <a href="/terms">Terms of Use</a> and{" "}
              <a href="/privacy-policy">Privacy Policy</a>.{" "}
            </p>{" "}
            <p>
              {" "}
              <br /> <hr /> <br />{" "}
              <input type="checkbox" id="agree" name="agree" />I have read and
              agreed to the Terms and Conditions.{" "}
            </p>{" "}
            <h2>Please tell us why you’re leaving us</h2>{" "}
            <textarea id="feedback" name="feedback" rows="2" cols="50" />{" "}
          </div>{" "}
          <div className="actions">
            {" "}
            <button
              className="button bg-red-600 p-2 text-white text-sm rounded-md"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              {" "}
              Delete Account{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}
    </Popup>
  );

  const [couponVisibility, setCouponVisibility] = useState([false, false]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const copyText = (text) => {
    toast("Copied to Clipboard!");
    navigator.clipboard.writeText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user._id) return;

    try {
      const data = {
        name: user.name ?? "",
        email: user.email ?? "",
        phone: user.phone ?? "",
        gender: user.gender ?? "",
        profile_picture: user.profile_picture ?? "",
      };
      axios
        .put(API_URL + `/${user._id}`, user)
        .then((res) => {
          setUser((prev) => ({...prev, ...res.data.user}));
          toast.success(res.data?.message || "Profile updated");
        })
        .catch((err) => {
          toast.error(
            err.response?.data?.message || "Error while updating profile"
          );
        });
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  const handlePasswordChange = () => {
    toast("This feature will be available soon!");
  };

  const toggleCouponVisibility = (index) => {
    setCouponVisibility((prevVisibility) =>
      prevVisibility.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleProfilePicChange = async () => {
    const { value: imageUrl } = await Swal.fire({
      title: "Enter Image URL",
      input: "url",
      inputPlaceholder: "https://example.com/profile.jpg",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) return "You must enter a URL!";
      },
    });

    if (imageUrl) {
      setUser((prev) => ({ ...prev, profile_picture: imageUrl }));

      Swal.fire({
        icon: "success",
        title: "Profile Picture uploaded!",
        text: "Click save to update permanently!",
        timer: 2500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left (Profile Info) */}
        <div className="col-span-2 shadow-2xl p-4 w-full bg-green-50 rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-green-800">
            Personal Information
          </h1>

          {/* Profile Picture */}
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="relative w-32 h-32 mb-4 md:mb-0 md:mr-4 rounded-full border">
              <img
                src={user.profile_picture || profile_picture}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={handleProfilePicChange}
              className="text-white bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Change
            </button>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-bold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full md:w-[70%] border p-3"
                placeholder="Enter your name"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-lg font-bold text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="w-full md:w-[70%] border p-2"
              >
                <option value="" hidden>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-bold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full md:w-[70%] border p-3"
                placeholder="Enter your phone number"
                minLength={10}
                maxLength={10}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-bold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full md:w-[70%] border p-3"
                placeholder="Enter your email"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handlePasswordChange}
                className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-300"
              >
                Change/Update Password
              </button>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Save
              </button>
            </div>
          </form>

          {/* FAQs */}
          <div className="mt-8 space-y-6">
            <h1 className="font-bold text-black text-lg">FAQs</h1>
            <div>
              <h2 className="font-bold text-gray-700 text-sm">
                What happens when I update my email address (or mobile number)?
              </h2>
              <p className="text-sm">
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-700 text-sm">
                When will my VigyBag account be updated with the new email
                address (or mobile number)?
              </h2>
              <p className="text-sm">
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-700 text-sm">
                What happens to my existing VigyBag account when I update my
                email address (or mobile number)?
              </h2>
              <p className="text-sm">
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-700 text-sm">
                Does my Seller account get affected when I update my email
                address?
              </h2>
              <p className="text-sm">
                VigyBag has a 'single sign-on' policy. Any changes will reflect
                in your Seller account also.
              </p>
            </div>
          </div>

          {/* Deactivate/Delete Buttons */}
          <div className="mt-10 flex flex-col gap-4">
            <DeactivateAccount />
            <DeleteAccount />
          </div>
        </div>

        {/* Right (Coins & Coupons) */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-xl font-bold text-zinc-800">Coins : 100 🪙</h2>
          <div className="p-4 shadow-lg rounded-md bg-green-50">
            <h2 className="text-xl font-bold text-zinc-800">My Coupons :</h2>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  readOnly
                  value={couponVisibility[index] ? "ABC123" : "******"}
                  className="w-32 border rounded-md p-2 mr-3 text-sm bg-green-100"
                />
                <img
                  onClick={() => copyText("ABC123")}
                  src={copy}
                  alt="coupon"
                  className="w-5 h-5 cursor-pointer mr-3"
                />
                <button
                  onClick={() => toggleCouponVisibility(index)}
                  className="bg-pink-300 px-3 py-1 rounded-md text-sm"
                >
                  {couponVisibility[index] ? "Hide" : "Show"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
