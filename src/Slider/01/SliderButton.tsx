import React from "react";
import "./sliderButton.css";

type SliderButtonType = {
  direction: string;
  onClick: (type: string) => void;
};

const SliderButton = ({ direction, onClick }: SliderButtonType): JSX.Element => {
  return (
    <div className={`slider-button-control ${direction}`}>
      <button onClick={() => onClick(direction)}>
        <span>{direction === "prev" ? "<" : ">"}</span>
      </button>
    </div>
  );
};

export default SliderButton;
