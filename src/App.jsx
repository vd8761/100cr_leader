import { useLayoutEffect, useRef } from 'react';
import { NavBar } from './components/NavBar.jsx';
import { ChapterRail } from './components/ChapterRail.jsx';
import { Hero } from './sections/Hero.jsx';
import { About } from './sections/About.jsx';
import { Book } from './sections/Book.jsx';
import { Newsletter } from './sections/Newsletter.jsx';
import { Episodes } from './sections/Episodes.jsx';
import { Speaking } from './sections/Speaking.jsx';
import { Initiatives } from './sections/Initiatives.jsx';
import { FinalCTA } from './sections/FinalCTA.jsx';
import { Circle } from './sections/Circle.jsx';
import { Footer } from './sections/Footer.jsx';
import { initAnimations } from './lib/initAnimations.js';

import './styles/tokens.css';
import './styles/global.css';
import './styles/app.css';
import './styles/content.css';

export default function App() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const apiRef = useRef(null);

  useLayoutEffect(() => {
    const api = initAnimations({ wrapper: wrapperRef.current, content: contentRef.current });
    apiRef.current = api;
    return () => api.cleanup();
  }, []);

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const smoother = apiRef.current?.getSmoother();
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    if (smoother) smoother.scrollTo(y, true);
    else window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" />

      <NavBar onNavigate={navigate} />
      <ChapterRail onNavigate={navigate} />

      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <main>
            <Hero />
            <About />
            <Book onNavigate={navigate} />
            <Newsletter />
            <Episodes />
            <Speaking />
            <Initiatives />
            <FinalCTA />
            <Circle />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
