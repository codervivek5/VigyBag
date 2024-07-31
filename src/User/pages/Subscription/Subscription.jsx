import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const SubscriptionManagementPage = () => {
  // Sample data
  const subscriptions = [
    {
      id: 1,
      product: 'Monthly Coffee Subscription',
      status: 'Active',
      nextBilling: 'August 15, 2024',
      amount: '$30.00'
    },
    {
      id: 2,
      product: 'Annual Gym Membership',
      status: 'Active',
      nextBilling: 'July 29, 2025',
      amount: '$300.00'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-6 sm:mb-8 mt-[8vh]">Subscription Management</h1>
        <hr className='border-2 border-indigo-500 w-1/2 mx-auto mb-6 sm:mb-10' />

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Your Subscriptions</h2>
          <div className="space-y-4 sm:space-y-6">
            {subscriptions.map(sub => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white to-blue-50 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">{sub.product}</h3>
                <p className="text-gray-700 mt-1 sm:mt-2"><strong>Status:</strong> {sub.status}</p>
                <p className="text-gray-700 mt-1 sm:mt-2"><strong>Next Billing:</strong> {sub.nextBilling}</p>
                <p className="text-gray-700 mt-1 sm:mt-2"><strong>Amount:</strong> {sub.amount}</p>
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">Modify</button>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">Cancel</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Payment Details</h2>
          <div className="bg-gradient-to-r from-white to-blue-50 p-4 sm:p-6 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-4">
              Update your payment details to ensure uninterrupted service. Use the form below to update or add new payment information.
            </p>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="•••• •••• •••• ••••"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-gray-800 font-semibold mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-800 font-semibold mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="•••"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300">Update Payment</button>
            </form>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default SubscriptionManagementPage;
