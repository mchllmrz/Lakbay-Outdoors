import React from 'react';
import '../styles/Footer.css';
import { Facebook, Instagram, Mail, Send } from "lucide-react";

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className='footer-container'>

                    <div className='footer-col'>
                        <div className='footer-brand'>
                            <img src="/mountaineer.png" alt="logo" className='footer-logo-img' />
                            <h2>LAKBAY OUTDOORS</h2>
                        </div>
                        <p className='footer-text'>
                            The premier destination for mountaineering, rock climbing, and 
                            camping gear in the Philippines. We don't just sell gear; we enable adventures.
                        </p>

                        <div className='social-icons'>
                            <a href="#" aria-label='Facebook'><Facebook size={28}/></a>
                            <a href="#" aria-label='Instagram'><Instagram size={28}/></a>
                            <a href="#" aria-label='Email'><Mail size={28}/></a>
                        </div>
                    </div>



                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p className="newsletter-text">Get trail reports and exclusive gear drops.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="email@address.com" />
                        <button aria-label="Subscribe">
                            <Send size={18} />
                        </button>
                    </div>
                </div>

                </div>
                <div className="footer-bottom">
                <p>&copy; 2026 LAKBAY OUTDOORS PH. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer