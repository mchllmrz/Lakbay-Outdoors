import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [notification, setNotification] = useState(null);
    
    const addToCart = (product) => {
        setCartItems(prevItems => {
            
            const existingItem = prevItems.find(item => item.id === product.id);
            
            if (existingItem) {
               
                return prevItems.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            
            return [...prevItems, { ...product, quantity: 1 }];
        });
        showNotification(`${product.name} added to cart!`);
    };

    const showNotification = (message) => {
        setNotification(message);
        
        
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    const closeNotification = () => setNotification(null);

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    
    const updateQuantity = (id, delta) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }));
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const clearCart = () => {
        setCartItems([]); 
    };

    // Calculate totals
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            isCartOpen, 
            toggleCart,
            cartTotal,
            cartCount,
            notification,
            closeNotification,
            showNotification,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);