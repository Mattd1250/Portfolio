import React, { useState } from "react";
import "./App.css";
import Display from "./Display";
import CalcButtons from "./CalcButtons";
import DecimalButton from "./DecimalButton";

function App() {
  const [input, setInput] = useState(0);
  const [display, setDisplay] = useState(0);
  const [operant, setOperant] = useState({ value: "", isNeg: false });
  const [storedNumber, setStoredNumber] = useState(null);
  const numbers = [
    {
      id: "one",
      character: 1,
    },
    {
      id: "two",
      character: 2,
    },
    {
      id: "three",
      character: 3,
    },
    {
      id: "four",
      character: 4,
    },
    {
      id: "five",
      character: 5,
    },
    {
      id: "six",
      character: 6,
    },
    {
      id: "seven",
      character: 7,
    },
    {
      id: "eight",
      character: 8,
    },
    {
      id: "nine",
      character: 9,
    },
    {
      id: "blank",
      character: "",
    },
    {
      id: "zero",
      character: 0,
    },
  ];

  const operations = [
    {
      id: "add",
      character: "+",
    },
    {
      id: "subtract",
      character: "-",
    },
    {
      id: "multiply",
      character: "*",
    },
    {
      id: "divide",
      character: "/",
    },
  ];

  function handleClear() {
    setInput(0);
    setDisplay(0);
    setStoredNumber(0);
  }

  function handleNumberClick(number) {
    console.log(input.length);
    if (input.length >= 16) return;
    let newInput;
    if (parseFloat(input) === 0 || input === null) {
      newInput = number;
    } else {
      newInput = input + number;
    }
    let newDisplay = newInput;
    if (operant.isNeg === true) newDisplay *= -1;
    setInput(newInput);
    setDisplay(newDisplay);
  }

  function handleOperationClick(operation) {
    let negativeCheck = false;
    let newOperation = operation;
    if (operation === "-" && operant.value !== "") {
      newOperation = operant.value;
      negativeCheck = true;
    }
    let newStoredNumber;
    if (parseFloat(storedNumber) === 0 || storedNumber === null) {
      newStoredNumber = input;
    } else {
      newStoredNumber = storedNumber;
    }
    setInput(0);
    setOperant({ value: newOperation, isNeg: negativeCheck });
    setStoredNumber(newStoredNumber);
  }

  function handleEquals() {
    if (input === ".") return;
    let newNum;
    const storedNum = Number(storedNumber);
    let inputNum = Number(input);
    if (operant.isNeg) inputNum *= -1;
    switch (operant.value) {
      case "+":
        newNum = storedNum + inputNum;
        break;
      case "-":
        newNum = storedNum - inputNum;
        break;
      case "*":
        newNum = storedNum * inputNum;
        break;
      case "/":
        newNum = storedNum / inputNum;
        break;

      default:
        return;
    }
    if (newNum > 9999999999999999) {
      newNum = "Too Large";
    } else {
      newNum = Math.round(newNum * 10000) / 10000;
    }
    setStoredNumber(newNum);
    setInput(0);
    setDisplay(newNum);
    setOperant({ value: "", isNeg: false });
    if (newNum === "Too Large") {
      setTimeout(() => {
        handleClear();
      }, 3000);
    }
  }

  return (
    <>
      <div className="main">
        <Display props={display} name="display" />

        <div className="buttons">
          <div className="top-btns">
            <button id="clear" onClick={handleClear}>
              AC
            </button>
            <button id="equals" onClick={handleEquals}>
              =
            </button>
          </div>

          <div className="bottom-btns">
            <div className="numbers">
              {numbers.map((number) => (
                <CalcButtons props={number} handleOnClick={handleNumberClick} />
              ))}
              <DecimalButton input={input} handleOnClick={handleNumberClick} />
            </div>

            <div className="operations">
              {operations.map((operation) => (
                <CalcButtons
                  props={operation}
                  handleOnClick={handleOperationClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
