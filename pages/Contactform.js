// pages/contact.js

import Header1 from '@/components/Header1';
import { useState } from 'react';

export default function Contactform() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to your backend or handle it as needed
    console.log(formData);
    // You can add your own logic here to send the form data
    // For simplicity, we're just logging it to the console
  };

  return (
    <div>
    <div className="container">
    <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
      <style jsx>{`
        .container {
          margin-top:10px;
          max-width: 600px;
          display:flex;
          justify-content:center;
          flex-direction:column;
          height:700px;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        h1 {
          text-align: center;
          text-align: center;
          color: #333;
          font-size:40px;
          margin:10px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
            margin-bottom:10px;
        }
        textarea {
          resize: vertical;
        }
        button {
          display: block;
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
    </div>
  );
}