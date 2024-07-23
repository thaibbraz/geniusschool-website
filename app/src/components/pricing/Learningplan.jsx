import React from "react";
import info from "../../images/info.png";

const Card = ({ title, price, pricetext, description, includes, bgColor }) => {
  const handleClick = () => {
    window.location.href = "https://stripe.com/gb";
  };
  return (
    <div className="card">
      <div className="card-title title" style={{ backgroundColor: bgColor }}>
        {title}
      </div>
      <div className="card-price">
        €{price} <span className="card-price-monthly title">/mo</span>
      </div>
      <div className="card-pricetext">
        {pricetext.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
      <div className="card-line"></div>
      <div className="card-description">{description}</div>
      <button className="card-button" onClick={handleClick}>
        GET STARTED
      </button>
      <div className="card-including">INCLUDING</div>
      <ul className="card-list">
        {includes.map((item, index) => (
          <li key={index}>
            {item}
            <img src={info} alt="Info" className="info-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Learningplan = () => {
  const plans = [
    {
      title: "Group classes",
      price: "25",
      pricetext: ["Billed annually", "or €XX billed monthly"],
      description:
        "Participate in engaging group conversations with other learners.",
      includes: [
        "Interactive group sessions",
        "Led by native speakers",
        "Flexible class schedules",
        "Small class sizes",
      ],
      bgColor: "rgba(255, 193, 7, 0.25)",
    },
    {
      title: "1-on-1 Mentoring",
      price: "40",
      pricetext: ["Billed annually", "or €XX billed monthly"],
      description: "Get tailored instruction focusing on your specific needs.",
      includes: [
        "1-on-1 personalized mentoring",
        "Tailored lessons",
        "Led by native speakers",
        "Flexible schedules",
        "Continuous feedback",
        "Customized learning materials",
      ],
      bgColor: "rgba(255, 193, 7, 0.50)",
    },
    {
      title: "Group + Mentoring",
      price: "60",
      pricetext: ["Billed annually", "or €XX billed monthly"],
      description:
        "Master English with group classes and personalized mentoring.",
      includes: [
        "Interactive group sessions",
        "1-on-1 personalized mentoring",
        "Tailored lessons",
        "Led by native speakers",
        "Flexible schedules",
        "Continuous feedback",
        "Customized learning materials",
      ],
      bgColor: "rgba(255, 193, 7, 1.0)",
    },
  ];

  return (
    <div className="learningplan">
      <div className="learningplan-heading">Choose your learning plan</div>
      <div className="learningplan-card-container">
        {plans.map((plan, index) => (
          <Card key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Learningplan;
