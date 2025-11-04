import {gsap} from 'gsap';
import {useEffect, useRef} from 'react';
import { gallerylist } from "../../constants/index";

export default function Gallery() {
    const handleAddToCart = (plant) => {
        // Add to cart functionality - you can enhance this later
        console.log('Added to cart:', plant);
        alert(`${plant.name} added to cart!`);
    };

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
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '10px'
                            }}>
                                <p className="price">{plant.price}</p>
                                <button 
                                    onClick={() => handleAddToCart(plant)}
                                    style={{
                                        backgroundColor: '#000000',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '20px',
                                        padding: '8px 16px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 2px 8px rgba(74, 124, 89, 0.3)'
                                    }}
                                    // onMouseEnter={(e) => {
                                    //     e.target.style.backgroundColor = '#3d6b4a';
                                    //     e.target.style.transform = 'translateY(-2px)';
                                    //     e.target.style.boxShadow = '0 4px 12px rgba(74, 124, 89, 0.4)';
                                    // }}
                                    // onMouseLeave={(e) => {
                                    //     e.target.style.backgroundColor = '#4a7c59';
                                    //     e.target.style.transform = 'translateY(0)';
                                    //     e.target.style.boxShadow = '0 2px 8px rgba(74, 124, 89, 0.3)';
                                    // }}
                                >
                                     Add to Cart
                                </button>
                            </div>
                            <p className="description">{plant.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
