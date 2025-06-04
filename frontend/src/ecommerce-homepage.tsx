import React, { useState } from 'react';
import { Heart, Search, Bell, User, Menu, ChevronDown, ChevronRight, Star, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const EcommerceHomepage = () => {
  const [email, setEmail] = useState('');
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Product title',
      price: '$230',
      image: '🍊',
      rating: 4,
      sold: '360 items sold'
    },
    {
      id: 2,
      name: 'Product title',
      price: '$230',
      image: '🍒',
      rating: 5,
      sold: '360 items sold'
    },
    {
      id: 3,
      name: 'Product title',
      price: '$230',
      image: '🥑',
      rating: 4,
      sold: '360 items sold'
    },
    {
      id: 4,
      name: 'Product title',
      price: '$230',
      image: '🍓',
      rating: 4,
      sold: '360 items sold'
    }
  ];

  const category2Products = [
    {
      id: 5,
      name: 'Product title',
      price: '$230',
      image: '🍊',
      rating: 4,
      sold: '360 items sold'
    },
    {
      id: 6,
      name: 'Product title',
      price: '$230',
      image: '🍊',
      rating: 5,
      sold: '360 items sold'
    },
    {
      id: 7,
      name: 'Product title',
      price: '$230',
      image: '🌻',
      rating: 4,
      sold: '360 items sold'
    },
    {
      id: 8,
      name: 'Product title',
      price: '$230',
      image: '🌸',
      rating: 4,
      sold: '360 items sold'
    }
  ];

  // Event handlers
  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    alert(`You clicked on ${product.name} - ${product.price}`);
  };

  const handleLikeProduct = (productId, e) => {
    e.stopPropagation();
    const newLikedProducts = new Set(likedProducts);
    if (likedProducts.has(productId)) {
      newLikedProducts.delete(productId);
    } else {
      newLikedProducts.add(productId);
    }
    setLikedProducts(newLikedProducts);
    console.log('Product liked/unliked:', productId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleGetNow = () => {
    console.log('Get Now button clicked');
    alert('Redirecting to special product page!');
  };

  const handleLearnMore = () => {
    console.log('Learn More button clicked');
    alert('Opening product information modal or page!');
  };

  const handleNewsletterSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter subscription:', email);
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  const handleNavigation = (section) => {
    console.log('Navigation clicked:', section);
    alert(`Navigating to ${section} section`);
  };

  const handleSeeMore = (category) => {
    console.log('See more clicked for:', category);
    alert(`Loading more products from ${category}`);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
      onClick={() => handleProductClick(product)}
    >
      <div className="relative bg-gray-50 h-48 flex items-center justify-center">
        <span className="text-6xl">{product.image}</span>
        <button 
          className={`absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors ${
            likedProducts.has(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
          onClick={(e) => handleLikeProduct(product.id, e)}
        >
          <Heart className={`w-4 h-4 ${likedProducts.has(product.id) ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
        <p className="text-lg font-semibold text-blue-600 mb-2">{product.price}</p>
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500">{product.sold}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Menu className="w-6 h-6 text-gray-600 mr-4 lg:hidden" />
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Logo</span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </form>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => alert('Notifications clicked!')}
              >
                <Bell className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => alert('User profile clicked!')}
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button 
                className="border-b-2 border-blue-500 px-1 py-4 text-sm font-medium text-blue-600"
                onClick={() => handleNavigation('Home')}
              >
                Home
              </button>
              <button 
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => handleNavigation('Best Sellers')}
              >
                Best Sellers
              </button>
              <button 
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => handleNavigation('New releases')}
              >
                New releases
              </button>
              <button 
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => handleNavigation('Trending')}
              >
                Trending
              </button>
              <button 
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => handleNavigation('Sale')}
              >
                Sale
              </button>
              <button 
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => handleNavigation('Support')}
              >
                Support
              </button>
              <button className="flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                <span>More</span>
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Special product
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Non enim eu excepteur cupidatat consectetur do ea est reprehenderit
                incididunt irure veniam cupidatat est non amet. Enim duis aute tempor
                laboris ipsum dolore non.
              </p>
              <div className="flex space-x-4">
                <button 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium transform hover:scale-105"
                  onClick={handleGetNow}
                >
                  Get now
                </button>
                <button 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium transform hover:scale-105"
                  onClick={handleLearnMore}
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-full w-96 h-96 mx-auto relative overflow-hidden">
                <div className="absolute top-8 left-8 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div className="absolute top-16 right-12 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div className="absolute bottom-16 left-12 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🛒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {['New tag', 'New tag', 'New tag', 'New tag', 'New tag', '...'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category 1 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Category 1</h2>
            <button 
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              onClick={() => handleSeeMore('Category 1')}
            >
              See more
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Category 2 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Category 2</h2>
            <button 
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              onClick={() => handleSeeMore('Category 2')}
            >
              See more
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category2Products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">Logo</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Subscribe to our newsletter
          </h2>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Input your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-medium transform hover:scale-105"
              onClick={handleNewsletterSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">User guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Plans & Pricing</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Personal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Start up</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Organization</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 md:mb-0">
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
              <span>© 2022 Brand, Inc.</span>
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
              <a href="#" className="hover:text-gray-700">Sitemap</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Visily watermark */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-gray-500">Made with </span>
          <span className="text-sm font-semibold text-blue-600">Visily</span>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHomepage;