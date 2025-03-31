import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = useRef<(HTMLElement | null)[]>([]); // Inicializamos como un array vacío
  const isScrolling = useRef(false);

  // Secciones disponibles
  const sectionIds = ["home", "about", "skills", "projects", "contact"];

  // Configuración de swipe
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleNavigation("down"),
    onSwipedDown: () => handleNavigation("up"),
    trackMouse: true,
  });

  // Navegación entre secciones
  const handleNavigation = (direction: "up" | "down") => {
    if (isScrolling.current) return;

    const newIndex =
      direction === "down"
        ? Math.min(activeSection + 1, sectionIds.length - 1)
        : Math.max(activeSection - 1, 0);

    if (newIndex !== activeSection) {
      isScrolling.current = true;
      setActiveSection(newIndex);
      sections.current[newIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Resetear flag después de 1s
      setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    }
  };

  // Evento de rueda del ratón
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 1) return; // Ignorar scrolls pequeños
      handleNavigation(e.deltaY > 0 ? "down" : "up");
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection]);

  return (
    <div className="app-container" {...swipeHandlers}>
      <Navbar
        activeSection={activeSection}
        handleNavigation={(target) => {
          if (typeof target === "number") {
            setActiveSection(target);
            sections.current[target]?.scrollIntoView({ behavior: "smooth" });
          } else {
            handleNavigation(target);
          }
        }}
      />

      <main className="main-container">
        <section
          id="home"
          className="section"
          ref={(el) => {
            sections.current[0] = el!;
          }}
        >
          <Hero />
        </section>

        <section
          id="about"
          className="section"
          ref={(el) => {
            sections.current[1] = el!;
          }}
        >
          <About />
        </section>

        <section
          id="skills"
          className="section"
          ref={(el) => {
            sections.current[2] = el!;
          }}
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="section"
          ref={(el) => {
            sections.current[3] = el!;
          }}
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="section"
          ref={(el) => {
            sections.current[4] = el!;
          }}
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;