import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Maggi', price: 14, image: '/maggi.jpg', quantity: 1 },
  ]);

  // Function to handle removing an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Function to handle increasing quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to simulate "Buy Now" action
  const handleBuyNow = () => {
    alert('Thank you for your purchase!');
    setCartItems([]); // Clear the cart after purchase
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-dark"
      style={{ minHeight: '100vh', padding: '2rem' }}
    >
      <div className="cart w-100">
        <h1 className="text-success mb-4">Your Shopping Cart</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="card border-0 shadow-lg"
                style={{
                  width: '18rem',
                  backgroundColor: '#282c34',
                  color: '#f5f5f5',
                  borderRadius: '10px',
                }}
                key={item.id}
              >
                <img
                  src={item.image}
                  className="card-img-top rounded-top"
                  alt={item.name}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <button
                      className="btn btn-outline-light btn-sm"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-light btn-sm"
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="btn btn-danger mt-2 w-100"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-white">Your cart is empty!</h4>
          )}
        </div>
      </div>

      {cartItems.length > 0 && (
        <button
          className="btn btn-success btn-lg mt-5"
          onClick={handleBuyNow}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '50px',
            boxShadow: '0 5px 15px rgba(0, 255, 0, 0.3)',
          }}
        >
          Buy Now
        </button>
      )}

      <footer className="container bg-success text-white py-3 mt-5 rounded">
        <p className="float-end">
          <a href="#" className="text-white">
            Back to top
          </a>
        </p>
        <p className="m-0">
          Copyright © 2024-2026 GroceryWale Pvt Ltd ·{' '}
          <a href="#" className="text-white">
            Privacy
          </a>{' '}
          ·{' '}
          <a href="#" className="text-white">
            Terms
          </a>
        </p>
      </footer>
    </div>
  );
};

export default CartPage;
