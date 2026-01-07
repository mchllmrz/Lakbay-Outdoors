import '../styles/Home.css';
import { Truck, ShieldCheck, RefreshCcw, CreditCard, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import StarterKit from './StarterKit';


function Home(){

    const destinations = [
        { id: 1, name: "Mount Pulag", location: "Benguet • 2,922m", img: "/mtpulag.png" },
        { id: 2, name: "Mount Apo", location: "Davao • 2,954m", img: "/apo.jpg" },
        { id: 3, name: "Mt. Guiting-Guiting", location: "Romblon • 2,058m", img: "/g2.jpg" },
        { id: 4, name: "Mount Batulao", location: "Batangas • 811m", img: "/batulao.jpg" },
    ];

    return(
        <>
        <div className="home-container">
            <div className="home-content">
                <span className="badge">#1 Outdoor Shop in PH</span>
                    <h1>Conquer The <br />
                    <span className="highlight">Philippine Summit</span>
                    </h1>

                    <p>Premium gear for the tropics. From Mt. Pulag's cold peaks to 
                    Mt. Guiting-Guiting's jagged ridges.</p>

                    <Link to="/Shop">
                    <button className='toshop-btn'>Shop Your Gear <ArrowRight size={20}/></button>
                    </Link>
            </div>

        </div>
            <div className='features-section'>
                <div className='feature-card'>
                    <Truck className='feature-icon' size={32}/>
                    <h3>Free Shipping</h3>
                </div>
                <div className='feature-card'>
                    <ShieldCheck className='feature-icon' size={32}/>
                    <h3>Authentic Gear</h3>
                </div>
                <div className='feature-card'>
                    <RefreshCcw className='feature-icon' size={32}/>
                    <h3>Easy Returns</h3>
                </div>
                <div className='feature-card'>
                    <CreditCard className='feature-icon' size={32}/>
                    <h3>Secure Payment</h3>
                </div>
            </div>


            <StarterKit />

            <div className="cta-banner">
                <h2>Ready to start your journey?</h2>
                <p>Check out our latest collection to get started.</p>
                <div className="cta-buttons">
                <Link to="/Shop">
                <button className="btn-outline">Shop Now</button>
                </Link>
                </div>
            </div>
        </>
    );
}

export default Home