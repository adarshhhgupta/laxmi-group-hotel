import React from "react";

function Feedback() {
  return (
    <section id="feedback" className="feedback">
      <div className="feedback-container">

        {/* HEADER */}
        <div className="feedback-header">
          <p className="feedback-subtitle">GUEST STORIES</p>

          <h2>
            Words That <br />
            <span>Warm Our Hearts</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="feedback-cards">

          {/* CARD 1 */}
          <div className="feedback-card">

            <div className="stars">★★★★★</div>

            <p>
              Excellent rooms and service also soo good... location is near dhewsagar..We really enjoyed the days... We visit again this hotel next time.
            </p>

            <div className="feedback-user">

              <div className="avatar">R</div>

              <div>
                <h4>Riya Bhattacharya</h4>
                <span>HOTEL GRAND SEA, DIGHA</span>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="feedback-card">

            <div className="stars">★★★★★</div>

            <p>
              Royal,classy and modern rooms with equiped sanitary facilities,jacazzi and well trained staff
Moreover the fooding and lodging at hotel grand sea was up to the mark
            </p>

            <div className="feedback-user">

              <div className="avatar">P</div>

              <div>
                <h4>Santo Roy</h4>
                <span>HOTEL GRAND SEA, DIGHA</span>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="feedback-card">

            <div className="stars">★★★★★</div>

            <p>
              Stayed at Sea Resort for our honeymoon and loved it. Clean rooms, great view, and very friendly staff. We enjoyed the swimming pool a lot. It’s a bit away from the main sea beach, but the place is calm, clean, and pleasant.  check-in was smooth. Perfect vibe for couples. Will definitely return if we visit Digha again. Highly recommended
            </p>

            <div className="feedback-user">

              <div className="avatar">S</div>

              <div>
                <h4>Abritti Chakraborty</h4>
                <span>SEA RESORT, DIGHA</span>
              </div>

            </div>
          </div>

          {/* CARD 4 */}
          <div className="feedback-card">

            <div className="stars">★★★★★</div>

            <p>
              “Had an amazing stay here! 🌊✨
The rooms were super clean 🛏️, the staff was very polite and helpful 😊, and the peaceful atmosphere made the trip even more special. Waking up to the fresh sea breeze and enjoying the beautiful surroundings was truly refreshing ❤️ Definitely one of the best stays in Digha. Highly recommended! 🌴💙”
            </p>

            <div className="feedback-user">

              <div className="avatar">P</div>

              <div>
                <h4>Asif Islam</h4>
                <span>SEA RESORT, DIGHA</span>
              </div>

            </div>
          </div>

          {/* CARD 5 */}
          <div className="feedback-card">

            <div className="stars">★★★★★</div>

            <p>
              Thank you sir for your exceptional service. Thoroughly enjoyed our stay at your hotel for 3 days. Your staff were so friendly. Hats off to Rahul and Abhijit da for taking care and managing every hotel activities. I shall visit again soon
            </p>

            <div className="feedback-user">

              <div className="avatar">P</div>

              <div>
                <h4>Arijit Guhathakurta</h4>
                <span>HOTEL UTPALA, GANGTOK</span>
              </div>

            </div>
          </div>

          {/* CARD 6 */}
          <div className="feedback-card">

            <div className="stars">★★★★★</div>

            <p>
              Hospitality was too good. They managed everything with utmost honesty.
            </p>

            <div className="feedback-user">

              <div className="avatar">P</div>

              <div>
                <h4>Vishwajeet Jayant</h4>
                <span>HOTEL UTPALA, LACHUNG</span>
              </div>

            </div>
          </div>

        </div>

        {/* MOBILE SWIPE TEXT */}
        <div className="feedback-swipe">
          ↔ Swipe to explore ↔
        </div>

      </div>
    </section>
  );
}

export default Feedback;