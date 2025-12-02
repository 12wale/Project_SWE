import ProductCard from './ProductCard';

const souvenirProducts = [
  {
    id: 1,
    name: 'Golden Pharaoh Statue',
    description: 'Handcrafted replica of ancient Egyptian pharaoh statue made with premium materials and authentic details.',
    price: 89.99,
    image: 'https://m.media-amazon.com/images/I/51XFkY3d9dL._AC_.jpg',
  },
  {
    id: 2,
    name: 'Papyrus Scroll Art',
    description: 'Authentic papyrus painting featuring hieroglyphics and traditional Egyptian scenes.',
    price: 45.00,
    image: 'https://m.media-amazon.com/images/I/71Q+ag4OapL._AC_SX466_.jpg',
  },
  {
    id: 3,
    name: 'Scarab Beetle Amulet',
    description: 'Sacred scarab beetle pendant made from lapis lazuli, symbolizing transformation and protection.',
    price: 65.00,
    image: 'https://m.media-amazon.com/images/I/61eBcs9YeUL._AC_SY535_.jpg',
  },
  {
    id: 4,
    name: 'Ankh Cross Necklace',
    description: 'Egyptian symbol of life crafted in gold-plated brass with intricate hieroglyphic engravings.',
    price: 55.00,
    image: 'https://m.media-amazon.com/images/I/61C7PubVqnL._AC_SY535_.jpg',
  },
  {
    id: 5,
    name: 'Eye of Horus Pendant',
    description: 'Protection symbol pendant featuring the sacred Eye of Horus in sterling silver.',
    price: 75.00,
    image: 'https://m.media-amazon.com/images/I/61GM7CzLSfL._AC_SY535_.jpg',
  },
  {
    id: 6,
    name: 'Canopic Jar Set',
    description: 'Miniature replica set of the four canopic jars used in ancient Egyptian mummification.',
    price: 120.00,
    image: 'https://m.media-amazon.com/images/I/7191kYTL6lL._AC_SY300_SX300_QL70_ML2_.jpg',
  },
  {
    id: 7,
    name: 'Cleopatra Bust',
    description: 'Elegant marble bust of Queen Cleopatra with detailed facial features and royal headdress.',
    price: 95.00,
    image: 'https://m.media-amazon.com/images/I/81LJeSzcT-L._AC_SX679_.jpg',
  },
  {
    id: 8,
    name: 'Egyptian Cat Statue',
    description: 'Black basalt replica of Bastet, the Egyptian goddess of protection, fertility, and cats.',
    price: 70.00,
    image: 'https://m.media-amazon.com/images/I/819yk+wEh-L._AC_SY879_.jpg',
  },
  {
    id: 9,
    name: 'Pyramid Crystal',
    description: 'Hand-carved crystal pyramid with hieroglyphic inscriptions, perfect for decoration or meditation.',
    price: 58.00,
    image: 'https://m.media-amazon.com/images/I/71Xs+wrpH2L._AC_SX679_.jpg',
  },
  {
    id: 10,
    name: 'Nefertiti Sculpture',
    description: 'Museum-quality replica of the famous bust of Queen Nefertiti in hand-painted detail.',
    price: 110.00,
    image: 'https://m.media-amazon.com/images/I/71vTAIHtcEL._AC_SY879_.jpg',
  },
  {
    id: 11,
    name: 'Hieroglyphic Tablet',
    description: 'Stone tablet featuring authentic hieroglyphic inscriptions and ancient Egyptian blessings.',
    price: 48.00,
    image: 'https://imgs.search.brave.com/1-jaWEm1MsRhoC-cDbs547fWSi-njgj31sMbqLw2wh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGljdG9yZW0uY29t/L3VwbG9hZHMvZGVj/b2ZyYW1lLzEvZGVj/bzFfMTk0MzQ1Mi5q/cGc',
  },
  {
    id: 12,
    name: 'Tutankhamun Mask',
    description: 'Detailed replica of King Tut\'s golden death mask, a symbol of eternal beauty and power.',
    price: 135.00,
    image: 'https://imgs.search.brave.com/bSOF2bDd9a5_GiuWCT9YLOitMknMVhdnpgiMBOFBG1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy90aGUt/YnVyaWFsLW1hc2st/b2YtZWd5cHRpYW4t/cGhhcmFvaC10dXRh/bmtoYW11bi1pcy1z/aG93bi1uZXdzLXBo/b3RvLTE3MzEwMTE0/MTMuanBnP2Nyb3A9/MC42NjU3MXh3OjF4/aDtjZW50ZXIsdG9w/JnJlc2l6ZT02NDA6/Kg',
  },
];

const ProductGrid = () => {
  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="text-center mb-12">
        <h2 
          data-aos="fade-up" 
          className="text-3xl md:text-4xl font-bold text-yellow-500 cinzel-decorative mb-4"
        >
          Our Collection
        </h2>
        <p 
          data-aos="fade-up" 
          data-aos-delay="100" 
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Explore our curated selection of authentic Egyptian souvenirs, 
          from handcrafted jewelry to museum-quality replicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {souvenirProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            data-aos-delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
