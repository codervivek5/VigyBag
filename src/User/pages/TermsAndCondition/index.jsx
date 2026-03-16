import React, { useEffect } from "react";
import "./terms.css";

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = "VigyBag | Terms & Conditions";
  }, []);

  return (
    <div className="bg-[#fff0e3ff] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <main className="leading-relaxed">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-2">
            VigyBag Terms & Conditions
          </h1>
          <p className="text-center text-sm mb-6">
            Last Updated: September 5, 2025
          </p>

          {/* Sections */}
          <section className="mb-6">
            <p>
              These Terms and Conditions govern your use of the VigyBag platform.
              By accessing or using our services, you agree to be bound by these
              terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              User Responsibilities
            </h2>
            <p>
              Users agree to provide accurate information, comply with all
              applicable laws, and refrain from misuse of the platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Account & Security
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Orders & Payments
            </h2>
            <p>
              All orders placed through VigyBag are subject to acceptance and
              availability. Payments must be completed through approved
              channels.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Limitation of Liability
            </h2>
            <p>
              VigyBag shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of the platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Governing Law
            </h2>
            <p>
              These terms shall be governed by and interpreted in accordance
              with the laws of India.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default TermsAndCondition;
export { default } from "./TermsAndCondition";
