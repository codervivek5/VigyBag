import React, { useEffect } from "react";
import "./privacy.css";

// Lightweight loader for html2pdf.js via CDN
const loadHtml2Pdf = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.html2pdf) {
      resolve(window.html2pdf);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/html2pdf.js@0.12.0/dist/html2pdf.bundle.min.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve(window.html2pdf);
    script.onerror = () =>
      reject(new Error("Failed to load html2pdf.js"));
    document.body.appendChild(script);
  });
};

const Privacy = () => {
  useEffect(() => {
    document.title = "VigyBag | Privacy Policy";
  }, []);

  const generatePdf = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) return;

    const html2pdf = await loadHtml2Pdf();

    const opt = {
      margin: [20, 30, 30, 30],
      filename: "privacy_policy.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="bg-[#fff0e3ff] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <main id="pdf-content" className="leading-relaxed">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-2">
            VigyBag Privacy Policy
          </h1>
          <p className="text-center text-sm mb-6">
            Last Updated: September 5, 2025
          </p>

          {/* Sections */}
          <section className="mb-6">
            <p>
              We value the trust you place in us and recognize the importance of
              secure transactions and information privacy. This Privacy Policy
              describes how VigyBag Pvt. Ltd. and its affiliates (“VigyBag, we,
              our, us”) collect, use, share, or otherwise process your personal
              data through the VigyBag platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Collection of Your Information
            </h2>
            <p>
              When you use our Platform, we collect and store information
              provided by you. You may choose not to provide certain data,
              however some features may not be accessible.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Use of Your Information
            </h2>
            <p>
              We use your information to process orders, deliver services,
              improve user experience, resolve disputes, and comply with legal
              obligations.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Cookies
            </h2>
            <p>
              We use cookies to analyze traffic, personalize content, and
              enhance security. You can control cookies through your browser
              settings.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Sharing of Personal Data
            </h2>
            <p>
              We may share your data with partners and authorities when required
              for legal, operational, or service-related reasons.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Security Precautions
            </h2>
            <p>
              We maintain reasonable safeguards to protect your personal data
              from unauthorized access.
            </p>
          </section>

          <section className="mb-6 page-break-avoid">
            <h2 className="text-xl font-semibold text-[#4e6d2e] mb-2">
              Grievance Officer
            </h2>
            <ul className="list-none ml-0">
              <li><b>Name:</b> Vivek Prajapati</li>
              <li>
                <b>Email:</b>{" "}
                <a
                  href="mailto:grievanceofficer@vigybag.com"
                  className="text-green-700"
                >
                  grievanceofficer@vigybag.com
                </a>
              </li>
              <li><b>Time:</b> Mon–Fri (9:00–18:00)</li>
              <li><b>Address:</b> Kanpur, Uttar Pradesh</li>
            </ul>
          </section>

        </main>

        {/* Download Button */}
        <button
          onClick={generatePdf}
          className="mt-8 mx-auto block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
        >
          Download Privacy Policy (PDF)
        </button>
      </div>
    </div>
  );
};

export default Privacy;
export { default } from "./Privacy";
