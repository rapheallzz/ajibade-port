"use client";

import { useState, useCallback } from "react";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Cursor />
      <Loader onComplete={handleLoadComplete} />

      <div
        className={`transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Work />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
