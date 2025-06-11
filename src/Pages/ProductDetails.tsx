import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../Data/products';
import Alert from '../Components/Alert';
import { StarIcon } from '@heroicons/react/24/solid';
import Footer from '../Layouts/Footer';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState('');
  
  const product = products.find(p => p.id === Number(id));
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items. Products must be unused and in their original packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days delivery."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary by location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account."
    }
  ];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
        <button
          onClick={() => navigate('/shop')}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setShowAlert(true);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`h-5 w-5 ${
                        index < product.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <p className="text-3xl font-semibold text-teal-600">${product.price}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-teal-600 text-teal-600'
                        : 'border-gray-300 hover:border-teal-600 hover:text-teal-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
                Add to Cart
              </button>
              <button
                onClick={() => navigate('/shop')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors"
              >
                Back to Shop
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'shipping', 'reviews', 'size-guide', 'care'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600">{product.description}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Product Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="text-gray-800">{product.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="text-gray-800">{product.rating}/5</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Price</span>
                      <span className="text-gray-800">${product.price}</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Material & Care</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Premium quality materials</li>
                    <li>• Easy to clean and maintain</li>
                    <li>• Durable and long-lasting</li>
                    <li>• Follow care instructions for best results</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Shipping Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Free Shipping</p>
                        <p className="text-gray-600">On all orders over $100</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Express Delivery</p>
                        <p className="text-gray-600">2-3 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Easy Returns</p>
                        <p className="text-gray-600">30 days return policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Customer Reviews</h3>
                    <p className="text-gray-600">Based on {product.rating} ratings</p>
                  </div>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-4">
                  {/* Sample Reviews */}
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-4 w-4 ${
                              index < 5 ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">John D.</span>
                    </div>
                    <p className="text-gray-600">Excellent product! The quality is outstanding and it exceeded my expectations.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-4 w-4 ${
                              index < 4 ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">Sarah M.</span>
                    </div>
                    <p className="text-gray-600">Great value for money. Would definitely recommend to others.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'size-guide' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Size Guide</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest (inches)</th>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist (inches)</th>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hip (inches)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">XS</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34-36</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28-30</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34-36</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">S</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">36-38</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30-32</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">36-38</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">M</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38-40</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32-34</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38-40</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">L</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40-42</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34-36</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40-42</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">XL</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42-44</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">36-38</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42-44</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Care Instructions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Washing</p>
                        <p className="text-gray-600">Machine wash cold with similar colors. Do not bleach.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Drying</p>
                        <p className="text-gray-600">Tumble dry low. Remove promptly when dry.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Ironing</p>
                        <p className="text-gray-600">Iron on low heat if needed. Do not iron on print.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-gray-800 font-medium mb-2">{relatedProduct.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-teal-600 font-semibold">${relatedProduct.price}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`h-4 w-4 ${
                          index < relatedProduct.rating ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <Alert 
        show={showAlert}
        message={`${product.name} successfully added to cart`}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
};

export default ProductDetails; 