import React from "react";

function DecimalButton({ input, handleOnClick }) {
  function checkForDecimalInInput(e) {
    const inputHasDecimal = /\./;
    if (inputHasDecimal.test(input) === true) return;
    handleOnClick(".");
  }

  return (
    <button id="decimal" onClick={checkForDecimalInInput}>
      .
    </button>
  );
}

export default DecimalButton;
