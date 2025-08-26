import React from 'react';
import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ nombre, precio, imagen, onAgregarCarrito, children }) => {
    const [enCarrito, setEnCarrito] = useState(false);

    const handleClick = () => {
        setEnCarrito(!enCarrito); // Toggle del estado
        onAgregarCarrito && onAgregarCarrito(enCarrito); // Pasamos el estado actual
    }

    return (
        <div className="product-card">
            <img src={imagen} alt={nombre} className="product-image" />
            <div className="product-content">
                <strong className="product-name">{nombre}</strong>
                <p className="product-price">${precio}</p>
                {children && <span className="product-tag">{children}</span>}
                <button 
                    className={`product-button ${enCarrito ? 'in-cart' : ''}`} 
                    onClick={handleClick}
                >
                    {enCarrito ? 'Quitar del carrito' : 'Agregar al carrito'}
                </button>
                {enCarrito && <p className="cart-status">En el carrito</p>}
            </div>
        </div>
    );
};

export default ProductCard;
