import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Grow Calm<br />Live Green</h1>
            </div>
            <div className="hero-image">
                <img
                    src="/images/pic1.png"
                    alt="Plant decoration"
                    className="left-leaf"
                />
            </div>
        </section>
    );
}
