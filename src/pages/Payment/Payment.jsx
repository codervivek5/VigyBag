import React from 'react';
import ProgressBar from '../../components/Order/ProgressBar';
import OrderSummary from '../../components/Order/OrderSummary';

const PaymentPage = () => {
  return (
    <div className="flex flex-col items-center bg-[#fff0e3ff] p-4">
      <div className="w-full max-w-6xl">
        <ProgressBar style={{ width: '60vw' }} />

        <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Payment Method Selection */}
          <div className="w-full lg:w-1/2 bg-[#fff0e3ff] shadow-lg rounded-lg p-6 mb-6 lg:mb-0">
            <h2 className="text-lg font-medium mb-4">Select a payment method</h2>
            <div className="border p-4 rounded-lg">
              <div className="mb-4">
                <input type="radio" id="cod" name="payment-method" className="mr-2" />
                <label htmlFor="cod" className="font-medium">
                  Cash on Delivery / Pay on Delivery
                </label>
                <p className="text-sm text-gray-600">Cash and UPI accepted. Know more.</p>
              </div>

              <div className="mb-4">
                <input type="radio" id="upi" name="payment-method" className="mr-2" />
                <label htmlFor="upi" className="font-medium">
                  UPI (Pay via any app)
                </label>
                <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm and more</p>
              </div>

              <div className="mb-4">
                <input type="radio" id="card" name="payment-method" className="mr-2" />
                <label htmlFor="card" className="font-medium">
                  Credit or debit card
                </label>
              </div>

              <div className="mb-4">
                <input type="radio" id="netbanking" name="payment-method" className="mr-2" />
                <label htmlFor="netbanking" className="font-medium">
                  Net Banking
                </label>
              </div>
            </div>

            <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg w-full mt-4">
              Proceed to payment
            </button>
          </div>

          {/* Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
