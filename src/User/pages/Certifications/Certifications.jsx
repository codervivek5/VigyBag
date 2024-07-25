import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Certificate from "../../../assets/images/Certificate.png";
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

function Certification() {
  const [githubUsername, setGithubUsername] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [downloadFormat, setDownloadFormat] = useState("png");
  const [isVerified, setIsVerified] = useState(false);
  const certificateRef = useRef(null);

  const checkContribution = async (contributorUsername) => {
    const username = "codervivek5";
    const repo = "VigyBag";
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${repo}/contributors?page=${page}&per_page=100`
        );

        if (response.data.length < 100) {
          hasMorePages = false;
        }

        const contributor = response.data.find(
          (c) => c.login.toLowerCase() === contributorUsername.toLowerCase()
        );

        if (contributor) {
          setUserId(contributor.id.toString());
          return true;
        }

        page++;
      } catch (error) {
        console.error("Error checking contribution:", error);
        throw new Error("Failed to check contribution");
      }
    }
    return false;
  };

  const fetchGitHubName = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data.name || username;
    } catch (error) {
      console.error("Error fetching GitHub name:", error);
      return username;
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    setIsVerified(false);

    try {
      const hasContributed = await checkContribution(githubUsername);

      if (hasContributed) {
        const fetchedName = await fetchGitHubName(githubUsername);
        setName(fetchedName);
        setIsVerified(true);
      } else {
        setError(
          `The GitHub user ${githubUsername} has not contributed to the VigyBag repository.`
        );
      }
    } catch (error) {
      setError(
        "An error occurred while verifying the contribution. Please try again."
      );
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      setCertificate({ name, githubUsername, userId });

      // Trigger confetti
      const end = Date.now() + (15 * 1000);
      const colors = ['#ff0000', '#ffd700', '#008000'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());

      // Show SweetAlert after generating the certificate
      Swal.fire({
        title: 'Certificate Generated!',
        text: `Congratulations ${name}! Your contribution certificate has been successfully generated.`,
        icon: 'success',
        confirmButtonText: 'Great!',
        confirmButtonColor: '#28a745',
        background: '#f8f9fa',
      }).then((result) => {
        if (result.isConfirmed) {
          // Optionally, you can add any action here after the user clicks "Great!"
          console.log("User acknowledged certificate generation");
        }
      });
    }
  };

  const downloadAsPNG = () => {
    html2canvas(certificateRef.current, {
      scale: 4,
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    });
  };

  const downloadAsPDF = () => {
    html2canvas(certificateRef.current, {
      scale: 10,
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height,
        "",
        "FAST"
      );
      pdf.save("certificate.pdf");
    });
  };

  const handleDownload = () => {
    if (downloadFormat === "png") {
      downloadAsPNG();
    } else {
      downloadAsPDF();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 mt-40 mb-11">
        <h1 className="text-2xl font-bold mb-4">Contribution Certificate</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="GitHub Username"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              className="flex-grow p-2 border rounded-l"
              required
            />
            <button
              type="button"
              onClick={handleVerify}
              className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
              disabled={loading}>
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
            readOnly={isVerified}
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            disabled={!isVerified || loading}>
            Generate Certificate
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {certificate && (
          <>
            <div className="mt-4 relative" ref={certificateRef}>
              <img src={Certificate} alt="Certificate" className="w-full" />
              <div
                className="absolute text-center w-full"
                style={{
                  top: "48.5%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "black",
                  textShadow: "1px 1px 2px white",
                  fontFamily: "Copperplate, Papyrus, fantasy",
                }}>
                {certificate.name}
              </div>
              <div
                className="absolute text-center w-full"
                style={{
                  bottom: "3%",
                  left: "80%",
                  transform: "translateX(-50%)",
                  fontSize: "5px",
                  color: "black",
                  fontFamily: "Arial, sans-serif",
                }}>
                ID: {certificate.userId}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <select
                value={downloadFormat}
                onChange={(e) => setDownloadFormat(e.target.value)}
                className="p-2 border rounded">
                <option value="png">PNG</option>
                <option value="pdf">PDF</option>
              </select>
              <button
                onClick={handleDownload}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                Download as {downloadFormat.toUpperCase()}
              </button>
            </div>
          </>
        )}
      </div>
      <style>
        {`
          .swal2-container {
            background-size: cover !important;
          }
        `}
      </style>
    </div>
  );
}

export default Certification;
