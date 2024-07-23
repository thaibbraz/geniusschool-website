import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/homapage/Hero";
import About from "./components/homapage/About";
import Video from "./components/homapage/Video";
import Testimonials from "./components/homapage/Testimonials";
import Footer from "./components/homapage/Footer";
import Learningplan from "./components/pricing/Learningplan";
import Customplan from "./components/pricing/Customplan";
import FAQ from "./components/pricing/FAQ";
import Footerpricing from "./components/pricing/Footerpricing";

const testimonials = [
  {
    text: "Thanks to GeniusSchool, I've improved my English speaking skills in a fun and supportive environment. The interactive sessions and expert guidance have truly made a difference!",
    name: "Thaigo Thiago",
    image: "profile.jpg",
  },
  {
    text: "Joining the group sessions at GeniusSchool has been a game-changer. The interactive activities and friendly atmosphere made practicing English enjoyable. I've gained confidence and made friends from around the world.",
    name: "Zoe Zoe",
    image: "profile.jpg",
  },
  {
    text: "Learning English at GeniusSchool has been incredible! The engaging sessions and personalized approach have boosted my confidence like never before. Highly recommend!",
    name: "Jane Doe",
    image: "profile.jpg",
  },
  {
    text: "The teachers are amazing and the lessons are well-structured.",
    name: "John Smith",
    image: "profile.jpg",
  },
  {
    text: "I have made significant progress thanks to GeniusSchool. The comprehensive curriculum and engaging learning materials provided by GeniusSchool have been instrumental in my journey.",
    name: "Emily Freewoman",
    image: "profile.jpg",
  },
  {
    text: "GeniusSchool has truly transformed my language learning journey. Their interactive sessions and expert guidance have boosted my confidence and proficiency.",
    name: "Giulia Cell",
    image: "profile.jpg",
  },
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="about-us">
                <About />
              </section>
              <Video />
              <Testimonials testimonials={testimonials} />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Learningplan />
              <Customplan />
              <FAQ />
              <Footerpricing />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
