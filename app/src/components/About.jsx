import React from "react";
import illustrationabout from "../images/illustrationabout.png";

const About = () => {
  return (
    <div className="about">
      <img
        className="illustration-about"
        src={illustrationabout}
        alt="illustration-about"
      />
      <div className="rectangole-about"></div>
      <div className="about-paragraphs">
        <div className="group1-title title">Engaging learning environment</div>
        <div className="group1-subheading subheading">
          Enjoy interactive group sessions and personalized mentoring to keep
          learning dynamic and fun.
        </div>
        <div className="group2-title title">Expert guidance</div>
        <div className="group2-subheading subheading">
          Benefit from experienced native speakers and tailored instruction that
          addresses your unique language learning goals.
        </div>
        <div className="group3-title title">Holistic skill development</div>
        <div className="group3-subheading subheading">
          Improve speaking, listening, writing, and reading skills through
          diverse and engaging methods.
        </div>
      </div>
    </div>
  );
};

export default About;
