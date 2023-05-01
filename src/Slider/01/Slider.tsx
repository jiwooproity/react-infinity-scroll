import React, { useState } from "react";
import "./slider.css";
import SliderButton from "./SliderButton";

const Slider = (): JSX.Element => {
  const slides: string[] = ["#33a", "#8c9", "#f3e074"];
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  // const setSlides = () => {
  //   let front = [];
  //   let last = [];
  //   let index = 0;

  //   while (index < 2) {
  //     front.push(slides[index % slides.length]);
  //     last.unshift(slides[slides.length - 1 - (index % slides.length)]);
  //     index++;
  //   }

  //   return [...front, ...slides, ...last];
  // };

  // let showSlides = setSlides();

  const onSliderBtn = (type: string) => {
    if (type === "next" && currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (type === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-area">
      <SliderButton direction="prev" onClick={onSliderBtn} />
      <SliderButton direction="next" onClick={onSliderBtn} />
      <div
        className="slider-track"
        style={{
          transform: `translateX(calc(${(-100 / slides.length) * (0.5 + currentIndex)}%)`,
          transition: `transform 0.3s ease`,
        }}
      >
        {slides.map((color: string, index: number): JSX.Element => (
          <div className={`slider-item ${currentIndex !== index ? "non" : ""}`} style={{background: color}}>
            <div><span>{index}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
