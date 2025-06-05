"use client"

import { Search, Menu, Bell, HelpCircle, Heart, ChevronDown, Star, Plus, Minus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [relatedFavorites, setRelatedFavorites] = useState<number[]>([])

  const toggleRelatedFavorite = (productId: number) => {
    if (relatedFavorites.includes(productId)) {
      setRelatedFavorites(relatedFavorites.filter((id) => id !== productId))
    } else {
      setRelatedFavorites([...relatedFavorites, productId])
    }
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Fresh Cherries",
      price: 230,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 245,
    },
    {
      id: 3,
      name: "Ripe Avocado",
      price: 230,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 189,
    },
    {
      id: 4,
      name: "Sweet Strawberry",
      price: 230,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 312,
    },
    {
      id: 5,
      name: "Green Apple",
      price: 230,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.2,
      reviews: 156,
    },
  ]

  // Mock product data - in real app, this would come from API
  const product = {
    id: productId,
    name: "Premium Organic Orange",
    price: 230,
    originalPrice: 280,
    rating: 4.5,
    reviews: 360,
    sold: 1250,
    description:
      "Fresh, juicy organic oranges sourced directly from sustainable farms. Rich in vitamin C and natural antioxidants, perfect for a healthy lifestyle.",
    category: "Fresh Fruits",
    brand: "OrganicFresh",
    sku: "ORG-001",
    inStock: true,
    stockCount: 45,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: [
      "100% Organic Certified",
      "Vitamin C Rich",
      "Sustainably Sourced",
      "Fresh Daily Delivery",
      "No Pesticides Used",
    ],
    specifications: {
      Weight: "1 kg (approximately 6-8 pieces)",
      Origin: "California, USA",
      "Harvest Date": "Within 7 days",
      Storage: "Room temperature or refrigerated",
      "Shelf Life": "7-10 days",
    },
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`)
  }

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} ${product.name}(s)`)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="w-5 h-5" />
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span className="font-semibold">Logo</span>
            </Link>
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
            <Link href="/" className="border-b-2 border-blue-500 pb-4 pt-4">
              <span className="text-blue-500 font-medium">Home</span>
            </Link>
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

      {/* Breadcrumb */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="max-w-7xl mx-auto text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/" className="hover:text-blue-600">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg border overflow-hidden">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
              <button onClick={toggleFavorite} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
                <Heart className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-current" : "text-gray-400"}`} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg border-2 overflow-hidden ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-contain p-2 w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews} reviews)</span>
                </div>
                <span className="text-sm text-gray-600">{product.sold} sold</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              <Badge variant="destructive">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-gray-700">Brand: </span>
                <span className="text-sm text-gray-600">{product.brand}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">SKU: </span>
                <span className="text-sm text-gray-600">{product.sku}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Stock: </span>
                <Badge variant={product.inStock ? "default" : "destructive"}>
                  {product.inStock ? `${product.stockCount} available` : "Out of stock"}
                </Badge>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1 flex items-center gap-2"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                <p className="text-gray-700 leading-relaxed">
                  Our premium organic oranges are carefully selected from the finest orchards, ensuring you get the best
                  quality fruit with every purchase. Each orange is packed with natural vitamins and minerals, making
                  them perfect for juicing, snacking, or cooking.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium text-gray-900">John D.</span>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700">
                        Excellent quality oranges! Very fresh and juicy. Will definitely order again.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow"
              >
                <Link href={`/product/${relatedProduct.id}`}>
                  <div className="relative h-32 mb-4 bg-gray-100 rounded cursor-pointer">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </Link>
                <div className="flex items-start justify-between mb-2">
                  <Link
                    href={`/product/${relatedProduct.id}`}
                    className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {relatedProduct.name}
                  </Link>
                  <Heart
                    onClick={() => toggleRelatedFavorite(relatedProduct.id)}
                    className={`w-4 h-4 cursor-pointer transition-colors ${
                      relatedFavorites.includes(relatedProduct.id)
                        ? "text-red-500 fill-current"
                        : "text-gray-400 hover:text-red-500"
                    }`}
                  />
                </div>
                <p className="text-blue-500 font-semibold mb-2">${relatedProduct.price}</p>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">360 items sold</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
