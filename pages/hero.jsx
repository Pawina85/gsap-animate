import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
    return (
        <section id="hero" className ="noisy">
            <h1>Grow Calm Live Green</h1>
            <img
		 src="/images/pic3.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/pic4.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
        </section>
    );
}
