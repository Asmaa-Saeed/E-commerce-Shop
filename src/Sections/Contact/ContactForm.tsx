
    import React, { useState } from 'react';

    const ContactForm: React.FC = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        mobile: '',
        message: ''
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = () => {
        console.log('Form Data:', formData);
        alert('Form submitted! Check console for details.');
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-2xl font-bold text-center mb-4">
            <span className="text-teal-600 tracking-wide">Contact Us Now!</span>
            </h1>
            <p className='text-sm -mt-2 mb-10 tracking-wide'>Fill The Form Below So We Can Get To Know You And Your Needs Better.</p>
          
          <div className="w-full max-w-4xl flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border  border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border  border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border  border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border  border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 h-32"
            />
            <button
              onClick={handleSubmit}
              className="w-32 bg-teal-600 text-white p-2 rounded hover:bg-teal-700 cursor-pointer transition"
            >
              SUBMIT
            </button>
          </div>
        </div>
      );
    };


  export default ContactForm;