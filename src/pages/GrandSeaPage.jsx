import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero from "../assets/grandsealobby.jpg";
import room1 from "../assets/signatureroomgrandsea.webp";
import room2 from "../assets/eliteroomgrandsea.webp";
import room3 from "../assets/executiveroomgrandsea.webp";
import room4 from "../assets/premiumcouplegrandsea.webp";
import room5 from "../assets/royalfamilygrandsea.webp";
import dining from "../assets/dininggrandsea.webp";
import gallery1 from "../assets/gal1grandsea.webp";
import gallery2 from "../assets/gal2grandsea.webp";
import gallery3 from "../assets/gal3grandsea.webp";
import gallery4 from "../assets/gal4grandsea.webp";
import gallery5 from "../assets/gal5grandsea.webp";
import gallery6 from "../assets/gal6grandsea.webp";
import gallery7 from "../assets/gal7grandsea.webp";
import gallery8 from "../assets/gal8grandsea.webp";
import gallery9 from "../assets/gal9grandsea.webp";
import gallery10 from "../assets/gal10grandsea.webp";

function GrandSeaPage() {

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

          <p>NEW DIGHA • WEST BENGAL</p>

          <h1>
            Hotel Grand Sea <br />
            Digha
          </h1>

          <span>
            Sophisticated hospitality crafted with modern luxury and elegance.
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
            Refined Modern <span>Luxury</span>
          </h2>

        </div>

        <div className="property-about-right">

          <p>
            Hotel Grand Sea blends premium comfort,
            contemporary architecture and refined hospitality
            to deliver exceptional guest experiences.
          </p>

          <p>
            Designed for modern travellers seeking
            sophistication, serenity and unforgettable moments.
          </p>

        </div>

      </section>

      {/* ROOMS */}

      <section className="property-rooms">

        <div className="property-heading">

          <p>ROOM CATEGORIES</p>

          <h2>
            Elegant Room Experiences
          </h2>

        </div>

        <div className="property-rooms-grid">

          {/* ROOM 1 */}

          <div className="property-room-card">

            <img src={room1} alt="" />

            <div className="property-room-content">

              <h3>
                Signature Room
              </h3>

              <p>
                Budget-friendly room for two adults with elegant comfort, offering scenic road or jungle views.
              </p>

            </div>

          </div>

          {/* ROOM 2 */}

          <div className="property-room-card">

            <img src={room2} alt="" />

            <div className="property-room-content">

              <h3>
                Elite Room
              </h3>

              <p>
                Spacious budget-friendly room for three adults, featuring refined interiors with captivating road or jungle views.
              </p>

            </div>

          </div>

          {/* ROOM 3 */}

          <div className="property-room-card">

            <img src={room3} alt="" />

            <div className="property-room-content">

              <h3>
                Executive Room
              </h3>

              <p>
                Comfortable executive room for four adults, offering spacious elegance with beautiful road or jungle views throughout.
              </p>

            </div>

          </div>

          {/* ROOM 4 */}

          <div className="property-room-card">

            <img src={room4} alt="" />

            <div className="property-room-content">

              <h3>
                Premium Couple Room
              </h3>

              <p>
                Luxurious couple's retreat featuring a private Jacuzzi, elegant interiors, and serene road or jungle views.
              </p>

            </div>

          </div>

          {/* ROOM 5 */}

          <div className="property-room-card">

            <img src={room5} alt="" />

            <div className="property-room-content">

              <h3>
                Royal Family Suite
              </h3>

              <p>
                Luxurious family suite for six featuring two king beds, three balconies, Jacuzzi, panoramic road and jungle views.
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
            Luxury Culinary Journeys
          </h2>

          <p>
            Experience handcrafted delicacies,
            gourmet cuisines and sophisticated dining spaces
            designed for unforgettable moments.
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

          <div>Luxury Lobby</div>
          <div>Fine Dining</div>
          <div>Jungle View Rooms</div>
          <div>Free WiFi</div>
          <div>Whirlpool Spa</div>
          <div>Private Parking</div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="property-gallery">

        <div className="property-heading">

          <p>GALLERY</p>

          <h2>
            Hotel Showcase
          </h2>

        </div>

        <div className="property-gallery-grid">

          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          <img src={gallery5} alt="" />
          <img src={gallery6} alt="" />
          <img src={gallery7} alt="" />
          <img src={gallery8} alt="" />
          <img src={gallery9} alt="" />
          <img src={gallery10} alt="" />

        </div>

      </section>

      {/* LOCATION */}

      <section className="property-location">

        <div className="property-location-left">

          <p className="property-tag">
            LOCATION
          </p>

          <h2>
            Explore The <span>Destination</span>
          </h2>

          <p>
            Located in the heart of New Digha,
            Hotel Grand Sea offers convenient access
            to beaches, attractions and luxury coastal experiences.
          </p>

          <a
  href="https://maps.app.goo.gl/FYBn92nW647sVyL78"
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW ON GOOGLE MAPS
</a>

        </div>

        <div className="property-location-right">

          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4588.096138634606!2d87.49359147608749!3d21.620500080181195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ccdba40b968db%3A0xf33376e376c0d044!2sHOTEL%20GRAND%20SEA!5e1!3m2!1sen!2sin!4v1783236861906!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Hotel Grand Sea Location"
></iframe>

        </div>

      </section>

      {/* BOOKING CTA */}

      <section className="property-cta">

        <h2>
          Discover Refined Hospitality
        </h2>

        <a
  href="https://wa.me/918910878588"
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

export default GrandSeaPage;