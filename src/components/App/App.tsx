import React from "react";
import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
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
        <ContactMe />
      </AppStyled>
    </>
  );
}

export default App;
