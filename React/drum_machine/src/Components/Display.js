import React from "react";
import DrumPad from "./DrumPad";

const Display = (props) => {
  return (
    <div id="display">
      <DrumPad drumPads={props.drumPads} />
    </div>
  );
};

export default Display;
