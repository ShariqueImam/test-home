import React from "react";
import BackgroundImageForMovingSection from "../../assets/butter5.webp";
const MovingTextWithBackground = () => {
  return (
    <div className="relative h-[30vh] w-full my-12">
      <img
        src={BackgroundImageForMovingSection}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-yellowDark to-yellowDark opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="movingTextWrapper">
          <p className="movingText text-yellow">
            Pure shea butter for natural, glowing, and deeply nourished skin
          </p>
        </div>
      </div>
    </div>
  );
};
export default MovingTextWithBackground;
