import React, { useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Certificate from "../../assets/images/Certificate.png";

function Certification() {
  const [githubUsername, setGithubUsername] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [downloadFormat, setDownloadFormat] = useState('png');
  const certificateRef = useRef(null);

  const checkContribution = async (contributorUsername) => {
    const username = 'codervivek5';
    const repo = 'VigyBag';
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
        
        const contributor = response.data.find(c => 
          c.login.toLowerCase() === contributorUsername.toLowerCase()
        );
        
        if (contributor) {
          return true;
        }
        
        page++;
      } catch (error) {
        console.error('Error checking contribution:', error);
        throw new Error('Failed to check contribution');
      }
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCertificate(null);

    try {
      const hasContributed = await checkContribution(githubUsername);

      if (hasContributed) {
        setCertificate({ name, githubUsername });
      } else {
        setError(`The GitHub user ${githubUsername} has not contributed to the VigyBag repository.`);
      }
    } catch (error) {
      setError('An error occurred while verifying the contribution. Please try again.');
      console.error('Error:', error);
    }

    setLoading(false);
  };

  const downloadAsPNG = () => {
    html2canvas(certificateRef.current, {
      scale: 4, // Increase scale for better quality
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png', 1.0); // Use maximum quality
      link.click();
    });
  };

  const downloadAsPDF = () => {
    html2canvas(certificateRef.current, {
      scale: 10, // Increase scale for better quality
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 1.0); // Use maximum quality
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height, '', 'FAST');
      pdf.save("certificate.pdf");
    });
  };

  const handleDownload = () => {
    if (downloadFormat === 'png') {
      downloadAsPNG();
    } else {
      downloadAsPDF();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Contribution Certificate</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="GitHub Username"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Generate Certificate'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {certificate && (
          <>
            <div className="mt-4 relative" ref={certificateRef}>
              <img 
                src={Certificate} 
                alt="Certificate" 
                className="w-full"
              />
              <div 
                className="absolute text-center w-full"
                style={{
                  top: '48.5%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: 'black',
                  textShadow: '1px 1px 2px white',
                  fontFamily:'Copperplate, Papyrus, fantasy',
                }}
              >
                {certificate.name}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <select
                value={downloadFormat}
                onChange={(e) => setDownloadFormat(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="png">PNG</option>
                <option value="pdf">PDF</option>
              </select>
              <button
                onClick={handleDownload}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Download as {downloadFormat.toUpperCase()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Certification;