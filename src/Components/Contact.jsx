import React, { useState } from 'react'
import "../Components/Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
      };
  return (
    <div className="form-main">
    <div className="main-wrapper">
      <h2 className="form-head">Contact Form</h2>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-card">
          <input
            className="form-input"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="fullName">Full Name</label>
        </div>

        <div className="form-card">
          <input
            className="form-input"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="email">Email</label>
        </div>

        <div className="form-card">
          <input
            className="form-input"
            type="number"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
        </div>

        <div className="form-card">
          <textarea
            className="form-textarea"
            maxLength="420"
            rows="3"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <label className="form-textarea-label" htmlFor="address">Message</label>
        </div>
        <div className="btn-wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact
