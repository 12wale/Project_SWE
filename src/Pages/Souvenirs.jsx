import HeroSection from '../components/Souvenirs/HeroSection';
import ProductGrid from '../components/Souvenirs/ProductGrid';
import CartSummary from '../components/Souvenirs/CartSummary';

const Souvenirs = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <HeroSection />
      <ProductGrid />
      <CartSummary />
    </div>
  );
};

export default Souvenirs;