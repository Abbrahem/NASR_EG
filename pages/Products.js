import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../firebase';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const getCategoryLabel = (category) => {
    const categoryLabels = {
      't-shirts': 'T-Shirts',
      'shirts': 'Shirts',
      'pants': 'Pants',
      'dresses': 'Dresses',
      'shoes': 'Shoes',
      'accessories': 'Accessories'
    };
    return categoryLabels[category] || category;
  };

  // Function to get category path elements for navigation
  const getCategoryPathElements = (category) => {
    return [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' },
      { label: getCategoryLabel(category), path: `/category/${category}` }
    ];
  };

  const categories = useMemo(() => [
    { value: 'all', label: 'All Products' },
    { value: 't-shirt', label: 'T-Shirts' },
    { value: 'pants', label: 'Pants' },
    { value: 'accessories', label: 'Accessories' }
  ], []);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const result = await getProducts();
      
      if (result.success) {
        setProducts(result.products);
        setFilteredProducts(result.products);
      } else {
        console.error('Error loading products:', result.error);
        // If no products found, you can add sample data or show empty state
        setProducts([]);
        setFilteredProducts([]);
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort products
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, searchTerm]);

  // Removed unused addToCart function - using "View Product" navigation instead

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" style={{width: '3rem', height: '3rem'}}></div>
          <h4>Loading Products...</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-primary mb-3">Our Products</h1>
          <p className="lead text-muted">Discover our amazing collection of high-quality products</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 mb-3">
          <label className="form-label fw-bold">Search Products</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="col-lg-4 col-md-6 mb-3">
          <label className="form-label fw-bold">Category</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-3">
          <label className="form-label fw-bold">Sort By</label>
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Results Info */}
      <div className="row mb-4">
        <div className="col-12">
          <p className="text-muted">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <i className="fas fa-search fa-5x text-muted mb-4"></i>
          <h3 className="text-muted mb-3">No Products Found</h3>
          <p className="text-muted mb-4">
            {products.length === 0 
              ? "No products available at the moment." 
              : "Try adjusting your search criteria or browse all categories."
            }
          </p>
          {searchTerm || selectedCategory !== 'all' ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </button>
          ) : null}
        </div>
      ) : (
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm hover-lift">
                <div className="position-relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{height: '280px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-primary">{getCategoryLabel(product.category)}</span>
                  </div>
                </div>
                
                <div className="card-body d-flex flex-column">
                  {/* Category Path */}
                  <div className="mb-2">
                    <nav aria-label="product-breadcrumb">
                      <ol className="breadcrumb mb-0" style={{fontSize: '0.75rem'}}>
                        {getCategoryPathElements(product.category).map((item, index) => (
                          <li key={index} className={`breadcrumb-item ${index === getCategoryPathElements(product.category).length - 1 ? 'active' : ''}`}>
                            {index === getCategoryPathElements(product.category).length - 1 ? (
                              <span className="text-primary fw-bold">{item.label}</span>
                            ) : (
                              <Link to={item.path} className="text-decoration-none text-muted">
                                {item.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>

                  <div className="mb-3">
                    <h5 className="card-title fw-bold mb-2">{product.name}</h5>
                    <div className="h4 text-success fw-bold mb-0">
                      {product.price} LE
                    </div>
                  </div>
                  
                  <p className="card-text text-muted flex-grow-1">
                    {product.description.length > 80 
                      ? product.description.substring(0, 80) + '...' 
                      : product.description
                    }
                  </p>
                  
                  <div className="mb-3">
                    {/* Colors Preview */}
                    {product.colors && product.colors.length > 0 && (
                      <div className="mb-2">
                        <small className="text-muted fw-bold">Available Colors:</small>
                        <div className="d-flex flex-wrap gap-1 mt-1">
                          {product.colors.slice(0, 3).map(color => (
                            <span key={color} className="badge bg-light text-dark border">
                              {color}
                            </span>
                          ))}
                          {product.colors.length > 3 && (
                            <span className="badge bg-secondary">
                              +{product.colors.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Sizes Preview */}
                    {product.sizes && product.sizes.length > 0 && (
                      <div className="mb-2">
                        <small className="text-muted fw-bold">Available Sizes:</small>
                        <div className="d-flex flex-wrap gap-1 mt-1">
                          {product.sizes.slice(0, 4).map(size => (
                            <span key={size} className="badge bg-light text-dark border">
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 4 && (
                            <span className="badge bg-secondary">
                              +{product.sizes.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-primary w-100 btn-lg"
                    >
                      <i className="fas fa-eye me-2"></i>
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products; 