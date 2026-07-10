import React from "react";

function Culinary() {
  return (
    <section id="culinary" className="culinary">
      <div className="culinary-container">

        {/* LEFT CONTENT */}
        <div className="culinary-content">

          <p className="culinary-subtitle">CULINARY EXCELLENCE</p>

          <h2>
            A Symphony <br />
            of <span>Flavours</span>
          </h2>

          <div className="culinary-line"></div>

          <p className="culinary-text">
            Our kitchens are stages where culinary artistry meets local soul.
            At Sea Resort Digha, savour the ocean’s bounty — fresh prawns,
            pomfret, and hilsa prepared in coastal Bengali traditions.
            At Hotel Grand Sea Gangtok, indulge in Sikkimese delicacies,
            Tibetan warmth, and sophisticated continental cuisine.
          </p>

          {/* TAGS */}
          <div className="culinary-tags">

            {/* FIRST ROW */}
            <div className="culinary-tags-row">
              <span className="active">BENGALI</span>
              <span>SEAFOOD</span>
              <span>CONTINENTAL</span>
            </div>

            {/* SECOND ROW */}
            <div className="culinary-tags-row bottom">
              <span>PAN-ASIAN</span>
              <span>NORTH INDIAN</span>
            </div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="culinary-visual">

          <div className="circle-wrapper">

            {/* 🔥 ROTATING CIRCLE */}
            <div className="circle-rotating"></div>

            {/* 🔥 STATIC CUTLERY (NOT ROTATING) */}
            <div className="center-icon">🍽️</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Culinary;