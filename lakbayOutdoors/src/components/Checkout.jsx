import { useState } from 'react';
import '../styles/Checkout.css';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const { cartTotal, cartItems, showNotification, clearCart } = useCart();
    const navigate = useNavigate();
    const shippingCost = 150; 
    const totalAmount = cartTotal + shippingCost;

    
    const [paymentMethod, setPaymentMethod] = useState('cod');
    

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        showNotification(`Order Placed Successfuly!`);
        clearCart();
        navigate('/'); 

    };
      
    

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/shop')}>Go to Shop</button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h1 className="checkout-title">Checkout</h1>

                <div className="checkout-grid">
                    
                    <form className="checkout-form" onSubmit={handlePlaceOrder}>
                        
                        {/* Shipping Info */}
                        <section className="checkout-section">
                            <h3>Shipping Information</h3>
                            
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Juan Dela Cruz" required />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="juan@example.com" required />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" placeholder="123 Rizal St, Brgy 1" required />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" placeholder="Manila" required />
                                </div>
                                <div className="form-group">
                                    <label>Postal Code</label>
                                    <input type="text" placeholder="1000" required />
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="checkout-section">
                            <h3>Payment Method</h3>
                            
                            <div className="payment-options">
                                <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="cod" 
                                        checked={paymentMethod === 'cod'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>Cash on Delivery (COD)</span>
                                </label>

                                <label className={`payment-option ${paymentMethod === 'gcash' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="gcash" 
                                        checked={paymentMethod === 'gcash'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>GCash / Maya</span>
                                </label>

                                <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="card" 
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>Credit Card</span>
                                </label>
                            </div>
                        </section>

                        <button type="submit" className="place-order-btn">
                            Place Order
                            
                        </button>
                        
                    </form>


                    <div className="checkout-summary">
                        <div className="summary-card">
                            <h3>Total Amount</h3>
                            <div className="summary-price">
                                ₱{totalAmount.toLocaleString()}
                            </div>
                            <p className="summary-note">
                                Shipping fees calculated based on location.
                            </p>
                            
                            <div className="summary-details">
                                <div className="detail-row">
                                    <span>Subtotal</span>
                                    <span>₱{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="detail-row">
                                    <span>Shipping</span>
                                    <span>₱{shippingCost}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Checkout;