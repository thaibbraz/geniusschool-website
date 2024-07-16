import React from "react";

const Card = ({ testimonial }) => {
  return (
    <div
      className="testimonial-card"
      style={{
        width: "346px",
        height: "320px",
        backgroundColor: "white",
        border: "1px solid black",
        margin: "0 20px",
        position: "relative",
      }}
    >
      <div
        className="testimonial-text-content"
        style={{
          fontFamily: "DM Sans",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "27px",
          padding: "20px",
        }}
      >
        {testimonial.text}
      </div>
      <div
        className="testimonial-name"
        style={{
          height: "80px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          className="testimonial-image"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginRight: "20px",
          }}
        >
          <img
            src={testimonial.image}
            // alt={testimonial.name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          />
        </div>
        {testimonial.name}
      </div>
    </div>
  );
};

export default Card;
