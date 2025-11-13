import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
          // Title animation
          gsap.fromTo(titleRef.current, 
            { 
              opacity: 0, 
              y: 50 
            },
            {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Form animation
      gsap.fromTo(formRef.current.children,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Info section animation
      gsap.fromTo(infoRef.current.children,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
        }, containerRef);

        return () => ctx.revert();
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <section ref={containerRef} style={{
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Title */}
      <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2d5a27',
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>
          Let us Know
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Have questions about our plants or need gardening advice? We'd love to hear from you!
        </p>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '60px',
        alignItems: 'start'
      }}>
        {/* Contact Form */}
        <div ref={formRef}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#2d5a27',
            marginBottom: '30px',
            fontWeight: '600'
          }}>
            Send us a Message
          </h3>
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#333',
                fontWeight: '500'
              }}>
                Email Address 
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4a7c59'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#333',
                fontWeight: '500'
              }}>
                How can we help your space grow?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                style={{
                  width: '100%',
                  height: '100px',
                  padding: '12px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4a7c59'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '14px 30px',
                backgroundColor: isSubmitting ? '#ccc' : '#4a7c59',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                boxShadow: '0 4px 15px rgba(74, 124, 89, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#3d6b4a';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(74, 124, 89, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#4a7c59';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(74, 124, 89, 0.3)';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {submitMessage && (
            <div style={{
              marginTop: '20px',
              padding: '12px 20px',
              backgroundColor: '#d4edda',
              color: '#155724',
              border: '1px solid #c3e6cb',
              borderRadius: '8px',
              fontSize: '0.95rem'
            }}>
              {submitMessage}
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div ref={infoRef} style={{display: 'flex', flexDirection: 'column', gap: '25px', borderLeft: '2px solid #e0e0e0', paddingLeft: '20px'}}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#2d5a27',
            marginBottom: '30px',
            fontWeight: '600'
          }}>
            Contact Information
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#4a7c59',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontSize: '1.2rem' }}>📍</span>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '1.1rem' }}>Address</h4>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.5' }}>
                  123 Garden Street<br />
                  Plant City, PC 12345<br />
                  Bangkok, Thailand
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#4a7c59',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontSize: '1.2rem' }}>📞</span>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '1.1rem' }}>Phone</h4>
                <p style={{ margin: 0, color: '#666' }}>
                  +66 (555) 123-4567
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#4a7c59',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontSize: '1.2rem' }}>✉️</span>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '1.1rem' }}>Email</h4>
                <p style={{ margin: 0, color: '#666' }}>
                  info@planstudio.com
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#4a7c59',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: 'white', fontSize: '1.2rem' }}>🕒</span>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '1.1rem' }}>Business Hours</h4>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.5' }}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div style={{ marginTop: '40px' }}>
            <h4 style={{
              fontSize: '1.2rem',
              color: '#2d5a27',
              marginBottom: '20px'
            }}>
              Follow Us
            </h4>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  border: '2px solid #4a7c59',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1877f2';
                  e.target.style.borderColor = '#1877f2';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.borderColor = '#4a7c59';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a7c59">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  border: '2px solid #4a7c59',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                  e.target.style.borderColor = '#e1306c';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.querySelector('svg').setAttribute('fill', 'white');
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f8f9fa';
                  e.target.style.borderColor = '#4a7c59';
                  e.target.style.transform = 'translateY(0)';
                  e.target.querySelector('svg').setAttribute('fill', '#4a7c59');
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a7c59">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  border: '2px solid #4a7c59',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1da1f2';
                  e.target.style.borderColor = '#1da1f2';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.querySelector('svg').setAttribute('fill', 'white');
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.borderColor = '#4a7c59';
                  e.target.style.transform = 'translateY(0)';
                  e.target.querySelector('svg').setAttribute('fill', '#4a7c59');
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a7c59">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
