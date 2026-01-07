import React, { useState } from 'react';
import '../styles/Shop.css';
import { Search, ShoppingCart, Heart, Star } from "lucide-react";
import { products } from '../data/mockdata';
import ProductModal from './ProductModal'; 
import { useCart } from './CartContext';

function Shop() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    
  
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory.toLowerCase();
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="shop-section">
            <div className="shop-container">
            
                
                 <h2 className="shop-title">Shop Equipment</h2>

                <div className="shop-controls">
                  
                    <div className="search-wrapper">
                        <Search className="search-icon" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search gear..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="filter-buttons">
                        {['All', 'Hiking', 'Climbing', 'Camping'].map((cat) => (
                            <button 
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>


             
                <div className="product-grid">
                    {filteredProducts.map((item) => (
                       
                        <div 
                            className="product-card" 
                            key={item.id} 
                            onClick={() => handleProductClick(item)} 
                            style={{ cursor: 'pointer' }} 
                        >
                            <div className="product-img-box">
                                <img src={item.image} alt={item.name} onError={(e) => e.target.src='https://via.placeholder.com/300'} />
                              
                            </div>

                            <div className="product-details">
                                <div className="product-rating">
                                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                                    <span>4.5 (20)</span>
                                </div>
                                <h3>{item.name}</h3>
                                <p className="product-desc">{item.description}</p>
                                <div className="product-bottom">
                                    <span className="product-price">₱{item.price.toLocaleString()}</span>
                                    <button className="add-cart-btn" onClick={(e) => {e.stopPropagation();
                                                                                    addToCart(item);
                                    }}>
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={handleCloseModal} 
                />
            )}
        </section>
    );
}

export default Shop;