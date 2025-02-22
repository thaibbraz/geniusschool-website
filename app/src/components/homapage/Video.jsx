import React from "react";

const Video = () => {
  return (
    <div className="video">
      <div className="video-heading heading">Lorem Ipsum</div>
      <div className="video-container">
        <iframe
          width="1081.22"
          height="608"
          src="https://www.youtube.com/embed/PZt1vnxonJk"
          // frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-background"></div>
    </div>
  );
};

export default Video;
