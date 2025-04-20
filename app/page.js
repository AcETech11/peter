import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
    </>
  );
}
