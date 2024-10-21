import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';
import img1 from '../assets/Images/z1.jpg';
import img2 from '../assets/Images/z2.jpg';
import img3 from '../assets/Images/z3.jpg';
import img4 from '../assets/Images/z4.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message || formData.message.length > 30)
      newErrors.message = 'Message is required and must be under 30 words';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const emailData = {
        name: formData.fullName,   // Map fullName to name
        mobile: formData.mobile,   // Mobile remains the same
        gmail: formData.email,     // Map email to gmail
        message: formData.message, // Message remains the same
      };
  
      emailjs
        .send(
          'service_hjrhmlp', // Replace with your EmailJS service ID
          'template_a0o8yzv', // Replace with your EmailJS template ID
          emailData,          // Send the mapped emailData
          'NzHXrtHxxa_CebQNh' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log('Email successfully sent!', result.text);
            alert('Message sent successfully!');
            setFormData({
              fullName: '',
              mobile: '',
              email: '',
              message: '',
            });
          },
          (error) => {
            console.error('Error sending email:', error.text);
            alert('Error sending message. Please try again later.');
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };
  
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Supertrade & Securities is a trusted firm specializing in investment
          solutions and financial advisory. Our focus includes wealth management, portfolio diversification,
          and comprehensive brokerage services for both individuals and businesses.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <h3>Email</h3>
            <FaEnvelope className="icon" />
            <p>Owner Email: <a href="mailto:investment@supertradesecurities.com">investment@supertradesecurities.com</a></p>
            <p>Senior Email: <a href="mailto:investment@supertradesecurities.com">investment@supertradesecurities.com</a></p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <FaPhone className="icon" />
            <p>Owner No: <a href="tel:+9039397884">+91 6232207552</a></p>
            <p>Senior No: <a href="tel:+8518097884">+91 6232207552</a></p>
          </div>
        </div>
        <div className="form-map-container">
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}

              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
           
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Max 30 words"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit">Submit</button>
            </form>
          </div>
          <div className="map-and-images-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '20px' }}>
              <img src={img1} alt="Location Image 1" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
              <img src={img2} alt="Location Image 2" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
              <img src={img3} alt="Location Image 3" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
              <img src={img4} alt="Location Image 4" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
            </div>
            <div className="google-map" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.540709777669!2d75.89422940000001!3d22.745306499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd001a30d369%3A0x742041ef37cf933c!2sSupertrade%20securities!5e0!3m2!1sen!2sin!4v1729236383930!5m2!1sen!2sin"
                height={500}
                width={700}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
