import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 1. FUNCIONALIDAD: Calcular el costo total de todos los artículos en el carrito
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      // Extraemos el valor numérico (ej: "$15" -> 15) y multiplicamos por cantidad
      const costValue = parseFloat(item.cost.substring(1));
      total += item.quantity * costValue;
    });
    return total;
  };

  // 2. FUNCIONALIDAD: Volver a la página de listado de plantas
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // 3. FUNCIONALIDAD: Alerta de Checkout (Referencia futura)
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // 4. FUNCIONALIDAD: Incrementar cantidad (Dispatch updateQuantity)
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // 5. FUNCIONALIDAD: Decrementar cantidad (Validación de 0 para eliminar)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Si la cantidad llegaría a 0, se elimina el producto del carrito
      dispatch(removeItem(item.name));
    }
  };

  // 6. FUNCIONALIDAD: Eliminar planta del carrito
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 7. FUNCIONALIDAD: Calcular subtotal por tipo de planta (Costo * Cantidad)
  const calculateTotalCost = (item) => {
    const costValue = parseFloat(item.cost.substring(1));
    return item.quantity * costValue;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Unit Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
