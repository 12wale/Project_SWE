import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (getCartCount() === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 max-w-md w-full mx-4 md:mx-0">
      <div className="bg-gray-800 border-2 border-yellow-500/50 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900">
            <ShoppingBag className="w-6 h-6" />
            <h3 className="font-bold text-lg">Shopping Cart ({getCartCount()})</h3>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-4 bg-gray-700/50 p-3 rounded-lg border border-gray-600"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded"
              />
              
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm truncate">
                  {item.name}
                </h4>
                <p className="text-yellow-500 font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-600 hover:bg-gray-500 text-white p-1 rounded transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-white font-semibold w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-600 hover:bg-gray-500 text-white p-1 rounded transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 p-4 bg-gray-900/50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-300 font-semibold">Total:</span>
            <span className="text-2xl font-bold text-yellow-500">
              ${getCartTotal().toFixed(2)}
            </span>
          </div>
          
          <Link 
            to="/cart"
            className="block w-full text-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
