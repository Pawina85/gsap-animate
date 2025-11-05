import {gsap} from 'gsap';
import {useEffect, useRef} from 'react';
import { gallerylist } from "../../constants/index";

export default function Gallery() {
    return (
        <section id="gallery" className ="noisy"> 
            <h1>Our Plants</h1>
            <div className="gallery-grid">
                {gallerylist.map((plant, index) => (
                    <div key={index} className="plant-card">
                        <img 
                            src={plant.image} 
                            alt={plant.name}
                            className="plant-image"
                        />
                        <div className="plant-info">
                            <h3>{plant.name}</h3>
                            <p className="price">{plant.price}</p>
                            <p className="description">{plant.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
