import React, { useState } from "react";
import DrumPad from "./DrumPad";
import { v4 as uuidv4 } from "uuid";
import "../Styles/App.css";

function App() {
  const [currentKey, setcurrentKey] = useState("")
  const drumpads = [
    {
      letter: "Q",
      name: "Heater 1",
      code: "KeyQ",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      letter: "W",
      name: "Heater 2",
      code: "KeyW",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      letter: "E",
      name: "Heater 3",
      code: "KeyE",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      letter: "A",
      name: "Heater 4",
      code: "KeyA",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      letter: "S",
      name: "Clap",
      code: "KeyS",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      letter: "D",
      name: "Cymbol",
      code: "KeyD",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      letter: "Z",
      name: "Kick-n-Hat",
      code: "KeyZ",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      letter: "X",
      name: "Kick",
      code: "KeyX",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      letter: "C",
      name: "Hat",
      code: "KeyC",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(sound) {
    sound.currentTime = 0
    sound.play();
  }

  function changeKeyName(name){
    setcurrentKey(name)
  }

  return (
    <div id="drum-machine">
      <div id="display">
        <div className="currentKey"> {currentKey}</div>

        <div className="main-pad">
        {drumpads.map((drumpad) => {
          return (
            <DrumPad 
            key={uuidv4()} 
            drumpad={drumpad} 
            playSound={playSound} 
            changeKeyName={changeKeyName}            
            />
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default App;
