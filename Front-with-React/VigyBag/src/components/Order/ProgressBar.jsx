import React, { useState } from 'react';
import tick from '../../assets/tick.png';
import bTick from '../../assets/b-tick.png';
import map from '../../assets/map.png';
import payment from '../../assets/payment.png';
import { Link } from 'react-router-dom';

const steps = [
  { label: 'Cart', icon: tick, status: 'completed', link: '/cart' },
  { label: 'Check-Out', icon: map, status: 'active', link: '/checkout' },
  { label: 'Payment', icon: payment, status: '', link: '/payment' },
  { label: 'Confirmation', icon: bTick, status: '', link: '/confirm' },
];

const ProgressBar = ({ currentStep, goToStep }) => {
  return (
    <div className="flex flex-col items-center mt-1" style={{ width: '100%' }}>
      <div className="relative flex mb-5 " style={{ width: '100%', backgroundColor: '#fff0e3ff',padding:'13px 13px'}}>
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-1 bg-gray-300"></div>
        <div
          className="absolute top-1/2 left-0 h-1 bg-green-500 transition-all duration-1000"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            {index !== steps.length - 1 && (
              <div
                className={`absolute  transform -translate-y-1/2 w-full h-1 
                    ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'} 
                transition-all duration-1000`}
                style={{ left: '50%', marginLeft: '-50%',bottom:"4.3vh" }}
              ></div>
            )}
            <div
              className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full 
                ${index <= currentStep ? 'bg-[#fff0e3ff]' : index === currentStep + 1 ? 'bg-yellow-500' : 'bg-gray-300'}
                 transition-all duration-1000 cursor-pointer`}
              onClick={() => goToStep(index)}
              style={{border:'2px solid grey',top:'1vh'}}
            >
              <Link to={step.link}>
                <img src={step.icon} alt={step.label} className="w-6 h-6" />
              </Link>
            </div>
            <p
              className={`mt-2 font-semibold ${index <= currentStep ? 'text-green-500' : 'text-gray-400'} transition-all duration-1000 cursor-pointer`}
              onClick={() => goToStep(index)}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function Step() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="App">
      <ProgressBar currentStep={currentStep} goToStep={goToStep} />
    </div>
  );
}

export default Step;
