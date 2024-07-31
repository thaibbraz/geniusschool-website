import React, { useState } from "react";
import plusicon from "../../images/plusicon.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "Is there a discount for yearly service?",
    "Do you offer student pricing?",
    "Do the prices shown above include taxes?",
    "Can I try GeniusSchool for free?",
    "Can I change my plan once I sign up?",
    "Can I cancel my account at any time?",
    "Can I have a customized learning plan?",
    "What level of English do I need to have as a start?",
  ];

  const answers = [
    "Yes! You can save up to 15%.",
    "Yes! Students get 10% discount.",
    "Yes!",
    "We have a special 2-month free trial.",
    "Yes!",
    "Yes!",
    <>
      Yes. Send us an email to{" "}
      <a
        href="mailto:thiago@geniuschool.com?subject=Requesting%20a%20Custom%20Plan"
        style={{ color: "white", textDecoration: "underline" }}
      >
        thiago@geniuschool.com
      </a>
    </>,
    "Any level is welcome",
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQ-frame">
      <div className="FAQ-heading heading">Frequently asked questions</div>
      <div className="FAQ-content">
        {questions.map((question, index) => (
          <div key={index}>
            <div className="FAQ-line"></div>
            <div className="FAQ-question">
              <span>{question}</span>
              <img
                src={plusicon}
                alt="plus-icon"
                className="FAQ-plus-icon"
                onClick={() => handleToggle(index)}
              />
            </div>
            {activeIndex === index && (
              <div className="FAQ-answer">
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
        <div className="FAQ-line"></div>
      </div>
    </div>
  );
};

export default FAQ;
