// src/Cart.jsx
import React from 'react';
import { useCart } from '../CartContext'; // Import the useCart hook

const Cart = () => {
  const { cart } = useCart(); // Access the cart

  return (
    <div id='cart'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.description} - Quantity: {item.quantity} - Price: {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
