import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Debate from "../Components/Debate";
import Conclave from "../Components/Conclave";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Media from "../Components/Media";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTarget;

    if (!scrollTarget) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      if (scrollTarget === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetElement = document.getElementById(scrollTarget);
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      if (!targetElement) {
        return;
      }

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.key, location.state]);

  return (
    <>
      <section id="home">
        <Hero />
     
      </section>
      <section id="about">
       
        <About />
      </section>

      <section id="debate">
        <Debate />
      </section>

      <section id="conclave">
        <Conclave />
      </section>

      <section id="media">
        <Media />
        <CTA />
        
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
