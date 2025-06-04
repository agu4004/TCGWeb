import React from 'react'
import Link from 'next/link'
import { Search, HelpCircle, Bell, ChevronDown } from 'lucide-react'
import AvatarPlaceholder from './avatar-placeholder'
import Logo from './logo'

const Navigation = () => {
  const menuItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'New releases', href: '/new-releases' },
    { label: 'Trending', href: '/trending' },
    { label: 'Sale', href: '/sale' },
    { label: 'Support', href: '/support' },
  ]

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Top Navigation */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button className="lg:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden flex-1 max-w-xl px-8 lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-700 bg-gray-800 py-2 pl-4 pr-10 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4 text-white">
            <button className="rounded-full p-2 hover:bg-gray-800">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-800">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 rounded-full">
              <AvatarPlaceholder />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block py-3 text-sm ${
                    item.active
                      ? 'border-b-2 border-primary font-medium text-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="flex items-center py-3 text-sm text-gray-600 hover:text-gray-900">
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 