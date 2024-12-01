import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Ajouter votre logique d'envoi du formulaire ici
  };

  return (
    <div className="containerc">
      <div className="contact__wrapper shadow-lg mt-4">
        <div className="row no-gutters">
          {/* Section d'informations de contact */}
          <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
  <h3 className="color--white mb-5">Get in Touch</h3>

  <ul className="contact-info__list list-style--none">
    <li className="mb-4 pl-4">
      <FaEnvelope className="icon" /> Lotus@gmail.com
    </li>
    <li className="mb-4 pl-4">
      <FaPhone className="icon" /> (+216)99-706-812
    </li>
    <li className="mb-4 pl-4">
      <FaMapMarkerAlt className="icon" /> Tunisie.
      <br /> Mahdia Zone Touristique
      <br /> Mahida 
      <div className="mt-3">
        <a
          href="https://www.google.com/maps/place/Mahdia/@35.5027451,11.0428224,15.12z/data=!4m6!3m5!1s0x130223f5186c6cf9:0x675f7b734dffa5bb!8m2!3d35.5024461!4d11.045721!16zL20vMDQ0cnBo?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link link--right-icon text-white"
        >
          Get directions <FaDirections className="link__icon" />
        </a>
      </div>
    </li>
  </ul>
</div>

          {/* Section du formulaire de contact */}
          <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Lotus"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Lotus"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Lotus@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="(+216)99-706-812"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="message">How can we help?</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Hi there, I would like to..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <button type="submit" className="btn btn-primary gradient-brand-color-contact btn-contact-large-contact">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
