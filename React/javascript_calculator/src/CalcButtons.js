import React from "react";

export default function CalcButtons({ button, handleOnClick }) {
  return (
    <button
      id={button.id}
      key={button.id}
      value={button.character}
      onClick={handleOnClick}
    >
      {button.character}
    </button>
  );
}
