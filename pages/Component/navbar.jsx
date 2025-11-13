import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { navLinks } from "../../constants/index";

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        // Dynamically import ScrollTrigger only on client side
        if (typeof window !== 'undefined') {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);
                
                gsap.to(navRef.current, {
                    backgroundColor: '#F9F9F6#F8FAF6',
                    backdropFilter: 'blur(10px)',
                    duration: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top -50px',
                        end: 'top -51px',
                        toggleActions: 'play none none reverse'
                    }
                });

                // Cleanup function stored for useEffect return
                return () => {
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                };
            });
        }
    }, []);
    return (
        <nav ref={navRef} style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s ease'
        }}>            
        <div className="nav-logo">
        <a href="home" style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit'
        }}>
         <img 
            src="/images/PlantsLogo.png" 
            alt="logo" 
            style={{
                width: '100%',
                maxWidth: '60px',
                height: 'auto',
                marginRight: '10px',
                objectFit: 'contain'
            }}
         />
         <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            margin: 0,
            fontWeight: 'bold',
            color: '#2d5a27'
         }}>Plants Studio</p>
        </a>
        </div>
        
        <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '2rem'
        }}>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`} style={{
                textDecoration: 'none',
                color: '#2d5a27',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
             }}>{link.title}</a>
			</li>
		 ))}
		</ul>
        </nav>
    )
}