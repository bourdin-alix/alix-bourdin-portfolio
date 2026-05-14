import type { JSX } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";

export default function App(): JSX.Element {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Hobbies />
        <Quiz />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
