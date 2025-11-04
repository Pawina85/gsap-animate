import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { TiShoppingCart } from "react-icons/ti";


export default function CartLogin() {
    return (
        <section style={{
            padding: '2rem',
            backgroundColor: 'white'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center', // <- fixed spelling
                justifyContent: 'space-around',
                marginBottom: '1rem',
                width: '100%'
            }}>
                <h1 style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '2.5rem',
                    margin: 0
                }}>
                    <TiShoppingCart /> 
                    <span>Order summary</span>
                </h1>
                <p style={{ margin: 0 }}>Remove all</p>
            </div>
        </section>
    )
}