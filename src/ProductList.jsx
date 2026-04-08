import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const ProductList = () => {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Datos de las plantas (puedes añadir más siguiendo esta estructura)
    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene.", cost: "$12" }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1506174019579-5503f2c5c93e?q=80&w=1470&auto=format&fit=crop", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating aroma, used in cooking.", cost: "$15" }
            ]
        }
    ];

    // Requerimiento: Calcular la cantidad total de artículos en el carrito para el ícono
    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        // Requerimiento: Despachar la acción addItem
        dispatch(addItem(product));
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="luxury">
                    <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                    <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                        <h1 className='cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                <rect width="156" height="156" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.3A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                            </svg>
                        </h1>
                        {/* Muestra el número total de ítems sobre el ícono del carrito */}
                        <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 className="category_title">{category.category}</h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => {
                                    // Requerimiento: Verificar si el producto ya está en el carrito
                                    const isAdded = cartItems.some(item => item.name === plant.name);

                                    return (
                                        <div className="product-card" key={plantIndex}>
                                            <img className="product-image" src={plant.image} alt={plant.name} />
                                            <div className="product-title">{plant.name}</div>
                                            <div className="product-description">{plant.description}</div>
                                            <div className="product-cost">{plant.cost}</div>
                                            
                                            {/* Requerimiento: Botón deshabilitado y texto "Added to Cart" si ya existe */}
                                            <button 
                                                className={`product-button ${isAdded ? 'disabled' : ''}`} 
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={isAdded}
                                            >
                                                {isAdded ? "Added to Cart" : "Add to Cart"}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
};

export default ProductList;
