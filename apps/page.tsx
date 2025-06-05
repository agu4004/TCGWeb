"use client"

import { Search, Menu, Bell, HelpCircle, Heart, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function EcommercePage() {
  const [email, setEmail] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])

  const handleNewsletterSubmit = (e: any) => {
    e.preventDefault()
    alert(`Subscribed with email: ${email}`)
  }

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span className="font-semibold">Logo</span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <HelpCircle className="w-5 h-5" />
            <Bell className="w-5 h-5" />
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-white hover:text-gray-300">
                Admin
              </Link>
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="border-b-2 border-blue-500 pb-4 pt-4">
              <span className="text-blue-500 font-medium">Home</span>
            </div>
            <span className="text-gray-600 py-4">Best Sellers</span>
            <span className="text-gray-600 py-4">New releases</span>
            <span className="text-gray-600 py-4">Trending</span>
            <span className="text-gray-600 py-4">Sale</span>
            <span className="text-gray-600 py-4">Support</span>
            <div className="flex items-center gap-1 py-4">
              <span className="text-gray-600">More</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Special product</h1>
              <p className="text-gray-600 mb-8 max-w-md">
                Non enim eu excepteur cupidatat consectetur do ea est reprehenderit incididunt sure veniam cupidatat est
                non amet. Enim duis quis tempor laboris ipsum dolore non.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 px-6" onClick={() => alert("Get now clicked")}>
                  Get now
                </Button>
                <Button variant="outline" className="px-6" onClick={() => alert("Learn more clicked")}>
                  Learn more
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-80 lg:h-96">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Shopping cart illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200">
                New tag
              </span>
            ))}
            <span className="text-gray-400">...</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Category 1 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Category 1</h2>
            <button
              className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
              onClick={() => alert("See more clicked")}
            >
              See more
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 1, name: "Orange", image: "/placeholder.svg?height=200&width=200" },
              { id: 2, name: "Cherries", image: "/placeholder.svg?height=200&width=200" },
              { id: 3, name: "Avocado", image: "/placeholder.svg?height=200&width=200" },
              { id: 4, name: "Strawberry", image: "/placeholder.svg?height=200&width=200" },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="relative h-32 mb-4 bg-gray-100 rounded">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <Link href={`/product/${product.id}`} className="font-medium hover:text-blue-600 transition-colors">
                    Product title
                  </Link>
                  <Heart
                    onClick={() => toggleFavorite(product.id)}
                    className={`w-4 h-4 ${favorites.includes(product.id) ? "text-red-500" : "text-gray-400"}`}
                  />
                </div>
                <p className="text-blue-500 font-semibold mb-2">$230</p>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">360 items sold</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Category 2</h2>
            <button
              className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
              onClick={() => alert("See more clicked")}
            >
              See more
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }].map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="relative h-32 mb-4 bg-gray-100 rounded">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Product ${i + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <Link href={`/product/${product.id}`} className="font-medium hover:text-blue-600 transition-colors">
                    Product title
                  </Link>
                  <Heart
                    onClick={() => toggleFavorite(product.id)}
                    className={`w-4 h-4 ${favorites.includes(product.id) ? "text-red-500" : "text-gray-400"}`}
                  />
                </div>
                <p className="text-blue-500 font-semibold mb-2">$230</p>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">360 items sold</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16 pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Newsletter */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span className="text-xl font-semibold">Logo</span>
            </div>

            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <Input
                placeholder="Input your email"
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="bg-blue-500 hover:bg-blue-600" type="submit">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-600">
                <p>Features</p>
                <p>Pricing</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-600">
                <p>Blog</p>
                <p>User guides</p>
                <p>Webinars</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-600">
                <p>About us</p>
                <p>Contact us</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plans & Pricing</h4>
              <div className="space-y-2 text-gray-600">
                <p>Personal</p>
                <p>Start up</p>
                <p>Organization</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <select className="text-gray-600 bg-transparent">
                <option>English</option>
              </select>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>© 2022 Brand, Inc.</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Sitemap</span>
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="w-6 h-6 bg-blue-400 rounded"></div>
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
              <div className="w-6 h-6 bg-blue-700 rounded"></div>
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
