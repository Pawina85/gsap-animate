import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, imageRef.current], {
                opacity: 0
            });

            // Create timeline for entrance animations
            const tl = gsap.timeline();

            // Title animation - slide in from left with bounce
            tl.fromTo(titleRef.current, 
                { 
                    opacity: 0,
                    x: -100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                    delay: 0.3
                }
            );

            // Image animation - slide in from right with rotation
            tl.fromTo(imageRef.current,
                {
                    opacity: 0,
                    x: 100,
                    rotation: 15,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out"
                },
                "-=0.8" // Start 0.8s before previous animation ends
            );

            // Continuous floating animation for image
            gsap.to(imageRef.current, {
                y: -20,
                rotation: 5,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            // Hover animations
            const heroSection = heroRef.current;
            
            heroSection.addEventListener('mouseenter', () => {
                gsap.to(imageRef.current, {
                    scale: 1.05,
                    rotation: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            heroSection.addEventListener('mouseleave', () => {
                gsap.to(imageRef.current, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={heroRef}
            style={{
                minHeight: '80vh',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                gap: '2rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >

            <div 
                ref={titleRef}
                style={{
                    zIndex: 2,
                    padding: '1rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    color: '#2c3e50',
                    marginBottom: '1rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                    Grow Calm<br />
                    <span style={{
                        color: '#4a7c59',
                        background: 'linear-gradient(45deg, #4a7c59, #6ba36f)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Live Green
                    </span>
                </h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: '#666',
                    maxWidth: '500px',
                    lineHeight: '1.6',
                    marginTop: '1.5rem'
                }}>
                    Transform your space into a green sanctuary. Discover our curated collection of beautiful plants that bring life, peace, and natural elegance to your home.
                </p>
                <button style={{
                    marginTop: '2rem',
                    padding: '15px 30px',
                    backgroundColor: '#4a7c59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(74, 124, 89, 0.3)',
                    transition: 'all 0.3s ease',
                    zIndex: 2
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#3d6b4a';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(74, 124, 89, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#4a7c59';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(74, 124, 89, 0.3)';
                }}
                >
                    Explore Collection
                </button>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                zIndex: 2,
                flex: 1
            }}>
                <img
                    ref={imageRef}
                    src="/images/About.png"
                    alt="Plant decoration"
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        objectFit: 'cover',
                        cursor: 'pointer'
                    }}
                />
            </div>

            {/* Responsive styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        flex-direction: column !important;
                        text-align: center;
                        padding: 1rem !important;
                        min-height: auto !important;
                        gap: 1rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    section {
                        padding: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
