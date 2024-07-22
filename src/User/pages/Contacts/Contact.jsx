import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto py-5 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center lg:text-left mt-[12vh]">Contact us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-100 p-4 transition-all duration-300 hover:bg-gray-200">
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope text-xl mr-2"></i>
                <span className="text-lg font-semibold">Email</span>
              </div>
              <span>vigybag@gmail.com</span>
            </div>
            <div className="bg-gray-100 p-4 transition-all duration-300 hover:bg-gray-200">
              <div className="flex items-center mb-2">
                <i className="fas fa-phone text-xl mr-2"></i>
                <span className="text-lg font-semibold">Phone</span>
              </div>
              <span>+91 1234567890</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 mb-4 transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center mb-2">
              <i className="fas fa-location-pin text-xl mr-2"></i>
              <span className="text-lg font-semibold">Office location</span>
            </div>
            <span>Kanpur, Uttar Pradesh 208025</span>
          </div>
          <div className="w-full h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.080107370284!2d80.28175744899262!3d26.47924928052742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3811bdf58679%3A0x9518b04e61143882!2sKanpur%2C%20Uttar%20Pradesh%20208025!5e0!3m2!1sen!2sin!4v1721622007177!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 shadow-md"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Leave a message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fname" className="block mb-2">First Name</label>
                <input type="text" id="fname" className="w-full p-2 border rounded" placeholder="Enter your first name" />
              </div>
              <div>
                <label htmlFor="lname" className="block mb-2">Last Name</label>
                <input type="text" id="lname" className="w-full p-2 border rounded" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" placeholder="name@example.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">Phone</label>
              <input type="tel" id="phone" className="w-full p-2 border rounded" placeholder="+91888888888" />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block mb-2">Country</label>
              <select id="country" className="w-full p-2 border rounded">
                <option value="1">India</option>
                <option value="2">Non Indian</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows="3" className="w-full p-2 border rounded" placeholder='Enter your issues you face'></textarea>
            </div>
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mb-[5vh]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
