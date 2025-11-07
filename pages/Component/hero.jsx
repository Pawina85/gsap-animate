import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state for text only
            gsap.set(titleRef.current, {
                opacity: 0
            });

            // Create timeline for entrance animations
            const tl = gsap.timeline();

            // Title animation - slide up from bottom with stagger effect
            tl.fromTo(titleRef.current, 
                { 
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    delay: 0.5
                }
            );

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={heroRef}
            style={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff'
            }}
        >
            {/* Content */}
            <div 
                ref={titleRef}
                style={{
                    position: 'relative',
                    zIndex: 3,
                    textAlign: 'center',
                    color: '#2c3e50',
                    padding: '0 2rem',
                    maxWidth: '800px'
                }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                    color: '#2c3e50'
                }}>
                    Grow Calm<br />
                    <span style={{
                        color: '#4a7c59',
                        fontWeight: '400'
                    }}>
                        Live Green
                    </span>
                </h1>
                
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    color: '#6c757d',
                    maxWidth: '500px',
                    margin: '0 auto 2rem auto',
                    fontWeight: '400'
                }}>
                    Transform your space into a green sanctuary with our curated collection of beautiful plants.
                </p>

                <button style={{
                    padding: '12px 32px',
                    backgroundColor: '#4a7c59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(74, 124, 89, 0.2)',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#3d6b4a';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(74, 124, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#4a7c59';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(74, 124, 89, 0.2)';
                }}
                >
                    Explore Collection
                </button>
            </div>

            {/* Responsive styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        height: 80vh;
                        min-height: 500px;
                    }
                }
                
                @media (max-width: 480px) {
                    section {
                        min-height: 400px;
                        height: 70vh;
                    }
                }
            `}</style>
        </section>
    );
}
