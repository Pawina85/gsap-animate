import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(
          el.querySelectorAll(".fade-up"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 className="fade-up" style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: '#2E5E4E', 
          marginBottom: '2rem' 
        }}>
          Why Plants Studio?
        </h2>

        <p className="fade-up" style={{ 
          fontSize: '1.2rem', 
          color: '#1E1E1E', 
          lineHeight: '1.8', 
          marginBottom: '2rem' 
        }}>
          Rooted in Thailand, <span style={{ fontWeight: '600' }}>Plants Studio</span> is more than a plant shop — 
          it's a space where design and nature grow together.
        </p>

        <p className="fade-up" style={{ 
          fontSize: '1.1rem', 
          color: '#4B4B4B', 
          lineHeight: '1.8', 
          marginBottom: '2rem' 
        }}>
          Our collection is thoughtfully curated for Thai homes and climates, 
          offering greenery that brings calm, texture, and life to every corner.
        </p>

        <p className="fade-up" style={{ 
          fontSize: '1.1rem', 
          color: '#4B4B4B', 
          lineHeight: '1.8', 
          marginBottom: '2rem' 
        }}>
          Whether you're refreshing your apartment balcony or styling a serene café, 
          we're here to help you create spaces that breathe — naturally, beautifully, and sustainably.
        </p>

        <p className="fade-up" style={{ 
          fontStyle: 'italic', 
          color: '#2E5E4E', 
          fontWeight: '500', 
          marginTop: '3rem',
          fontSize: '1.1rem'
        }}>
          "Because when nature enters your space, peace follows."
        </p>
      </div>
    </section>
  );
}