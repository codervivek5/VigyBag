import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../Admin/components/RegisterAdmin/InputField';
import SelectField from '../Admin/components/RegisterAdmin/SelectField';
import FileInput from '../Admin/components/RegisterAdmin/FileInput';

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal' },
    { id: 'contact', label: 'Contact' },
    { id: 'business', label: 'Business' },
    { id: 'banking', label: 'Banking' },
    { id: 'verification', label: 'Verification' },
    { id: 'additional', label: 'Additional' },
  ];

  const handleTabChange = (direction) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    let newIndex;

    if (direction === 'next') {
      newIndex = Math.min(currentIndex + 1, tabs.length - 1);
      if (newIndex !== currentIndex) {
        const saveDetails = window.confirm("Do you want to save your details before moving to the next tab?");
        if (saveDetails) {
          // Here you would typically save the data
          console.log("Saving data...");
        }
      }
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setActiveTab(tabs[newIndex].id);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <>
            <InputField label="Full Name" placeholder="Enter your full name" required />
            <InputField label="Date of Birth" type="date" required />
            <SelectField 
              label="Gender" 
              options={[
                { value: '', label: 'Select gender (optional)' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' }
              ]} 
            />
            <FileInput label="Profile Picture" accept="image/*" />
          </>
        );
      case 'contact':
        return (
          <>
            <InputField label="Email Address" type="email" placeholder="Enter your email" required />
            <InputField label="Phone Number" type="tel" placeholder="Enter your phone number" required />
            <InputField label="Physical Address" placeholder="Enter your address" required />
          </>
        );
      case 'business':
        return (
          <>
            <InputField label="Business Name" placeholder="Enter business name" />
            <InputField label="Business Address" placeholder="Enter business address" />
            <SelectField 
              label="Type of Business" 
              options={[
                { value: '', label: 'Select business type' },
                { value: 'sole', label: 'Sole Proprietorship' },
                { value: 'partnership', label: 'Partnership' },
                { value: 'llc', label: 'LLC' }
              ]} 
            />
            <InputField label="Business Registration Number" placeholder="Enter registration number" />
            <InputField label="Tax Identification Number" placeholder="Enter TIN" />
            <InputField label="Category of Products Sold" placeholder="Enter product categories" required />
          </>
        );
      case 'banking':
        return (
          <>
            <InputField label="Bank Account Name" placeholder="Enter account name" required />
            <InputField label="Bank Account Number" placeholder="Enter account number" required />
            <InputField label="Bank Name" placeholder="Enter bank name" required />
            <InputField label="Bank Branch" placeholder="Enter bank branch" required />
            <InputField label="IFSC Code" placeholder="Enter IFSC code" required />
          </>
        );
      case 'verification':
        return (
          <>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Verification Documents <span className="text-red-500 text-sm">(only 50kb max, .pdf, .jpg, .jpeg, .png)</span>
            </h2>
            <FileInput 
              label="Government-issued ID (e.g., Passport, Driver's License)" 
              accept=".pdf,.jpg,.jpeg,.png" 
              required 
            />
            <FileInput 
              label="Pan Card" 
              accept=".pdf,.jpg,.jpeg,.png" 
              required 
            />
            <FileInput 
              label="Business License (if applicable)" 
              accept=".pdf,.jpg,.jpeg,.png" 
            />
            <FileInput 
              label="Proof of Address (e.g., Utility Bill, Bank Statement, Aadhaar card)" 
              accept=".pdf,.jpg,.jpeg,.png" 
              required 
            />
          </>
        );
      case 'additional':
        return (
          <>
            <InputField label="Referral Code" placeholder="Enter referral code (optional)" />
            <InputField label="Promotional Code" placeholder="Enter promotional code (optional)" />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className='bg-[#fff5edff]'>
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-1 mb-3">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Registration Form</h1>
      
      <div className="mb-6 overflow-x-auto">
        <div className="flex border-b whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {renderTabContent()}

        {activeTab === 'additional' && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Terms and Conditions</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required />
                <span className="ml-2 text-sm text-gray-700">I agree to the <Link to="/termsAndCondition" className="text-blue-500 hover:underline">terms and conditions</Link></span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required />
                <span className="ml-2 text-sm text-gray-700">I agree to the <Link to="/privacy" className="text-blue-500 hover:underline">privacy policy</Link></span>
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button 
            type="button" 
            onClick={() => handleTabChange('previous')}
            className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out shadow-md"
            disabled={activeTab === tabs[0].id}
          >
            Previous
          </button>
          {activeTab !== tabs[tabs.length - 1].id ? (
            <button 
              type="button"
              onClick={() => handleTabChange('next')}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-md"
            >
              Next
            </button>
          ) : (
            <button 
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-md"
            >
              Submit Registration
            </button>
          )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;