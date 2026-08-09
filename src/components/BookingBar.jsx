import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaWhatsapp,
} from "react-icons/fa";

function BookingBar() {
  return (
    <section className="booking-bar">
      <div className="booking-container">
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
    </section>
  );
}

export default BookingBar;