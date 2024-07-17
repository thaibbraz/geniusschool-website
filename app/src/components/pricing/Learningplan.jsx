import React from "react";

const Learningplan = () => {
  return (
    <div className="learningplan">
      <div className="learningplan-heading">Choose your learning plan</div>
      <div className="groupclasses-card card-size">
        <div className="groupclasses-card-title title">Group classes</div>
        <div className="groupclasses-card-title-rectangle"></div>
        <div className="groupclasses-card-title-line"></div>
        <div className="groupclasses-card-title-price">
          €25 <span className="title">/mo</span>
        </div>
        <div className="groupclasses-card-title-pricetext subheading">
          <span className="annually">Billed annually</span>
          <span className="monthly">or €XX billed monthly</span>
        </div>
        <div className="groupclasses-card-title-second-line"></div>
      </div>
    </div>
  );
};

export default Learningplan;
