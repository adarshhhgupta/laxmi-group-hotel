import React from "react";

import event1 from "../assets/event1.webp";
import event2 from "../assets/event2.webp";
import event3 from "../assets/event3.webp";
import event4 from "../assets/event4.webp";
import event5 from "../assets/event5.webp";
import event6 from "../assets/event6.webp";
import event7 from "../assets/event7.webp";

const Events = () => {
  const occasions = [
    "Wedding Celebrations",
    "Corporate Meetings & Conferences",
    "Birthday Celebrations",
    "Anniversary Gatherings",
    "Reception Events",
    "Engagement Ceremonies",
    "Family Functions",
    "Private Celebrations",
  ];

  const gallery = [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-container">

        <span className="events-subtitle">OCCASIONS</span>

        <h2 className="events-title">
          Elegant Venues,
          <br />
          Memorable Gatherings
        </h2>

        <p className="events-text">
          Every celebration deserves a setting that reflects its significance.
          At <strong>Laxmi Group of Hotels</strong>, we provide beautifully
          designed venues where timeless elegance meets warm hospitality.
          Whether you're planning a wedding celebration, an intimate family
          gathering or a distinguished corporate event, our thoughtfully
          curated spaces create the perfect atmosphere for memorable occasions.
        </p>

        <p className="events-text">
          From spacious banquet halls and refined interiors to exceptional
          dining experiences and attentive service, every detail is carefully
          considered to ensure your event is seamless from beginning to end.
          Our commitment to personalized hospitality allows every celebration
          to become a cherished experience for you and your guests.
        </p>

        <div className="events-divider"></div>

        <div className="events-content">

          <div className="events-left">

            <h3>Occasions We Host</h3>

            <div className="events-list">

              {occasions.map((item, index) => (
                <div className="events-item" key={index}>
                  <span>✦</span>
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="events-right">

            <h3>Why Choose Our Venues</h3>

            <p>
              Designed for both intimate gatherings and grand celebrations,
              our venues combine elegant interiors, spacious banquet halls,
              modern amenities and exceptional hospitality to create an
              unforgettable experience. Every event is thoughtfully planned,
              allowing you to celebrate every milestone with comfort,
              sophistication and complete peace of mind.
            </p>

            <a href="#contact" className="events-btn">
              PLAN YOUR EVENT
            </a>

          </div>

        </div>

        <div className="events-divider"></div>

        <div className="events-gallery">

          {gallery.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Event ${index + 1}`} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Events;