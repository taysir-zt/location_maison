import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer text-dark text-center text-lg-start py-4">
      <div className="container-footer">
        <div className="row">
          {/* Section Contact Us */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="contact text-uppercase mb-3">
            <a href='/contact' className="contact-link">Contact Us</a>              </h5>
            <p>Ask us anything! </p>
             <p> We’re here to answer any questions you have.</p>
            <p>Email: info@mysite.com</p>
          </div>

          {/* Section Follow Us */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="link d-flex justify-content-center">
              <a href="#!" className="text-dark mx-2"><FaTripadvisor size={24} /></a>
              <a href="#!" className="text-dark mx-2"><FaFacebookF size={24} /></a>
              <a href="#!" className="text-dark mx-2"><FaInstagram size={24} /></a>
            </div>
          </div>

          {/* Section Subscribe */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="text-uppercase mb-3">Subscribe for Updates & Offers</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="subscribeCheckbox"
                  required
                />
                <label className="form-check-label" htmlFor="subscribeCheckbox">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <button type="submit" className="btn btn-dark">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3">
        © 2024 by Tayssir and Aya. Created with Lotus.com
      </div>
    </footer>
  );
}

export default Footer;
