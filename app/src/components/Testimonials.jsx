import React, { useState } from "react";
import Card from "./Card";
import arrow from "../images/arrow.png";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const firstIndex = currentIndex;
  const secondIndex = (currentIndex + 1) % testimonials.length;
  const thirdIndex = (currentIndex + 2) % testimonials.length;

  return (
    <div className="testimonials">
      <div className="testimonials-title">What learners are saying</div>
      <div className="testimonials-carousel-container">
        <button
          onClick={handlePrev}
          className="testimonials-button-prev"
          style={{ backgroundImage: `url(${arrow})` }}
        ></button>
        <div className="testimonials-card-container">
          <Card testimonial={testimonials[firstIndex]} />
          <Card testimonial={testimonials[secondIndex]} />
          <Card testimonial={testimonials[thirdIndex]} />
        </div>
        <button
          onClick={handleNext}
          className="testimonials-button-next"
          style={{ backgroundImage: `url(${arrow})` }}
        ></button>
      </div>
    </div>
  );
};

export default Testimonials;
