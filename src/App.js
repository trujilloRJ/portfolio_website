import React, { useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import Bio from "./components/Bio/Bio";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Projects />
      <Bio />
    </div>
  );
}

export default App;
