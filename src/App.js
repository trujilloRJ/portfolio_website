import React, { useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Projects />
    </div>
  );
}

export default App;
