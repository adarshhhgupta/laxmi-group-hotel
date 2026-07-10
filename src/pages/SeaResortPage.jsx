import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/searesortpool1.webp";
import pool1 from "../assets/searesortpool1.webp";
import pool2 from "../assets/searesortpool2.webp";
import room1 from "../assets/DELUXE ROOM.webp";
import room2 from "../assets/PREMIUM ROOM.webp";
import room3 from "../assets/INTERCONNECTED FAMILY ROOM.webp";
import room4 from "../assets/SUITE ROOM.webp";
import dining from "../assets/searesortdining.webp";
import gallery1 from "../assets/searesortgallery.webp";
import gallery2 from "../assets/searesortgal1.webp";
import gallery3 from "../assets/searesortgal2.webp";
import gallery4 from "../assets/searesortgal3.webp";
import gallery5 from "../assets/searesortban1.webp";
import gallery6 from "../assets/searesortban2.webp";

function SeaResortPage() {

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
            Sea Resort <br />
            Digha
          </h1>

          <span>
            A luxury beachfront destination crafted for unforgettable stays.
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
            Experience Coastal <span>Elegance</span>
          </h2>

        </div>

        <div className="property-about-right">

          <p>
            Sea Resort Digha combines refined luxury,
            panoramic sea views and premium hospitality
            into one unforgettable destination.
          </p>

          <p>
            Whether you seek family vacations,
            romantic escapes or premium leisure experiences,
            every detail is crafted for comfort and sophistication.
          </p>

        </div>

      </section>

      {/* ROOMS */}

      <section className="property-rooms">

        <div className="property-heading">

          <p>ROOM CATEGORIES</p>

          <h2>
            Curated Luxury Rooms
          </h2>

        </div>

        <div className="property-rooms-grid">

          {/* ROOM 1 */}

          <div className="property-room-card">

            <img src={room1} alt="" />

            <div className="property-room-content">

              <h3>
                Deluxe Room
              </h3>

              <p>
                Elegant deluxe room for couples or three adults, featuring road views, premium amenities, and exceptional comfort.
              </p>

            </div>

          </div>

          {/* ROOM 2 */}

          <div className="property-room-card">

            <img src={room2} alt="" />

            <div className="property-room-content">

              <h3>
                Premium Room
              </h3>

              <p>
                Experience spacious comfort in our premium pool-view room, featuring refined interiors and thoughtfully curated luxury amenities.
              </p>

            </div>

          </div>

          {/* ROOM 3 */}

           <div className="property-room-card">

            <img src={room3} alt="" />

            <div className="property-room-content">

              <h3>
                Interconnected Family Room
              </h3>

              <p>
                Spacious interconnected family rooms offering two private bedrooms, seamless connectivity, premium comfort, and ideal family privacy.
              </p>

            </div>

          </div>

          {/* ROOM 4 */}

           <div className="property-room-card">

            <img src={room4} alt="" />

            <div className="property-room-content">

              <h3>
                Suite Room
              </h3>

              <p>
                Indulge in our finest family suite, offering a private Jacuzzi, two expansive balconies, and breathtaking views.
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
            Signature Coastal Dining
          </h2>

          <p>
            Discover authentic Bengali seafood,
            luxury fine dining and handcrafted culinary experiences
            inspired by coastal traditions.
          </p>

        </div>

      </section>

      {/* AMENITIES */}

      <section className="property-amenities">

        <div className="property-heading">

          <p>AMENITIES</p>

          <h2>
            Luxury Amenities
          </h2>

        </div>

        <div className="property-amenities-grid">

          <div>Swimming Pool</div>
          <div>Kids Zone</div>
          <div>Luxury Dining</div>
          <div>Mini Refrigerator</div>
          <div>Free WiFi</div>
          <div>Parking Facility</div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="property-gallery">

        <div className="property-heading">

          <p>GALLERY</p>

          <h2>
            Property Showcase
          </h2>

        </div>

        <div className="property-gallery-grid">

          <img src={gallery1} alt="" />
          <img src={pool1} alt="" />
          <img src={pool2} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          <img src={gallery5} alt="" />
          <img src={gallery6} alt="" />

        </div>

      </section>

      {/* LOCATION */}

      <section className="property-location">

        <div className="property-location-left">

          <p className="property-tag">
            LOCATION
          </p>

          <h2>
            Discover The <span>Destination</span>
          </h2>

          <p>
            Located in the heart of New Digha,
            Sea Resort offers effortless access to beaches,
            attractions, shopping and coastal experiences.
          </p>

          <a
  href="https://maps.app.goo.gl/ngEp2jY65SszDL1w9"
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW ON GOOGLE MAPS
</a>

        </div>

        <div className="property-location-right">

          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4588.116431643001!2d87.49424667608744!3d21.619860680181556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ccd21bb1bd7e1%3A0xf2083e44cff102e5!2sSEA%20RESORT!5e1!3m2!1sen!2sin!4v1783236532814!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Sea Resort Location"
></iframe>

        </div>

      </section>

      {/* BOOKING CTA */}

      <section className="property-cta">

        <h2>
          Begin Your Luxury Escape
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

export default SeaResortPage;