import React from 'react';
import HeroSection from '../components/Cart/HeroSection';
import CartItems from '../components/Cart/CartItems';
import OrderSummary from '../components/Cart/OrderSummary';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        <div className={`grid gap-8 ${cart.length > 0 ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
          {/* Cart Items Section - Takes up 2 columns on large screens if cart is not empty */}
          <div className={`${cart.length > 0 ? 'lg:col-span-2' : 'w-full max-w-4xl mx-auto'}`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-yellow-500 cinzel-decorative">
                Shopping Cart
              </h2>
              <span className="text-gray-400">
                {cart.reduce((acc, item) => acc + item.quantity, 0)} Items
              </span>
            </div>
            <CartItems />
          </div>

          {/* Order Summary Section - Takes up 1 column on large screens */}
          {cart.length > 0 && (
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;