import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
            <Link to="/" className="text-2xl font-bold text-gray-800">
              StudFriend
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 font-semibold hover:text-gray-600 transition">Home</Link>
            <Link to="/products" className="text-gray-800 hover:text-gray-600 transition">Products</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 transition">About</Link>
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
            <Link to="/" className="block text-gray-800 font-semibold hover:text-gray-600 py-2 transition">Home</Link>
            <Link to="/products" className="block text-gray-800 hover:text-gray-600 py-2 transition">Products</Link>
            <Link to="/about" className="block text-gray-800 hover:text-gray-600 py-2 transition">About</Link>
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

// About Page Component
function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Week 4 Assignment</h1>
        <p className="text-lg">Made by Abhay Prasad</p>
      </div>
    </div>
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
      image: 'https://solo.in/cdn/shop/files/premium-notebook-spiral-bound-lightweight-vibrant-colours-100-pages-70-gsm-set-of-5-821135.webp?v=1742021667' 
    },
    { 
      id: 2, 
      name: 'Colorful Gel Pens (Pack of 10)', 
      price: '₹149', 
      image: 'https://www.stationeryplug.com/cdn/shop/products/pentonic-coloured-gel-pen-set-680184.jpg?v=1741263630' 
    },
    { 
      id: 3, 
      name: 'Wooden Desk Organizer', 
      price: '₹499', 
      image: 'https://m.media-amazon.com/images/I/61DWUY9UiiL._AC_UF894,1000_QL80_.jpg' 
    },
    { 
      id: 4, 
      name: 'Academic Planner 2024', 
      price: '₹349', 
      image: 'data:image/jpeg;base64,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' 
    },
    { 
      id: 5, 
      name: 'Pastel Highlighters (Set of 6)', 
      price: '₹199', 
      image: 'https://m.media-amazon.com/images/I/61o8j2ohWvL.jpg' 
    },
    { 
      id: 6, 
      name: 'Canvas Pencil Case', 
      price: '₹249', 
      image: 'https://www.alotmall.com/cdn/shop/products/Triple-Zipper-Pencil-Case-8_600x600.jpg?v=1723436958' 
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

// Products Page Component
function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Products onProductClick={() => {}} />
    </div>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">StudFriend</h3>
          <p>
            Your trusted stationery store for all academic needs. Quality products for students and professionals alike.
          </p>
          <p className="mt-2">
            <strong>Week 4 assignment</strong>
          </p>
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
    <Router>
      <div className="w-full min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
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
            } 
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
