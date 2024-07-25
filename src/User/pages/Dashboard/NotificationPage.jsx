import React, { useState, useEffect } from 'react';
import Aside from '../../components/Aside/Aside'; // Adjust the path as necessary
import SearchBar from "../../components/Dashboard/SearchBar"; // If you want a search bar
import Header from "../../components/Dashboard/Header"; // If you have a header component

const cardClass = "p-4 bg-white rounded-lg shadow-md";
const buttonBgClass = "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out";

const NotificationItem = ({ notification }) => (
  <div className={`${cardClass} mb-4`} style={{ border: "1px solid black" }}>
    <h2 className="text-xl font-semibold">{notification.title}</h2>
    <p>{notification.body}</p>
  </div>
);

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        {/* Notifications Section */}
        <div className="container mx-auto p-4 w-full max-w-7xl mt-4">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
          <ul className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <p>No notifications available.</p>
            ) : (
              filteredNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))
            )}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default NotificationPage;
