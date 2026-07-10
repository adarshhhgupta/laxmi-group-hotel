import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero1 from "../assets/gang1about.webp";
import hero from "../assets/gang2about.webp";
import room1 from "../assets/room1utpala.webp";
import room2 from "../assets/room2utpala.webp";
import dining from "../assets/diningutpala.webp";
import gallery1 from "../assets/lachung.webp";

function UtpalaPage() {

  return (
    <div className="property-page">

      <Navbar />

      {/* HERO */}

      <section
        className="property-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >

        <div className="property-hero-overlay"></div>

        <div className="property-hero-content">

          <p>GANGTOK • SIKKIM</p>

          <h1>
            Hotel Utpala <br />
            Gangtok
          </h1>

          <span>
            A serene mountain retreat surrounded by elegance and tranquility.
          </span>

        </div>

      </section>

      {/* ABOUT */}

      <section className="property-about">

        <div className="property-about-left">

          <p className="property-tag">
            ABOUT PROPERTY
          </p>

          <h2>
            Himalayan Luxury <span>Retreat</span>
          </h2>

        </div>

        <div className="property-about-right">

          <p>
            Hotel Utpala Gangtok offers refined mountain hospitality,
            breathtaking valley views and a peaceful atmosphere
            designed for unforgettable escapes.
          </p>

          <p>
            Experience modern comfort blended with
            the serenity of the Himalayas and premium personalized service.
          </p>

        </div>

      </section>

      {/* ROOMS */}

      <section className="property-rooms">

        <div className="property-heading">

          <p>ROOM CATEGORIES</p>

          <h2>
            Mountain View Luxury Rooms
          </h2>

        </div>

        <div className="property-rooms-grid">

          {/* ROOM 1 */}

          <div className="property-room-card">

            <img src={room1} alt="" />

            <div className="property-room-content">

              <h3>
                Super Deluxe Mountain View With Balcony
              </h3>

              <p>
                Elegant room offering stunning panoramic mountain views.
              </p>

            </div>

          </div>

          {/* ROOM 2 */}

          <div className="property-room-card">

            <img src={room2} alt="" />

            <div className="property-room-content">

              <h3>
                Superior Suite Room Mountain View With Balcony
              </h3>

              <p>
                Sophisticated luxury suite designed for serene comfort.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* DINING */}

      <section className="property-dining">

        <div className="property-dining-left">

          <img src={dining} alt="" />

        </div>

        <div className="property-dining-right">

          <p className="property-tag">
            DINING EXPERIENCE
          </p>

          <h2>
            Himalayan Culinary Delights
          </h2>

          <p>
            Discover authentic Sikkimese flavors,
            Tibetan delicacies and curated fine dining experiences
            crafted for memorable evenings.
          </p>

        </div>

      </section>

      {/* AMENITIES */}

      <section className="property-amenities">

        <div className="property-heading">

          <p>AMENITIES</p>

          <h2>
            Premium Amenities
          </h2>

        </div>

        <div className="property-amenities-grid">

          <div>Mountain View Rooms</div>
          <div>Luxury Dining</div>
          <div>Free WiFi</div>
          <div>Kids Zone</div>
          <div>Room Service</div>
          <div>Travel Desk</div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="property-gallery">

        <div className="property-heading">

          <p>GALLERY</p>

          <h2>
            Himalayan Property Showcase
          </h2>

        </div>

        <div className="property-gallery-grid">

          <img src={hero1} alt="" />
          <img src={hero} alt="" />
          <img src={room1} alt="" />
          <img src={room2} alt="" />
          <img src={gallery1} alt="" />
          <img src={dining} alt="" />

        </div>

      </section>

      {/* LOCATION */}

      <section className="property-location">

        <div className="property-location-left">

          <p className="property-tag">
            LOCATION
          </p>

          <h2>
            Explore The <span>Himalayas</span>
          </h2>

          <p>
            Located in the beautiful city of Gangtok,
            Hotel Utpala provides seamless access to scenic viewpoints,
            MG Marg, monasteries and Himalayan experiences.
          </p>

          <a
            href="https://maps.app.goo.gl/HxCsSeJ5T4M2j9BGA"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW ON GOOGLE MAPS
          </a>

        </div>

        <div className="property-location-right">

          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8769.238262476476!2d88.60945927623214!3d27.32512847640382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a51381526897%3A0x3e9208fbed18eba7!2sHotel%20Utpala%20(Premium)%2C%20Gangtok!5e1!3m2!1sen!2sin!4v1783237101384!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Hotel Utpala Location"
></iframe>

        </div>

      </section>

      {/* BOOKING CTA */}

      <section className="property-cta">

        <h2>
          Escape Into Mountain Serenity
        </h2>

        <a
  href="https://wa.me/919748261087"
  target="_blank"
  rel="noopener noreferrer"
  className="booking-btn"
>
  BOOK VIA WHATSAPP
</a>

      </section>

      <Footer />

    </div>
  );
}

export default UtpalaPage;