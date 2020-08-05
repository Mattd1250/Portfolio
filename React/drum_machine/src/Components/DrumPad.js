import React from "react";
import "../Styles/App.css";

function DrumPad({ drumpad, playSound, setCurrentKey }) {
  function handleClick(e) {
    const sound = e.target.firstChild;
    console.log("e.targt", e.target.id);
    console.log("sound", sound);
    playSound(sound, drumpad);
  }

  function handleKeyPress(e) {
    if (drumpad.code === e.code) {
      const sound = document.getElementById(e.code);
      playSound(sound, drumpad);
    }
  }
  document.addEventListener("keydown", handleKeyPress);

  return (
    <li id={drumpad.letter} className="drum-pad">
      <button id={drumpad.name} className={drumpad.name} onClick={handleClick}>
        <audio id={drumpad.code} className={drumpad.name}>
          <source src={drumpad.sound}></source>
        </audio>
        {drumpad.letter}
      </button>
    </li>
  );
}

export default DrumPad;
