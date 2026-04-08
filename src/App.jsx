import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // Estado para controlar qué vista se muestra (Landing Page o Product List)
  const [showProductList, setShowProductList] = useState(false);

  // Función que se ejecuta al hacer clic en el botón "Get Started"
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Renderizado condicional: Si showProductList es falso, mostramos la Landing Page */}
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            {/* Nombre de la empresa solicitado en los requisitos */}
            <h1>Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            
            {/* Botón de "Comenzar" solicitado en los requisitos */}
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            {/* Componente con los detalles de la empresa */}
            <AboutUs />
          </div>
        </div>
      ) : (
        /* Si showProductList es verdadero, mostramos la lista de productos */
        <div className="product-list-container">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
