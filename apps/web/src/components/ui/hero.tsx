import React from 'react'
import Image from 'next/image'
import { Button } from './button'

const Hero = () => {
  return (
    <div className="relative bg-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-lg">
            <h1 className="mb-4 text-5xl font-bold text-primary">
              Special product
            </h1>
            <p className="mb-8 text-gray-600">
              Non enim eu excepteur cupidatat consectetur do ea est reprehenderit
              incididunt irure veniam cupidatat est non amet. Enim duis aute tempor
              laboris ipsum dolore non.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Get now</Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content - Shopping Cart Illustration */}
          <div className="relative hidden md:block">
            <div className="relative h-[400px] w-[500px]">
              {/* Main Cart Image */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <Image
                  src="https://placehold.co/400x400?text=Cart"
                  alt="Shopping Cart"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute left-10 top-10 rounded-full bg-teal-100 p-4">
                <Image
                  src="https://placehold.co/64x64?text=U"
                  alt="User Avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div className="absolute bottom-20 right-20 rounded-full bg-purple-600 p-4">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="absolute left-20 top-1/2 rounded-full bg-orange-300 p-4">
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 
