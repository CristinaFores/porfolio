import React from "react";
import About from "../About/About";

import Navbar from "../Navbar/Navbar";
import SectionCard from "../SectionCard/SectionCard";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <>
      <Navbar />

      <AppStyled>
        <About />
        <SectionCard />
      </AppStyled>
    </>
  );
}

export default App;
