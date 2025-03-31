import { useState } from 'react';
import './App.css';

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 shadow-lg w-full sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo on left */}
          <div>
            <a href="#" className="text-2xl font-bold text-gray-800">
              StudFriend
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 font-semibold hover:text-gray-600 transition">Home</a>
            <a href="#products" className="text-gray-800 hover:text-gray-600 transition">Products</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none bg-transparent hover:bg-transparent"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-2">
            <a href="#" className="block text-gray-800 font-semibold hover:text-gray-600 py-2 transition">Home</a>
            <a href="#products" className="block text-gray-800 hover:text-gray-600 py-2 transition">Products</a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 py-2 transition">About</a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 py-2 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="bg-yellow-400 text-gray-800 text-center w-full flex items-center justify-center min-h-[80vh] px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to StudFriend</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Your one-stop shop for premium stationery products at student-friendly prices.
        </p>
        <button className="bg-gray-800 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition custom-btn">
          Shop Now
        </button>
      </div>
    </section>
  );
}

// Product Detail Component
function ProductDetail({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end p-2">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto max-h-[400px] object-cover rounded-lg"
            />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-yellow-400 text-2xl font-bold mb-4">{product.price}</p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Product Description</h3>
              <p className="text-gray-600">
                {product.description || `The ${product.name} is perfect for students and professionals alike. 
                Made from high-quality materials, this stationery essential will help you stay organized 
                and productive throughout your day.`}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Premium quality materials</li>
                <li>Ergonomic design</li>
                <li>Long-lasting durability</li>
                <li>Student-friendly price</li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Quantity</label>
                  <select className="border rounded-md py-2 px-3">
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Availability</label>
                  <div className="text-green-600 font-semibold">In Stock</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg flex-1 transition">
                  Add to Cart
                </button>
                <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-50 py-2 px-6 rounded-lg transition">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Products Section
function Products({ onProductClick }) {
  const productList = [
    { 
      id: 1, 
      name: 'Premium Notebook Set', 
      price: '₹299', 
      image: 'https://images.pexels.com/photos/6344/healthy-light-woman-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: 2, 
      name: 'Colorful Gel Pens (Pack of 10)', 
      price: '₹149', 
      image: 'https://images.pexels.com/photos/3791134/pexels-photo-3791134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: 3, 
      name: 'Wooden Desk Organizer', 
      price: '₹499', 
      image: 'https://images.pexels.com/photos/6192355/pexels-photo-6192355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: 4, 
      name: 'Academic Planner 2024', 
      price: '₹349', 
      image: 'https://images.pexels.com/photos/6062204/pexels-photo-6062204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: 5, 
      name: 'Pastel Highlighters (Set of 6)', 
      price: '₹199', 
      image: 'https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: 6, 
      name: 'Canvas Pencil Case', 
      price: '₹249', 
      image: 'https://images.pexels.com/photos/6157228/pexels-photo-6157228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Featured Stationery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-800 bg-yellow-400 font-bold text-lg px-2 py-1 rounded">
                    {product.price}
                  </p>
                  <button 
                    className="product-btn px-4 py-2 rounded-md transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductClick(product);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">StudFriend</h3>
            <p>
              Your trusted stationery store for all academic needs. Quality products for students and professionals alike.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
              <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">Facebook</a>
              <a href="#" className="hover:text-yellow-400">Twitter</a>
              <a href="#" className="hover:text-yellow-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} StudFriend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Products onProductClick={handleProductClick} />
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={handleCloseProductDetail} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
