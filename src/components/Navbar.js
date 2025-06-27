import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalItems);
        console.log('Cart updated:', totalItems, 'items'); // Debug log
      } catch (error) {
        console.error('Error updating cart count:', error);
        setCartCount(0);
      }
    };

    // Initial load
    updateCartCount();

    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);
    
    // Listen for custom cart update events
    window.addEventListener('cartUpdated', updateCartCount);

    // Force update every 5 seconds for testing
    const interval = setInterval(updateCartCount, 5000);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`custom-navbar navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary animate-bounce-in" to="/" onClick={closeMenu}>
          <i className="fas fa-store me-2 animate-float"></i>
          Eagle Store
        </Link>
        
        {/* Cart Button - Always Visible */}
        <Link 
          to="/cart" 
          className="btn btn-primary position-relative d-flex align-items-center order-lg-3" 
          onClick={closeMenu}
          style={{
            background: '#2563eb',
            border: 'none',
            borderRadius: '25px',
            padding: '8px 16px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            color: 'white',
            minWidth: 'auto',
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#1d4ed8';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.2)';
          }}
        >
          <i className="fas fa-shopping-cart" style={{ fontSize: '1.1rem' }}></i>
          <span className="d-none d-md-inline ms-2">Cart</span>
          {cartCount > 0 && (
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                minWidth: '1.5rem',
                height: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: cartCount > 0 ? 'pulse 2s infinite' : 'none',
                boxShadow: '0 2px 4px rgba(220, 53, 69, 0.3)'
              }}
            >
              {cartCount > 99 ? '99+' : cartCount}
              <span className="visually-hidden">items in cart</span>
            </span>
          )}
        </Link>
        
        <button
          className="navbar-toggler d-lg-none mobile-toggle order-lg-2"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{ display: 'block', marginLeft: '10px', marginRight: '10px' }}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '1.2rem', color: '#2563eb' }}></i>
        </button>
        
        <div 
          className={`collapse navbar-collapse order-lg-1 ${isMenuOpen ? 'show' : ''}`} 
          id="navbarNav"
          style={{ 
            display: isMenuOpen ? 'block' : 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
            <li className="nav-item navbar-item-animate" style={{ display: 'flex' }}>
              <Link 
                className="nav-link fw-semibold hover-lift" 
                to="/" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item navbar-item-animate" style={{ display: 'flex' }}>
              <Link 
                className="nav-link fw-semibold hover-lift" 
                to="/products" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fas fa-shopping-bag me-2"></i>
                Products
              </Link>
            </li>
            <li className="nav-item navbar-item-animate" style={{ display: 'flex' }}>
              <button 
                className="nav-link btn btn-link fw-semibold text-decoration-none hover-lift" 
                onClick={() => scrollToSection('categories')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#374151',
                  border: 'none',
                  background: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-th-large me-2"></i>
                Categories
              </button>
            </li>
            <li className="nav-item navbar-item-animate" style={{ display: 'flex' }}>
              <button 
                className="nav-link btn btn-link fw-semibold text-decoration-none hover-lift" 
                onClick={() => scrollToSection('contact')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#374151',
                  border: 'none',
                  background: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-phone me-2"></i>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 