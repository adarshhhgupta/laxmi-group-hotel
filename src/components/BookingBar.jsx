import React from "react";

function BookingBar() {
  return (
    <section className="booking-bar">
      <div className="booking-container">

        {/* 🔥 LEFT SIDE FIELDS */}
        <div className="booking-fields">

          {/* DESTINATION */}
          <div className="booking-field">
            <label>DESTINATION</label>
            <select>
              <option>Digha</option>
              <option>Gangtok</option>
            </select>
          </div>

          {/* CHECK IN */}
          <div className="booking-field">
            <label>CHECK IN</label>
            <input type="date" />
          </div>

          {/* CHECK OUT */}
          <div className="booking-field">
            <label>CHECK OUT</label>
            <input type="date" />
          </div>

          {/* GUESTS */}
          <div className="booking-field">
            <label>GUESTS</label>
            <select>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>5 Adults</option>
            </select>
          </div>

        </div>

        <a
  href="https://wa.me/918910878588"
  target="_blank"
  rel="noopener noreferrer"
  className="booking-btn"
>
  CHECK AVAILABILITY
</a>

      </div>
    </section>
  );
}

export default BookingBar;