import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Navbar from "../Navbar/Navbar";
import SectionCard from "../SectionCard/SectionCard";
import Skills from "../Skills/Skills";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <>
      <Navbar />
      <AppStyled>
        <About />
        <Skills />
        <SectionCard />
        <Contact />
      </AppStyled>
    </>
  );
}

export default App;
