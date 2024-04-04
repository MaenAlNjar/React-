import "./slider.css";
import React, { useState } from "react";

const Slider = ({ images }) => {
  const [imgeIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imgeIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imgeIndex - 1);
      }
    } else {
      if (imgeIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imgeIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imgeIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imgeIndex]} alt="not work" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="./arrow.png" alt="" className="rightar" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="not work" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
