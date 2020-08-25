import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CalcButtons({ props, handleOnClick }) {
  function numberClicked(number) {
    const value = number.target.value;
    handleOnClick(value);
  }

  return (
    <button
      id={props.id}
      key={uuidv4()}
      value={props.character}
      onClick={numberClicked}
    >
      {props.character}
    </button>
  );
}
