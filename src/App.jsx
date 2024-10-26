import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollUp/Scrollup";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home />
        <About />
        <Education />
        <Skills />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
