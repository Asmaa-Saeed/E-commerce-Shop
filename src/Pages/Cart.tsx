import React from 'react';
import Footer from '../Layouts/Footer';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {/* Header Section with Background */}
      {/* <div className="relative w-full h-92 bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: `url(${cartBg})`}}>
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="z-10">
          <h1 className="text-4xl font-bold text-teal-600 text-center text-shadow-blue-100 text-shadow tracking-wide">Your Cart</h1>
          <h1 className="text-xl font-bold text-gray-700 text-center mt-4 text-shadow-blue-100 text-shadow tracking-wide">Review Your Items</h1>
        </div>
      </div> */}

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart Items</h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleProductClick(item.id)}
                    />
                    <div className="ml-4 flex-1">
                      <h3 
                        className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-teal-600 transition-colors"
                        onClick={() => handleProductClick(item.id)}
                      >
                        {item.name}
                      </h3>
                      <p className="text-gray-600">${item.price}</p>
                      <div className="flex items-center mt-2">
                        <button 
                          className="text-gray-500 hover:text-teal-600"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="mx-4 text-gray-800">{item.quantity}</span>
                        <button 
                          className="text-gray-500 hover:text-teal-600"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <span>Total</span>
                    <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button 
                className={`w-full mt-6 py-3 rounded-lg transition-colors duration-200 ${
                  cartItems.length > 0 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;