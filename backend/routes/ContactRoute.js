require('dotenv').config(); //load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, message } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // SERVER email
        pass: process.env.EMAIL_PASS, // EMAIL password
      },
    });

    // Setup email data
    let mailOptions = {
      from: '"VigyBag" <${process.env.EMAIL_USER}>',
      to: process.env.EMAIL_TO, 
      subject: 'New Contact Form Submission',
      html: `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact Number:</b> ${contactNumber}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).send('Error sending email.');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const { urlencoded } = require('express');
const { json } = require('react-router-dom');
const { send } = require('vite');
