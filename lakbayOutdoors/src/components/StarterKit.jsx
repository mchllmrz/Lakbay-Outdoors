import  { useState } from 'react';
import '../styles/StarterKit.css';
import { Tent, Mountain, Footprints, Info, Plus } from "lucide-react";
import { useCart } from './CartContext';

function StarterKit(){

    const [activeCategory, setActiveCategory] = useState('dayhike');
    const { addToCart } = useCart();
   
    const [progress, setProgress] = useState(0);

    const products = {
        dayhike: [
            { id: 1, name: "Mayon Trekker 45L", price: "₱4,500", desc: "Designed for multi-day hikes in the Cordilleras.", img: "/backpack.jpg" },
            { id: 2, name: "Cordillera Quick-Dry Pants", price: "₱1,800", desc: "Convertible hiking pants that zip off into shorts.", img: "/pants.jpg" },
            { id: 3, name: "Banahaw Trekking Poles", price: "₱2,800", desc: "Save your knees on the descent from Mt. Banahaw.", img: "/poles.jpg" }
        ],
        camping: [
            { id: 4, name: "Taal 2-Person Tent", price: "₱5,200", desc: "Lightweight and storm-proof for tropical weather.", img: "/tent.jpg" },
            { id: 5, name: "Apo Sleeping Bag", price: "₱3,500", desc: "Compact sleeping bag rated for 10°C.", img: "/sleepingbag.jpg" }
        ],
        climbing: [
            { id: 6, name: "Montalban Harness", price: "₱3,200", desc: "Comfortable harness for all-day crag sessions.", img: "/harness.jpg" },
            { id: 7, name: "Chalk Bag + Ball", price: "₱850", desc: "Keep your hands dry on limestone routes.", img: "/chalk.jpg" }
        ]
    };

    const handleAddToKit = (product) => {
        if(progress < 100) setProgress(progress + 25);
        addToCart(product);
        showNotification(`${product.name} added to your kit!`);
    };

    return (
        <section className="starter-kit-section">
            <div className="kit-container">
                
                <div className="kit-sidebar">
                    <span className="kit-subtitle">LAKBAY ALALAY</span>
                    <h2>Build Your <br/> Starter Kit</h2>
                    <p>New to the outdoors? Don't worry. Select your adventure type and we'll help you complete the essentials.</p>

                    <div className="kit-options">
                        <button 
                            className={`option-btn ${activeCategory === 'dayhike' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('dayhike')}
                        >
                            Day Hike (Akyat-Balikan) <Footprints size={20} />
                        </button>

                        <button 
                            className={`option-btn ${activeCategory === 'camping' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('camping')}
                        >
                            Overnight (Camping) <Tent size={20} />
                        </button>

                        <button 
                            className={`option-btn ${activeCategory === 'climbing' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('climbing')}
                        >
                            Rock Climbing (Crag) <Mountain size={20} />
                        </button>
                    </div>

                
                    <div className="kit-progress-card">
                        <div className="progress-header">
                            <span>KIT READINESS</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
                        </div>
                        <span className="progress-note">Start building your loadout.</span>
                    </div>
                </div>

    
                <div className="kit-content">
                    <div className="kit-grid">
                        {products[activeCategory].map((item) => (
                            <div className="kit-card" key={item.id}>
                                <div className="kit-img-wrapper">
                                   
                                    <img src={item.img} alt={item.name} onError={(e) => e.target.src='https://via.placeholder.com/150'} />
                                </div>
                                <div className="kit-details">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price}</span>
                                    <p>{item.desc}</p>
                                    <button className="add-kit-btn" onClick={() => {handleAddToKit(item);}}>
                                        ADD TO KIT
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

         
                    <div className="pro-tip-box">
                        <Info className="info-icon" size={24} />
                        <div>
                            <h4>Pro Tip</h4>
                            <p>For day hikes in the Philippines, always bring waterproof gear. The weather in mountains like Makiling or Batulao can change instantly.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default StarterKit