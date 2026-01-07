import '../styles/Navbar.css';
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx'; 


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const { toggleCart, cartCount } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className={`navbar ${isScrolled && !isMobile ? 'scrolled': ''}`}>
            <div className='navbar-container'>
                <button className='logo-btn'>
                    <Link to="/">
                        <img src="/mountaineer.png" alt="Lakbay Outdoors Logo" className='logo' />
                    </Link>
                </button>
                
                <div className='brand-text'>
                    <h1>Lakbay Outdoors</h1>
                    <span>ADVENTURE AWAITS</span>
                </div>

                <div className={isMobile ? "nav-links-mobile": "nav-links"} onClick={() => setIsMobile(false)} >
                    <Link to="/" className='active'>HOME</Link>
                    <Link to="/Shop">SHOP</Link>
                    <Link to="/About">ABOUT</Link>
                </div>

                <div className='nav-icons'>

                    {/* 2. Update the Cart Button */}
                    <button 
                        aria-label='Cart' 
                        onClick={toggleCart} // Opens the sidebar
                        style={{ position: 'relative' }} // Needed for the badge position
                    >
                        <ShoppingCart className='cart-btn' size={24}/>
                        
                        {/* 3. The Red Badge (Only shows if cart has items) */}
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                background: '#ef4444', // Red color
                                color: 'white',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                fontSize: '0.7rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <X size={24}/> : <Menu size={24}/>}
                    </button>

                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;