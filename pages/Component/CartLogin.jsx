import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { CartLogin as cartData } from "../../constants/index";

export default function CartLogin() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Fiddle Leaf Fig",
            sku: "#PLT001FLF2024",
            size: "Medium (12-inch pot)",
            care: "Bright indirect light • Weekly watering",
            price: 45,
            quantity: 2,
            image: "/images/FiddleLeafFig.png",
            description: "Large glossy leaves that bring modern jungle vibes indoors."
        },
        {
            id: 2,
            name: "Bird of Paradise",
            sku: "#PLT002BOP2024",
            size: "Large (14-inch pot)",
            care: "Bright light • Bi-weekly watering",
            price: 65,
            quantity: 1,
            image: "/images/BirdofParadise.png",
            description: "Tropical beauty with tall, sculptural leaves for bright rooms."
        },
        {
            id: 3,
            name: "Money Tree",
            sku: "#PLT003MT2024",
            size: "Small (8-inch pot)",
            care: "Low to medium light • Monthly watering",
            price: 40,
            quantity: 1,
            image: "/images/MoneyPlant.png",
            description: "Symbol of good fortune and a refreshing indoor accent."
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const shippingCost = 0; // Free shipping
    const total = getSubtotal() + shippingCost;

    return (
        <section id="cart-login" className="cart-login" style={{
            padding: '2rem 1.5rem',
            backgroundColor: 'white',
            minHeight: '70vh'
        }}>
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                border: '1px solid #e9ecef',
                boxShadow: '0 3px 15px rgba(0,0,0,0.06)'
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                        fontWeight: 'bold',
                        color: '#333',
                        margin: 0
                    }}>
                        My Cart
                    </h1>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        ← Continue shopping
                    </button>
                </div>

                {/* Table Header */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
                    gap: 'clamp(1rem, 3vw, 2rem)',
                    padding: '1rem 0',
                    borderBottom: '2px solid #dee2e6',
                    fontSize: 'clamp(10px, 2vw, 12px)',
                    fontWeight: 'bold',
                    color: '#495057',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    <div>PRODUCT</div>
                    <div style={{ textAlign: 'center' }}>PRICE</div>
                    <div style={{ textAlign: 'center' }}>QTY</div>
                    <div style={{ textAlign: 'center' }}>TOTAL</div>
                    <div></div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                    <div key={item.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
                        gap: 'clamp(1rem, 3vw, 2rem)',
                        padding: 'clamp(1rem, 2.5vw, 1.5rem) 0',
                        borderBottom: '1px solid #dee2e6',
                        alignItems: 'center'
                    }}>
                        {/* Product Info */}
                        <div style={{ 
                            display: 'flex', 
                            gap: 'clamp(0.75rem, 2vw, 1rem)', 
                            alignItems: 'center'
                        }}>
                            <img 
                                src={item.image} 
                                alt={item.name}
                                style={{
                                    width: 'clamp(60px, 10vw, 80px)',
                                    height: 'clamp(60px, 10vw, 80px)',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    border: '2px solid #e9ecef'
                                }}
                            />
                            <div>
                                <h3 style={{ 
                                    margin: '0 0 0.3rem 0', 
                                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
                                    color: '#212529',
                                    fontWeight: '600'
                                }}>
                                    {item.name}
                                </h3>
                                <p style={{ 
                                    margin: '0 0 0.15rem 0', 
                                    fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', 
                                    color: '#6c757d',
                                    fontWeight: '500'
                                }}>
                                    {item.sku}
                                </p>
                                <p style={{ 
                                    margin: '0 0 0.15rem 0', 
                                    fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', 
                                    color: '#4a7c59',
                                    fontWeight: '500'
                                }}>
                                    Size: {item.size}
                                </p>
                                <p style={{ 
                                    margin: '0 0 0.15rem 0', 
                                    fontSize: 'clamp(0.65rem, 1.3vw, 0.75rem)', 
                                    color: '#6c757d',
                                    fontStyle: 'italic'
                                }}>
                                    {item.description}
                                </p>
                                <p style={{ 
                                    margin: 0, 
                                    fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', 
                                    color: '#495057',
                                    fontWeight: '500'
                                }}>
                                    Care: {item.care}
                                </p>
                            </div>
                        </div>

                        {/* Price */}
                        <div style={{ 
                            textAlign: 'center', 
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', 
                            fontWeight: '600',
                            color: '#495057'
                        }}>
                            ${item.price.toFixed(2)}
                        </div>

                        {/* Quantity Controls */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    border: '1px solid #ddd',
                                    background: 'white',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                -
                            </button>
                            <span style={{ 
                                minWidth: '30px', 
                                textAlign: 'center',
                                fontSize: '1rem',
                                fontWeight: 'bold'
                            }}>
                                {item.quantity}
                            </span>
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    border: '1px solid #ddd',
                                    background: 'white',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                +
                            </button>
                        </div>

                        {/* Total */}
                        <div style={{ 
                            textAlign: 'center', 
                            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                            fontWeight: 'bold',
                            color: '#4a7c59'
                        }}>
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        {/* Remove Button */}
                        <button 
                            onClick={() => removeItem(item.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '18px',
                                color: '#999'
                            }}
                        >
                            ×
                        </button>
                    </div>
                ))}

                {/* Shipping Options */}
                <div style={{ margin: '2rem 0 1.5rem 0' }}>
                    <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '0.8rem', color: '#333' }}>
                        Choose shipping mode:
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="radio" name="shipping" value="pickup" defaultChecked />
                            <span style={{ fontSize: '1rem' }}>Store pickup ( in 30 min ) • FREE</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="radio" name="shipping" value="delivery" />
                            <div>
                                <div style={{ fontSize: '1rem' }}>Delivery at home ( Under 2 - 4 day ) • 9.90€</div>
                                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>
                                    At 65 Glenridge Ave, Brooklyn, NY 11220
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Summary */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '1.5rem'
                }}>
                    <div style={{ 
                        minWidth: 'clamp(220px, 30vw, 280px)',
                        backgroundColor: 'white',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #dee2e6'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.4rem 0',
                            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                            color: '#6c757d',
                            fontWeight: '500'
                        }}>
                            <span>SUBTOTAL</span>
                            <span>${getSubtotal().toFixed(2)}</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.4rem 0',
                            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                            color: '#6c757d',
                            fontWeight: '500'
                        }}>
                            <span>SHIPPING</span>
                            <span>Free</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.6rem 0',
                            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                            fontWeight: 'bold',
                            borderTop: '1px solid #dee2e6',
                            color: '#212529'
                        }}>
                            <span>TOTAL</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button style={{
                            width: '100%',
                            padding: 'clamp(0.7rem, 2vw, 0.8rem)',
                            backgroundColor: '#4a7c59',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginTop: '0.6rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 3px 8px rgba(74, 124, 89, 0.25)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#3d6b4a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#4a7c59';
                            e.target.style.transform = 'translateY(0)';
                        }}
                        >
                            Checkout ${total.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .cart-login {
                        padding: 1rem !important;
                    }
                    
                    /* Stack items vertically on mobile */
                    .cart-login div[style*="grid-template-columns"] {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 1rem !important;
                    }
                    
                    /* Mobile product info */
                    .cart-login div[style*="gridColumn"] {
                        grid-column: unset !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .cart-login {
                        padding: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
