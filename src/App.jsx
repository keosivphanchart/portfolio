import ScrollProgress from "./components/layout/ScrollProgress.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Stats from "./components/sections/Stats.jsx";
import Services from "./components/sections/Services.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skills.jsx";
import TechCloud from "./components/sections/TechCloud.jsx";
import Quote from "./components/sections/Quote.jsx";
import Experience from "./components/sections/Experience.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import BackToTop from "./components/layout/BackToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Skills />
      <TechCloud />
      <Quote />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
