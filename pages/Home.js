import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-bg hero-section d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="display-2 fw-bold mb-4 animate-slide-left">Eagle Store</h1>
          <p className="lead mb-4 fs-3 animate-slide-right animate-delay-1">Premium Quality Clothing for Everyone</p>
          <p className="mb-5 fs-5 animate-slide-up animate-delay-2">Discover the latest fashion trends with our curated collection of high-quality clothing</p>
          <Link to="/products" className="btn btn-primary btn-lg px-5 py-3 animate-slide-up animate-delay-3">
            <i className="fas fa-shopping-bag me-2"></i>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3 animate-slide-up">Shop by Category</h2>
            <p className="lead text-muted animate-slide-up animate-delay-1">Explore our diverse collection of premium clothing</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 animate-on-scroll">
              <Link to="/category/t-shirt" className="text-decoration-none">
                <div className="card category-card border-0 shadow-lg h-100 hover-lift">
                  <div className="card-img-top position-relative overflow-hidden" style={{height: '300px'}}>
                    <img 
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="T-Shirts"
                      className="img-fluid w-100 h-100"
                      style={{objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                      <h3 className="text-white fw-bold animate-bounce-in">T-Shirts</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="col-lg-4 col-md-6 animate-on-scroll">
              <Link to="/category/pants" className="text-decoration-none">
                <div className="card category-card border-0 shadow-lg h-100 hover-lift">
                  <div className="card-img-top position-relative overflow-hidden" style={{height: '300px'}}>
                    <img 
                      src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Pants"
                      className="img-fluid w-100 h-100"
                      style={{objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                      <h3 className="text-white fw-bold animate-bounce-in animate-delay-1">Pants</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="col-lg-4 col-md-6 animate-on-scroll">
              <Link to="/category/accessories" className="text-decoration-none">
                <div className="card category-card border-0 shadow-lg h-100 hover-lift">
                  <div className="card-img-top position-relative overflow-hidden" style={{height: '300px'}}>
                    <img 
                      src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Accessories"
                      className="img-fluid w-100 h-100"
                      style={{objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                      <h3 className="text-white fw-bold animate-bounce-in animate-delay-2">Accessories</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3 animate-slide-up">Why Choose Eagle Store?</h2>
            <p className="lead text-muted animate-slide-up animate-delay-1">We're committed to providing the best shopping experience</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 animate-on-scroll">
              <div className="card border-0 shadow-sm h-100 text-center p-4 hover-lift hover-glow">
                <div className="card-body">
                  <div className="mb-4">
                    <i className="fas fa-gem text-primary fs-1 animate-float"></i>
                  </div>
                  <h4 className="card-title fw-bold mb-3 animate-slide-up">Quality Materials</h4>
                  <p className="card-text text-muted animate-slide-up animate-delay-1">
                    We source only the finest materials to ensure durability, comfort, and style in every piece. 
                    Each item undergoes rigorous quality checks before reaching you.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 animate-on-scroll">
              <div className="card border-0 shadow-sm h-100 text-center p-4 hover-lift hover-glow">
                <div className="card-body">
                  <div className="mb-4">
                    <i className="fas fa-shipping-fast text-primary fs-1 animate-float animate-delay-1"></i>
                  </div>
                  <h4 className="card-title fw-bold mb-3 animate-slide-up animate-delay-1">Fast Delivery</h4>
                  <p className="card-text text-muted animate-slide-up animate-delay-2">
                    Quick and reliable delivery service with tracking. We ensure your orders reach you safely 
                    and on time, with hassle-free returns if needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 animate-on-scroll">
              <div className="card border-0 shadow-sm h-100 text-center p-4 hover-lift hover-glow">
                <div className="card-body">
                  <div className="mb-4">
                    <i className="fas fa-headset text-primary fs-1 animate-float animate-delay-2"></i>
                  </div>
                  <h4 className="card-title fw-bold mb-3 animate-slide-up animate-delay-2">24/7 Support</h4>
                  <p className="card-text text-muted animate-slide-up animate-delay-3">
                    Our dedicated customer support team is available around the clock to help you with any 
                    questions or concerns. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3 animate-slide-up">Visit Our Store</h2>
            <p className="lead text-muted animate-slide-up animate-delay-1">Find us at our physical location or connect with us online</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-8 animate-on-scroll">
              <div className="card border-0 shadow-sm h-100 hover-lift">
                <div className="card-body p-0">
                  <iframe
                   src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d881123.6121947068!2d31.643271529727308!3d30.382506572684473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d30.9410648!2d31.1366709!4m3!3m2!1d29.8485074!2d31.3289738!5e0!3m2!1sar!2seg!4v1751038898298!5m2!1sar!2seg"
                    width="100%"
                    height="400"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 animate-on-scroll">
              <div className="card border-0 shadow-sm h-100 hover-lift hover-glow">
                <div className="card-body p-4">
                  <h4 className="card-title fw-bold mb-4 animate-slide-up">Get in Touch</h4>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2 animate-slide-up animate-delay-1">
                      <i className="fas fa-map-marker-alt text-primary me-2"></i>
                      Address
                    </h6>
                    <p className="text-muted mb-0 animate-slide-up animate-delay-2">
                    شارع رستم تقاطع لاظوغلى _حلوان _ محافظة القاهرة
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2 animate-slide-up animate-delay-2">
                      <i className="fas fa-phone text-primary me-2"></i>
                      Phone
                    </h6>
                    <p className="text-muted mb-0 animate-slide-up animate-delay-3">+20 (1116229312)</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2 animate-slide-up animate-delay-3">
                      <i className="fas fa-envelope text-primary me-2"></i>
                      Email
                    </h6>
                    <p className="text-muted mb-0 animate-slide-up animate-delay-4">info@eaglestore.com</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2 animate-slide-up animate-delay-4">
                      <i className="fas fa-clock text-primary me-2"></i>
                      Store Hours
                    </h6>
                    <p className="text-muted mb-0 animate-slide-up animate-delay-4">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                  
                  <div className="d-flex gap-3 justify-content-center">
                    <a href="https://facebook.comhttps://www.facebook.com/eagleStore41" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary hover-glow">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary hover-glow">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/eaaglestore_4/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary hover-glow">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 