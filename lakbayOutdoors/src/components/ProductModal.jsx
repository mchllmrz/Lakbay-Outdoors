import React from 'react';
import '../styles/ProductModal.css';
import { X, Check } from "lucide-react";
import { useCart } from './CartContext';

function ProductModal({ product, onClose }) {
    const { addToCart } = useCart();

    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                
                <button className="modal-close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-image-section">
                    <img src={product.image} alt={product.name} />
                </div>

                
                <div className="modal-info-section">
                    <span className="modal-category">{product.category}</span>
                    
                    <h2 className="modal-title">{product.name}</h2>
                    <h3 className="modal-price">₱{product.price.toLocaleString()}</h3>

                    <p className="modal-description">
                        {product.description}
                        <br /><br />
                        Experience the outdoors with the {product.name}. Designed for the rugged 
                        Philippine terrain, this gear ensures safety and comfort on your next adventure.
                    </p>

                    
                    <ul className="modal-features">
                        <li><Check size={16} className="check-icon"/> High durability materials</li>
                        <li><Check size={16} className="check-icon"/> Lightweight design</li>
                        <li><Check size={16} className="check-icon"/> Tested in PH mountains</li>
                    </ul>

                    <button className="modal-add-btn" onClick={() => {
                        addToCart(product);
                        onClose();
                    }}>
                        ADD TO CART
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductModal;