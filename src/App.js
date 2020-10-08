import React from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Projects />
      <Bio />
      <Contact />
    </div>
  );
}

export default App;
