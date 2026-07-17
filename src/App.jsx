import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import About from "./components/About";
import Properties from "./components/Properties";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import Culinary from "./components/Culinary";
import Feedback from "./components/Feedback";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <About />
      <Properties />
      <Experiences />
      <Events />
      <Gallery />
      <Culinary />
      <Feedback />
      <Offers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;