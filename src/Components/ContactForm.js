import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS details
    const serviceID = "service_hjrhmlp"; // Replace with your EmailJS service ID
    const templateID = "template_a0o8yzv"; // Replace with your EmailJS template ID
    const userID = "NzHXrtHxxa_CebQNh"; // Replace with your EmailJS user ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Failed to send email", error);
          alert("Failed to send email");
        }
      );

    // Clear the form
    setFormData({ name: "", gmail: "", mobile: "", message: "" });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
