import React, { useState } from "react";
import Card from "./Card";
import arrow from "../images/arrow.png"; // Ensure this path is correct

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1282px",
        height: "421px",
        margin: "auto",
      }}
    >
      <button
        onClick={handlePrev}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `url(${arrow}) no-repeat center center`,
          backgroundSize: "contain", // Keep the aspect ratio intact
          border: "none",
          cursor: "pointer",
          transform: "rotate(0deg)",
        }}
      ></button>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card testimonial={testimonials[firstIndex]} />
        <Card testimonial={testimonials[secondIndex]} />
        <Card testimonial={testimonials[thirdIndex]} />
      </div>
      <button
        onClick={handleNext}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `url(${arrow}) no-repeat center center`,
          backgroundSize: "contain", // Keep the aspect ratio intact
          border: "none",
          cursor: "pointer",
          transform: "rotate(180deg)",
        }}
      ></button>
    </div>
  );
};

export default Testimonials;
