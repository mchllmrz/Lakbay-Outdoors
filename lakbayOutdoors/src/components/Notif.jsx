import React from 'react';
import { X, CheckCircle } from "lucide-react";
import { useCart } from './CartContext'; 
import '../styles/Toast.css';

function Notif() {
    const { notification, closeNotification } = useCart();

    if (!notification) return null;

    return (
        <div className="toast-notification">
            <div className="toast-content">
                <span>{notification}</span>
            </div>
            <button onClick={closeNotification} className="toast-close">
                <X size={18} />
            </button>
        </div>
    );
}

export default Notif;