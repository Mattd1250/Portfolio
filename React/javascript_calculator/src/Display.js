import React from "react";

export default function Display({ props, name, divId }) {
  return (
    <>
      <label>
        <input id={name} value={props} type="text" />
      </label>
    </>
  );
}
