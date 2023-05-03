import React, { useEffect, useState } from "react";
import "./slider.css";
import SliderButton from "./SliderButton";

const Slider = (): JSX.Element => {
  const slides: string[] = ["#33a", "#8c9", "#f3e074"];

  const [slidesList, setSlidesList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [currentTrans, setCurrentTrans] = useState<string>("transform 0.1s ease");

  const resetSlides = (type: string) => {
    const nextIndex = type === 'next' ? currentIndex + 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setCurrentTrans("none");
      setCurrentIndex(Math.floor(slidesList.length / 2));

      setTimeout(() => {
        setCurrentTrans("transform 0.1s ease");
      }, 100);
    }, 100);
  }

  const onSliderBtn = (type: string) => {
    if (type === "next") {
      if(currentIndex === slides.length + 3) {
        // setCurrentIndex(currentIndex + 1);
        resetSlides(type);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }

    if (type === "prev") {
      if(currentIndex === slides.length - 1) {
        resetSlides(type);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  useEffect(() => {
    const first = [slides[0], slides[1], slides[2]];
    const last = [slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1]];
    setSlidesList([...last, ...slides, ...first]);
    setCurrentIndex(Math.floor([...last, ...slides, ...first].length / 2))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="slider-area">
      <SliderButton direction="prev" onClick={onSliderBtn} />
      <SliderButton direction="next" onClick={onSliderBtn} />
      <div
        className="slider-track"
        style={{
          transform: `translateX(calc(${(-100 / slidesList.length) * (0.5 + currentIndex)}%)`,
          transition: `${currentTrans}`,
        }}
      >
        {slidesList.map((color: string, index: number): JSX.Element => (
          <div key={index} className={`slider-item ${currentIndex !== index ? "non" : ""}`} style={{background: color}}>
            {/* <div><span>{index}</span></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
