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
        {
            id: 1,
            name: "Hiking Boots",
            price: 4500,
            desc: "Rugged waterproof boots designed for the muddy trails of Luzon's highest peaks.",
            img: "https://m.media-amazon.com/images/I/71p2KL9ZXTL._AC_SY395_.jpg"
        },
        {
            id: 5,
            name: "Carbon Fiber Trekking Poles",
            price: 1800,
            desc: "Ultralight adjustable poles to save your knees on steep descents.",
            img: "https://m.media-amazon.com/images/I/6134PIDPt0L._AC_SX425_.jpg"
        },
        {
            id: 8,
            name: "40L Waterproof Backpack",
            price: 2800,
            desc: "Spacious and durable daypack with built-in rain cover.",
            img: "https://m.media-amazon.com/images/I/81siwI2UxEL._AC_SY300_SX300_QL70_FMwebp_.jpg"
        }
    ],
    camping: [
        {
            id: 2,
            name: "Apo Lightweight Tent",
            price: 3200,
            desc: "Free-standing 2-person tent with excellent ventilation.",
            img: "https://m.media-amazon.com/images/I/71sbNSEx1iL._AC_SY300_SX300_QL70_FMwebp_.jpg"
        },
        {
            id: 15,
            name: "LED Headlamp (400 Lumens)",
            price: 950,
            desc: "Hands-free lighting for night trekking and camp chores.",
            img: "https://m.media-amazon.com/images/I/61bIa8AnexL._AC_SY300_SX300_QL70_FMwebp_.jpg"
        }
    ],
    climbing: [
        {
            id: 3,
            name: "Pro Rock Climbing Harness",
            price: 5500,
            desc: "Padded waist belt and leg loops for all-day comfort at the crag.",
            img: "https://m.media-amazon.com/images/I/71JceyaGVLL._AC_SY300_SX300_QL70_FMwebp_.jpg"
        },
        {
            id: 4,
            name: "Carabiner Set (Pack of 5)",
            price: 5500,
            desc: "Heavy-duty screw-lock carabiners for anchoring and belaying.",
            img: "https://m.media-amazon.com/images/I/81iRzjms5AL._AC_SY300_SX300_QL70_FMwebp_.jpg"
        }
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
                                    <span className="price">₱{item.price}</span>
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