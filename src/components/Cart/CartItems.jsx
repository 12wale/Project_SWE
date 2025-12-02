import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-800/30 rounded-lg border border-gray-700">
        <ShoppingBag className="w-16 h-16 mx-auto text-gray-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-300 mb-2">Your cart is empty</h3>
        <p className="text-gray-400 mb-8">Looks like you haven't added any souvenirs yet.</p>
        <Link 
          to="/souvenirs" 
          className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Browse Souvenirs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <div 
          key={item.id}
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center gap-6 bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
        >
          {/* Product Image */}
          <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-600">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-yellow-500 cinzel-decorative mb-2">
              {item.name}
            </h3>
            <p className="text-gray-400 text-sm mb-2 line-clamp-2">
              {item.description}
            </p>
            <p className="text-yellow-500 font-bold text-lg">
              ${item.price.toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-gray-900/50 p-2 rounded-lg border border-gray-700">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-white">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Subtotal & Remove */}
          <div className="flex flex-col items-center md:items-end gap-4 min-w-[100px]">
            <p className="text-white font-bold text-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
