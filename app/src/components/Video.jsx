import React from "react";

const Video = () => {
  return (
    <div className="video">
      <div className="video-heading">Lorem Ipsum</div>
      <div class="video-container">
        <iframe
          width="1081.22"
          height="608"
          src="https://www.youtube.com/embed/PZt1vnxonJk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-background"></div>
    </div>
  );
};

export default Video;
