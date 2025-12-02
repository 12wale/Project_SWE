import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    // Reset the button after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div 
      data-aos="fade-up" 
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-yellow-500 cinzel-decorative mb-2">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-semibold
              transition-all duration-300 transform hover:scale-105
              ${isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
              }
              disabled:cursor-not-allowed
            `}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
