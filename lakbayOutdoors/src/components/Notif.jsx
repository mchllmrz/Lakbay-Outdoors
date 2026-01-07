import React from 'react';
import { X, CheckCircle } from "lucide-react";
import { useCart } from './CartContext'; 
import '../styles/Notif.css';

function Notif() {
    const { notification, closeNotification } = useCart();

    if (!notification) return null;

    return (
        <div className="notification">
            <div className="notif-content">
                <span>{notification}</span>
            </div>
            <button onClick={closeNotification} className="notif-close">
                <X size={18} />
            </button>
        </div>
    );
}

export default Notif;