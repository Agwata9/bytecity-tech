import React, { useState } from "react";
import ContactUsHeader from "../components/ContactUsHeader";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div>
      <ContactUsHeader />
      <div className="container py-5">
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-lg-6 mb-4">
            <h5 className="text-warning mb-4 display-6">Contact Us</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fs-5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  className="form-control p-3 fs-5"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fs-5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  className="form-control p-3 fs-5"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fs-5">
                  Your Message
                </label>
                <textarea
                  className="form-control p-3 fs-5"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 py-3 fs-5 hover-effect"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="col-lg-6 mb-4">
            <h5 className="text-warning mb-4 display-6">Get In Touch</h5>
            <p className="fs-5">
              <strong>Address:</strong> Tom Mboya Street, Nairobi City, KE
            </p>
            <p className="fs-5">
              <strong>Phone:</strong> +254 777 439 049
            </p>
            <p className="fs-5">
              <strong>Email:</strong> info@bytecity.tech
            </p>

            {/* Social Media Links */}
            <div className="d-flex justify-content-start">
              <a
                href="#"
                className="text-dark me-3 fs-5 hover-effect"
                title="Facebook"
              >
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: "1.8rem" }}
                ></i>
              </a>
              <a
                href="#"
                className="text-dark me-3 fs-5 hover-effect"
                title="Twitter"
              >
                <i
                  className="bi bi-twitter"
                  style={{ fontSize: "1.8rem" }}
                ></i>
              </a>
              <a
                href="#"
                className="text-dark me-3 fs-5 hover-effect"
                title="LinkedIn"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.8rem" }}
                ></i>
              </a>
              <a
                href="#"
                className="text-dark fs-5 hover-effect"
                title="WhatsApp"
              >
                <i
                  className="bi bi-whatsapp"
                  style={{ fontSize: "1.8rem" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
