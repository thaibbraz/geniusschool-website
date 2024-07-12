import React from "react";
import illustrationhero from "../images/illustrationhero.png";
import swirlhero from "../images/swirlhero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-heading">
        Speak confidently, learn effortlessly, connect globally
      </div>
      <img
        className="illustration-hero"
        src={illustrationhero}
        alt="illustration-hero"
      />
      <div className="hero-subheading">
        Join our vibrant community and master English through interactive group
        sessions, personalized mentoring, and engaging activities with native
        speakers.
      </div>
      <button className="hero-button">Start Your Journey Now</button>
      <img className="swirlhero" src={swirlhero} alt="swirlhero" />
    </div>
  );
};
export default Hero;
