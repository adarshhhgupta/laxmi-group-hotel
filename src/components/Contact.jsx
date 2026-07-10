import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_laxmigrouphotel",
  "template_174dt98",
  form.current,
  "5z9z41vC_6foiVZAp"
)
      .then(
        () => {
          alert("Enquiry Sent Successfully!");
        },
        (error) => {
          alert("Failed to send enquiry");
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <p className="contact-subtitle">GET IN TOUCH</p>

          <h2 className="contact-title">
            Begin Your <span>Journey</span><br />
            With Us
          </h2>

          <div className="contact-divider"></div>

          {/* SEA RESORT */}
          <div className="contact-block">
            <h3>Sea Resort, Digha</h3>
            <p>Dheusagar Park, New Digha</p>
            <p>West Bengal — 721428</p>
            <p className="contact-phone">+91 8910878588</p>

            <a
  href="https://maps.app.goo.gl/ngEp2jY65SszDL1w9"
  target="_blank"
  rel="noopener noreferrer"
  className="location-btn"
>
  📍 LOCATION
</a>
          </div>

          <div className="contact-line"></div>

          {/* HOTEL GRAND SEA */}
          <div className="contact-block">
            <h3>Hotel Grand Sea, New Digha</h3>
            <p>Dheusagar Park, New Digha</p>
            <p>West Bengal — 721428</p>
            <p className="contact-phone">+91 8910878588</p>

            <a
              href="https://maps.app.goo.gl/FYBn92nW647sVyL78"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              📍 LOCATION
            </a>
          </div>

          <div className="contact-line"></div>

          {/* HOTEL UTPALA */}
          <div className="contact-block">
            <h3>Hotel Utpala, Gangtok</h3>
            <p>MG Marg, Pantaloons Showroom, Near Star Cinema Hall</p>
            <p>Sikkim — 737101</p>
            <p className="contact-phone">+91 9748261087</p>

            <a
              href="https://maps.app.goo.gl/zhwy73nW2AaeS4bD9"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              📍 LOCATION
            </a>
          </div>

          <div className="contact-line"></div>

          {/* CENTRAL RESERVATIONS */}
          <div className="contact-block">
            <h3>Central Reservations</h3>
            <p>laxmigroupofhotel2024@gmail.com</p>
            <p className="contact-phone">+91 8910878588</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="form-row">

              <div className="form-group">
                <label>YOUR NAME</label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>MOBILE NUMBER</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>EMAIL ADDRESS</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>PROPERTY</label>

                <select
                  name="property"
                  required
                >
                  <option>Sea Resort, Digha</option>
                  <option>Hotel Grand Sea, Gangtok</option>
                  <option>Hotel Utpala, Gangtok</option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label>TYPE OF INQUIRY</label>

              <select
                name="inquiry"
                required
              >
                <option>Room Booking</option>
                <option>General Inquiry</option>
                <option>Event Booking</option>
                <option>Wedding Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>MESSAGE</label>

              <textarea
                name="message"
                placeholder="Tell us about your stay preferences, special occasions, or any queries..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-btn"
            >
              SEND ENQUIRY
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;