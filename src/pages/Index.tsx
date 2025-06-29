
import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Games from '../components/Games';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <section ref={addToRefs} className="opacity-0 transition-opacity duration-1000">
        <Hero />
      </section>
      
      <section ref={addToRefs} className="opacity-0 transition-opacity duration-1000">
        <About />
      </section>
      
      <section ref={addToRefs} className="opacity-0 transition-opacity duration-1000">
        <Games />
      </section>
      
      <section ref={addToRefs} className="opacity-0 transition-opacity duration-1000">
        <Skills />
      </section>
      
      <section ref={addToRefs} className="opacity-0 transition-opacity duration-1000">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
