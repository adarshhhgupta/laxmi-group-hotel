import React from "react";
import { FaUmbrellaBeach, FaMountain, FaSpa, FaUtensils, FaGlassCheers, FaLeaf } from "react-icons/fa";

function Experiences() {

  const data = [
    {
      icon: <FaUmbrellaBeach />,
      title: "Beach & Adventure",
      desc: "From sunrise yoga on Digha’s pristine shores to thrilling water sports — your days by the sea are packed with wonder."
    },
    {
      icon: <FaMountain />,
      title: "Mountain Escapades",
      desc: "Guided treks through Sikkim’s forests, monastery visits, and breathtaking panoramic viewpoints."
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      desc: "Traditional Ayurvedic therapies and ocean-inspired treatments to restore balance and calm."
    },
    {
      icon: <FaUtensils />,
      title: "Culinary Journeys",
      desc: "From beachside seafood to Himalayan flavors — every meal is an experience."
    },
    {
      icon: <FaGlassCheers />,
      title: "Weddings & Events",
      desc: "Celebrate your moments with ocean and mountain backdrops crafted into unforgettable events."
    },
    {
      icon: <FaLeaf />,
      title: "Cultural Immersion",
      desc: "Discover local traditions, crafts, and vibrant cultural experiences guided by experts."
    }
  ];

  return (
    <section id="experiences" className="experiences">

      <div className="exp-container">

        {/* section header */}
        <p className="exp-subtitle">
          WHAT WE OFFER
        </p>

        <h2>
          Crafted <span>Experiences</span><br />
          Like No Other
        </h2>

        {/* experiences grid */}
        <div className="exp-grid">

          {data.map((item, index) => (

            <div className="exp-card" key={index}>

              <div className="exp-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

        {/* mobile swipe hint */}
        <div className="swipe-hint mobile-only">
          Swipe to explore
        </div>

      </div>

    </section>
  );
}

export default Experiences;