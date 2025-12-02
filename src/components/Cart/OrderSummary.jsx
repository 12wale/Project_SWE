import React from 'react';
import { ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const OrderSummary = () => {
  const { getCartTotal, cart } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  if (cart.length === 0) return null;

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/20 sticky top-24">
      <h3 className="text-2xl font-bold text-yellow-500 cinzel-decorative mb-6 pb-4 border-b border-gray-700">
        Order Summary
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? <span className="text-green-400">Free</span> : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Tax (10%)</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        
        <div className="pt-4 border-t border-gray-700">
          <div className="flex justify-between items-end">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-3xl font-bold text-yellow-500">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="w-full group bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 font-bold py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2">
        Proceed to Checkout
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <ShieldCheck className="w-5 h-5 text-green-400" />
          <span>Secure Checkout</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <CreditCard className="w-5 h-5 text-blue-400" />
          <span>Accepts all major credit cards</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
