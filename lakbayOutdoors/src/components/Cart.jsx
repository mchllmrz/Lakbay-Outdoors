import React from 'react';
import '../styles/Cart.css';
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from './CartContext.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { 
        isCartOpen, 
        toggleCart, 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        cartTotal 
    } = useCart();

    const shippingCost = 150; 
    const navigate = useNavigate();

    return (
        <>
            <div 
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
                onClick={toggleCart}
            ></div>

            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                
        
                <div className="cart-header">
                    <h2>Shopping Cart ({cartItems.length})</h2>
                    <button className="close-cart-btn" onClick={toggleCart}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items-container">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <Link to="/Shop">
                            <button className='start-shopping-btn' onClick={toggleCart}>Start Shopping</button>
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <span className="cart-item-cat">{item.category}</span>
                                    
                                    <div className="cart-qty-row">
                                        <div className="qty-selector">
                                            <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14}/></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14}/></button>
                                        </div>
                                        <button 
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-item-price">
                                    ₱{(item.price * item.quantity).toLocaleString()}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / Checkout */}
                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₱{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>₱{shippingCost}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>₱{(cartTotal + shippingCost).toLocaleString()}</span>
                            </div>
                        </div>
                        <button className="checkout-btn" onClick={() => {
                            toggleCart();
                            navigate('/Checkout');
                            
                        }}>
                            Checkout</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;