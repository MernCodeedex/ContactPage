import React, { useState } from 'react'
import '../Components/ContactPage.css'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
      };

  return (
     <div className="container">
      <div className="form-container">
        <div className="left-container">
          <div className="left-inner-container">
            <h2>Let's Chat</h2>
            <p>Whether you have a question, want to start a project or simply want to connect.</p>
            <br />
            <p>Feel free to send me a message in the contact form</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-inner-container">
            <form onSubmit={handleSubmit}>
              <h2 className="lg-view">Contact</h2>
              <h2 className="sm-view">Let's Chat</h2>
              <p>* Required</p>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
