import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/laxmilogo.webp";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <img src={logo} alt="Laxmi Group of Hotels" className="footer-logo" />
          <p className="footer-description">
            Where every shoreline tells a story and every
            mountain holds a secret. Experience India’s most
            captivating destinations through the warmth of
            Laxmi hospitality.
          </p>

          <div className="social-links social-icons">
            <a
              href="https://www.facebook.com/share/1D5wDpUGs8/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-btn facebook"
              title="Follow us on Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/laxmigroupof_hotels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-btn instagram"
              title="Follow us on Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/tanishq-jaiswal-361024387"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-btn linkedin"
              title="Connect with us on LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com/@laxmigroupofhotels-q9e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-btn youtube"
              title="Subscribe to our YouTube Channel"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* OUR PROPERTIES */}
        <div className="footer-col">
          <h4>OUR PROPERTIES</h4>
          <ul>
            <li>
              <Link to="/sea-resort">Sea Resort, New Digha</Link>
            </li>
            <li>
              <Link to="/hotel-grand-sea">Hotel Grand Sea, Puri</Link>
            </li>
            <li>
              <Link to="/hotel-utpala">Hotel Utpala, Old Digha</Link>
            </li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h4>EXPLORE</h4>
          <ul>
            <li><a href="/#properties">Rooms & Suites</a></li>
            <li><a href="/#culinary">Dining</a></li>
            <li><a href="/#experiences">Spa & Wellness</a></li>
            <li><a href="/#events">Events & Weddings</a></li>
            <li><a href="/#offers">Offers & Packages</a></li>
            <li><a href="/#gallery">Gallery</a></li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className="footer-col">
          <h4>INFORMATION</h4>
          <ul>
            <li><a href="/#about">About Laxmi Group</a></li>
            <li><a href="/#contact">Contact Us</a></li>
            <li><a href="/#feedback">Guest Reviews</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Laxmi Hotels & Group. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;