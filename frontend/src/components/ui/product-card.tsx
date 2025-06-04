import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import ProductImagePlaceholder from './product-image-placeholder'

interface ProductCardProps {
  title: string
  price: number
  rating: number
  imageUrl?: string
  itemsSold: number
}

const ProductCard = ({
  title,
  price,
  rating,
  imageUrl,
  itemsSold,
}: ProductCardProps) => {
  return (
    <div className="group relative rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {/* Product Image */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <ProductImagePlaceholder />
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <button className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-primary">${price}</p>
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">{itemsSold} items sold</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 
