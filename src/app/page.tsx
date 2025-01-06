'use client'

import { useEffect, useRef, useState } from "react";
import Lenis from 'lenis'
import Hero from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState({
    setIsVisible: setIsVisible,
    title: '',
    images: [''],
    desc: '',
    techStack: [''],
    gitLink: ''
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  
  return (
    <main>
      <Hero ref={projectsRef} />
      <Projects ref={projectsRef} isVisible={isVisible} setIsVisible={setIsVisible} modalData={modalData} setModalData={setModalData} />
    </main>
  );
}
