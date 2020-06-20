import React from "react";
import "./App.css";
import ResourceType from "./ResourceType";
import WindowWidth from "./WindowWidth";
import ResourceTypeCleanUp from "./ResourceTypeCleanUp";

function App() {
  return (
    <div className="App">
      <ResourceTypeCleanUp />
      <WindowWidth />
      <ResourceType />
    </div>
  );
}

export default App;
