import "./App.css";
import Banner from "./components/banner/Banner";
import Client from "./components/client/Client";
import Experience from "./components/experience/Experience";
import { Sugar } from "react-preloaders";
import Header from "./components/header/Header";
import Price from "./components/price/Price";
import Recent from "./components/recent/Recent";
import Skills from "./components/skills/Skills";
import Talk from "./components/talk/Talk";
import React, { useState, useEffect } from "react";
function App() {

  return (
    <>
    
        <div >
          <Header />
          <Banner />
          <Experience />
          <Recent />
          <Price />
          <Skills />
          <Client />
          <Talk />
        </div>
      
    </>
  );
}

export default App;
