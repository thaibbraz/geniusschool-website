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
    <div
      className="testimonials"
      style={{
        width: "1400px",
        // maxWidth: "100%", // Ensures it doesn't exceed the viewport width
        height: "664px",
        marginRight: "0px",
        marginLeft: "0px",
        border: "1px solid black",
      }}
    >
      <div
        className="testimonials-title"
        style={{
          width: "781px",
          height: "48px",
          position: "absolute",
          top: "2470px",
          left: "78px",
          fontFamily: "Dela Gothic One",
          fontSize: "48px",
          fontWeight: 400,
          lineHeight: "48px",
          color: "black",
        }}
      >
        What learners are saying
      </div>
      <div
        className="testimonials-cards-container"
        style={{
          position: "absolute",
          top: "2550px",
          left: "59px",
          display: "flex",
          margin: "0 auto", // Centers the inner div
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
            backgroundSize: "contain",
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
            backgroundSize: "contain",
            border: "none",
            cursor: "pointer",
            transform: "rotate(180deg)",
          }}
        ></button>
      </div>
    </div>
  );
};

export default Testimonials;
