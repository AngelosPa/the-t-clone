import React, { useState } from "react";
import Data from "../Data.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSilde = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="slider-left" onClick={prevSlide} />
      <FaArrowAltCircleRight className="slider-right" onClick={nextSilde} />
      {Data[0].profileImg.map((slide, index) => {
        return (
          <div>
            {index === current && (
              <img className="profile-img" src={slide} alt="Profile Image" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
