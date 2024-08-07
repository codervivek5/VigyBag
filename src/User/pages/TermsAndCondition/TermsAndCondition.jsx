import React, { useEffect } from "react";
import "./terms.css";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "VigyBag | Terms and Conditions";

    const updateLastUpdatedDate = () => {
      const dateElement = document.getElementById("last-updated-date");
      if (!dateElement) {
        console.error("Element with ID 'last-updated-date' not found.");
        return;
      }
      const now = new Date();
      const day = now.getDate();
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const month = monthNames[now.getMonth()]; // Get the full month name
      const year = now.getFullYear();
      dateElement.textContent = `${month} ${day}, ${year}`; // Fixed template literal
    };

    const updateWeekly = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
      const timeUntilNextUpdate = (7 - dayOfWeek) * 24 * 60 * 60 * 1000; // Time until next Sunday
      updateLastUpdatedDate();
      setTimeout(updateWeekly, timeUntilNextUpdate);
    };

    updateWeekly();
  }, []);

  return (
    <div className="privacy-policy">
      <div className="containerprivacy">
        <h1
          className="h1"
          style={{ textDecoration: "underline", marginTop: "94px" }}>
          Terms and Conditions
        </h1>
        <hr />

        <div className="Lastupdate">
            Last updated: <span id="last-updated-date"></span>
  </div>

        <h2 style={{ color: "#333" }}>Introduction</h2>
        <p>
          Welcome to VigyBag. By accessing or using our website, you agree to
          comply with and be bound by these Terms and Conditions. If you do not
          agree, please do not use our website.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Services Overview</h2>
        <p>
          VigyBag offers an online platform for the sale and purchase of various
          products. We provide users with an easy and convenient shopping
          experience.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Eligibility</h2>
        <p>
          To use our services, you must be at least 18 years old. By using our
          website, you represent and warrant that you meet this eligibility
          requirement.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Account and Registration</h2>
        <p>
          To access certain features of our website, you must register for an
          account. You are responsible for maintaining the confidentiality of
          your account information, including your password. You agree to accept
          responsibility for all activities that occur under your account.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Privacy Policy</h2>
        <p>
          Please review our Privacy Policy to understand how we collect, use,
          and protect your personal information.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>User Conduct and Obligations</h2>
        <p>
          You agree to use our website only for lawful purposes and in
          accordance with these Terms and Conditions. You must not use our site
          in any way that breaches any applicable local, national, or
          international law or regulation.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Prohibited Activities</h2>
        <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
          <li>Using the site for any unlawful purposes.</li>
          <li>Impersonating any person or entity.</li>
          <li>Harming minors in any way.</li>
          <li>Transmitting any harmful code or data.</li>
          <li>Violating any intellectual property rights.</li>
        </ul>
        <br />
        <h2 style={{ color: "#333" }}>Intellectual Property Rights</h2>
        <p>
          All content on our website, including text, graphics, logos, images,
          and software, is the property of VigyBag or its content suppliers. You
          may not use any of this content without our express written
          permission.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Third-Party Links and Services</h2>
        <p>
          Our website may contain links to third-party websites or services that
          are not owned or controlled by VigyBag. We have no control over, and
          assume no responsibility for, the content, privacy policies, or
          practices of any third-party websites or services.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Limitation of Liability</h2>
        <p>
          In no event shall VigyBag be liable for any indirect, incidental,
          special, consequential, or punitive damages, including but not limited
          to, loss of profits, data, use, goodwill, or other intangible losses,
          resulting from (a) your use or inability to use the service; (b) any
          unauthorized access to or use of our servers and/or any personal
          information stored therein.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless VigyBag and its affiliates,
          officers, directors, employees, and agents from and against any
          claims, liabilities, damages, losses, and expenses, including
          reasonable attorney's fees, arising out of or in any way connected
          with your access to or use of the service.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account and access
          to our website without notice for conduct that we believe, in our sole
          discretion, is in violation of these Terms and Conditions or is
          harmful to our interests or another user.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Governing Law and Dispute Resolution</h2>
        <p>
          These terms and any action related thereto will be governed by the
          laws of Kanpur, UP without regard to its conflict of laws provisions.
          Any disputes arising from or relating to these terms shall be resolved
          by binding arbitration in India.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Changes to the Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Any changes will be effective immediately upon posting on our website.
          Your continued use of the service following the posting of changes
          constitutes your acceptance of such changes.
        </p>
        <br />
        <h2 style={{ color: "#333" }}>Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at Kanpur, Uttar Pradesh for more details please fill
          contact detail here{" "}
          <a className="a" href="Contact" target="_blank">
            Contact
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
