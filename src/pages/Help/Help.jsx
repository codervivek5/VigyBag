import React, { useState } from 'react';
import './Help.css';
import boxImage from './box.gif';
import refundImage from './refund.gif';
import basketImage from './basket.gif';
import walletImage from './wallet.gif';
import locationImage from './location.gif';
import accountImage from './account.gif';

const Help = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };
 
    const questions = [
      {
        question: 'What is the return policy?',
        answer: 'Our return policy allows for returns within 30 days of purchase. Items must be in their original condition.',
      },
      {
        question: 'Can I purchase items in bulk?',
        answer: 'Yes, we offer bulk purchase discounts. Please contact our sales team for more information.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Visa, MasterCard, American Express, and PayPal.',
      },{
        question: 'How do I track my order?',
        answer: 'You can track your order using the tracking number provided in your order confirmation email.',    
      }
    ];
 
  
  
const [expanded, setExpanded] = useState({});
  
    const handleToggle = (index) => {
  setExpanded((prevExpanded) => ({ ...prevExpanded, [index]: !prevExpanded[index] }));
 };
 

  return (
    <div>
      <h1
      style={{
        color:'#3d784aff'
      }} 
       >Hello, What can we help you with?</h1>
      <div
      style={{
        borderBottom: '2px solid black',
        width: '100%',
        margin: '20px 0',
      }}
    />     <div className="container">
        <div className="card">
 <img src={boxImage} alt="Card Image" />
        <div className="card-content">
            <h2>Returns and Refunds</h2>
            <p>Return or exchange items</p>
            <p>Print return mailing labels</p>
          </div>
        </div>
        <div className="card">
<img src={refundImage} alt="Card Image" />
          <div className="card-content">
            <h2>Returns and Refunds</h2>
            <p>Return or exchange items</p>
            <p>Print return mailing labels</p>
          </div>
        </div>
        <div className="card">
          <img src={basketImage} alt="Card Image" />
          <div className="card-content">
            <h2>Product Delivery</h2>
            <p>Update your addresses</p>
            <p>Add address, landmark details</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img src={walletImage} alt="Card Image" />
          <div className="card-content">
            <h2>Payment Settings</h2>
            <p>Add or edit payment methods</p>
            <p>Change expired debit or credit card</p>
          </div>
        </div>



        <div className="card">
          <img src={locationImage} alt="Card Image" />
          <div className="card-content">
            <h2>Manage Addresses</h2>
            <p>Update your addresses</p>
            <p>Add address, landmark details</p>
          </div>
        </div>
        <div className="card">
          <img src={accountImage} alt="Card Image" />
          <div className="card-content">
            <h2>Account Setting</h2>
            <p>Update your addresses</p>
            <p>Add address, landmark details</p>
          </div>
        </div>
      </div>

      <div className="faq">
      <h2>Most Frequently Queries</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
<h3 onClick={() => handleToggle(index)} aria-expanded={expanded[index]}>
              {question.question}
              <span style={{ float: 'right' }}>
                {expanded[index] ? (
                  <span aria-hidden="true">&#9660;</span> // down arrow
                ) : (
                  <span aria-hidden="true">&#9658;</span> // right arrow
                )}
              </span>
            </h3>
            {expanded[index] && <p>{question.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const faqData = [
  {
    question: 'What is the return policy?',
    answer: 'Our return policy allows for returns within 30 days of purchase. Items must be in their original condition.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order using the tracking number provided in your order confirmation email.',
  },
  {
    question: 'Can I purchase items in bulk?',
    answer: 'Yes, we offer bulk purchase discounts. Please contact our sales team for more information.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, MasterCard, American Express, and PayPal.',
  },
];

export default Help;
