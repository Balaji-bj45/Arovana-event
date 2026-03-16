import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Debate from "../Components/Debate";
import Conclave from "../Components/Conclave";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Media from "../Components/Media";

function HomePage() {
  return (
    <>
      <Navbar />
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
