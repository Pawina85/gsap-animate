import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';


export default function Navbar() {
    return (
        <nav style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#f8f9fa'
        }}>            
        <div className="nav-logo">
        <a href="home" style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            // justifyContent: 'center',
            textDecoration: 'none',
            color: 'inherit',
            width: '100%'
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
        </nav>
    )
}