import React, { Component } from "react";
import CalcButtons from "./CalcButtons";
import Display from "./Display";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      storedNumber: null,
      operation: null,
      answer: 0,
    };
  }

  render() {
    let newInput = [];

    const handleOperations = (e) => {
      let stored = this.state.display;
      this.setState({
        storedNumber: stored,
        operation: e.target.value,
        display: 0,
      });
    };

    const mathFunction = (operant, firstNumber, secondNumber) => {
      switch (operant) {
        case "+":
          return firstNumber + secondNumber;

        case "-":
          return firstNumber - secondNumber;

        case "*":
          return firstNumber * secondNumber;

        case "/":
          return firstNumber / secondNumber;

        default:
          break;
      }
    };

    const handleEqual = () => {
      const operant = this.state.operation;
      const firstNumber = parseFloat(this.state.storedNumber);
      const secondNumber = parseFloat(this.state.display);
      let currentAnswer = mathFunction(operant, firstNumber, secondNumber);
      this.setState({
        display: 0,
        storedNumber: currentAnswer,
        answer: currentAnswer,
      });
    };

    const handleNumberClick = (e) => {
      let currentDisplay = Number(this.state.display);
      if (currentDisplay === 0) {
        newInput = e.target.value;
      } else {
        newInput = this.state.display + e.target.value;
      }
      this.setState({
        display: newInput,
      });
    };

    const handleClear = () => {
      this.setState({
        display: 0,
      });
    };
    const numbers = [
      {
        id: "zero",
        character: 0,
      },
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

    return (
      <div>
        <button id="equals" onClick={handleEqual}>
          =
        </button>
        {numbers.map((number) => (
          <CalcButtons props={number} handleOnClick={handleNumberClick} />
        ))}
        {operations.map((operation) => (
          <CalcButtons props={operation} handleOnClick={handleOperations} />
        ))}
        <button id="decimal">.</button>
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <Display props={this.state} />
        {console.log("display", this.state.display)}
        {console.log("storedNumber", this.state.storedNumber)}
        {console.log("operation", this.state.operation)}
        {console.log("answer", this.state.answer)}
      </div>
    );
  }
}

export default App;
