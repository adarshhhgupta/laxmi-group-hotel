import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

function BookingBar() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <section className="booking-bar">
      {/* MOBILE COMPACT BUTTON TRIGGER (Only visible on mobile/tablet) */}
      <div className="mobile-trigger-wrapper">
        <button
          className="mobile-booking-btn-trigger"
          onClick={() => setMobileExpanded(true)}
        >
          <FaCalendarAlt className="btn-icon-gold" />
          <span>CHECK AVAILABILITY & RATES</span>
        </button>
      </div>

      {/* DESKTOP HORIZONTAL FORM */}
      <div className="booking-container desktop-only-bar">
        <div className="booking-fields">
          {/* DESTINATION */}
          <div className="booking-field">
            <div className="field-label-group">
              <FaMapMarkerAlt className="field-icon" />
              <label>DESTINATION</label>
            </div>
            <select defaultValue="Digha">
              <option value="Digha">Digha</option>
              <option value="Gangtok">Gangtok</option>
            </select>
          </div>

          {/* CHECK IN */}
          <div className="booking-field">
            <div className="field-label-group">
              <FaCalendarAlt className="field-icon" />
              <label>CHECK IN</label>
            </div>
            <input type="date" />
          </div>

          {/* CHECK OUT */}
          <div className="booking-field">
            <div className="field-label-group">
              <FaCalendarAlt className="field-icon" />
              <label>CHECK OUT</label>
            </div>
            <input type="date" />
          </div>

          {/* GUESTS */}
          <div className="booking-field">
            <div className="field-label-group">
              <FaUserFriends className="field-icon" />
              <label>GUESTS</label>
            </div>
            <select defaultValue="2 Adults">
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
              <option value="4 Adults">4 Adults</option>
              <option value="5 Adults">5 Adults</option>
            </select>
          </div>
        </div>

        <a
          href="https://wa.me/918910878588"
          target="_blank"
          rel="noopener noreferrer"
          className="booking-btn"
        >
          <FaWhatsapp className="booking-btn-icon" />
          <span>CHECK AVAILABILITY</span>
        </a>
      </div>

      {/* MOBILE POPUP MODAL DRAWER */}
      {mobileExpanded && (
        <div className="mobile-booking-modal-overlay" onClick={() => setMobileExpanded(false)}>
          <div className="mobile-booking-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <FaCalendarAlt className="modal-title-icon" />
                <h3>SELECT STAY DATES</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setMobileExpanded(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-fields-list">
              {/* DESTINATION */}
              <div className="modal-field-item">
                <label>
                  <FaMapMarkerAlt /> DESTINATION
                </label>
                <select defaultValue="Digha">
                  <option value="Digha">Digha</option>
                  <option value="Gangtok">Gangtok</option>
                </select>
              </div>

              {/* CHECK IN */}
              <div className="modal-field-item">
                <label>
                  <FaCalendarAlt /> CHECK IN
                </label>
                <input type="date" />
              </div>

              {/* CHECK OUT */}
              <div className="modal-field-item">
                <label>
                  <FaCalendarAlt /> CHECK OUT
                </label>
                <input type="date" />
              </div>

              {/* GUESTS */}
              <div className="modal-field-item">
                <label>
                  <FaUserFriends /> GUESTS
                </label>
                <select defaultValue="2 Adults">
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="4 Adults">4 Adults</option>
                  <option value="5 Adults">5 Adults</option>
                </select>
              </div>
            </div>

            <a
              href="https://wa.me/918910878588"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-submit-btn"
              onClick={() => setMobileExpanded(false)}
            >
              <FaWhatsapp className="modal-btn-icon" />
              <span>SEARCH & BOOK ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookingBar;