import React from "react";
import "../Styles/DrumPad.css";

function DrumPad({ drumpad, playSound, changeKeyName}) {
  function handleClick(e){
    const newSound = e.target.firstChild
    playSound(newSound)
    const keyName = newSound.getAttribute("name")
    changeKeyName(keyName)
  }

  function handleKeyPress(e) {
    if (drumpad.code === e.code) {
      const newSound = document.getElementsByClassName(e.code)[0]
      playSound(newSound);
      const keyName = newSound.getAttribute("name")
      changeKeyName(keyName)
    }
  }
  document.addEventListener("keydown", handleKeyPress);

  return (
      <button
      id={drumpad.name}
      code={drumpad.code} 
      className={ `${drumpad.name} drum-pad` } 
      onClick={handleClick}>
        <audio id={drumpad.letter} src={drumpad.sound} name={drumpad.name} className={`clip ${drumpad.code}` } >
        </audio>
        {drumpad.letter}
      </button>
  );
}

export default DrumPad;
