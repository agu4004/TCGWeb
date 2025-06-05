import React from 'react'
import Navigation from '../components/ui/navigation'
import Hero from '../components/ui/hero'
import ProductCard from '../components/ui/product-card'

const products = {
  category1: [
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+1',
      itemsSold: 360,
    },
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+2',
      itemsSold: 360,
    },
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+3',
      itemsSold: 360,
    },
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+4',
      itemsSold: 360,
    },
  ],
  category2: [
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+5',
      itemsSold: 360,
    },
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+6',
      itemsSold: 360,
    },
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+7',
      itemsSold: 360,
    },
    {
      title: 'Product title',
      price: 230,
      rating: 4,
      imageUrl: 'https://placehold.co/600x600?text=Product+8',
      itemsSold: 360,
    },
  ],
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* Tags */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border px-4 py-1 text-sm text-gray-600"
              >
                New tag
              </span>
            ))}
          </div>
        </div>

        {/* Category 1 */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Category 1</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900">
              See more
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.category1.map((product, index) => (
              <div key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Category 2 */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Category 2</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900">
              See more
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.category2.map((product, index) => (
              <div key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-md">
              <img
                src="https://placehold.co/100x32?text=Logo"
                alt="Logo"
                className="mx-auto mb-8 h-8"
              />
              <h3 className="mb-4 text-xl font-semibold">
                Subscribe to our newsletter
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              <div>
                <h4 className="mb-4 font-semibold">Product</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Features</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Blog</li>
                  <li>User guides</li>
                  <li>Webinars</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Plans & Pricing</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Personal</li>
                  <li>Start up</li>
                  <li>Organization</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
              <div className="flex items-center gap-4">
                <select className="rounded-md border px-3 py-1.5 text-sm">
                  <option>English</option>
                </select>
                <div className="text-sm text-gray-600">
                  © 2024 Brand, Inc. • Privacy • Terms • Sitemap
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 

