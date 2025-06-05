import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  Search, 
  Bell, 
  HelpCircle, 
  User, 
  MoreHorizontal,
  Eye,
  Calendar,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Undo,
  Redo,
  MoreVertical
} from 'lucide-react';

export default function ShopFlowAdmin() {
  const [pageStatus, setPageStatus] = useState('Displayed');
  const [pageTitle, setPageTitle] = useState('About Us');
  const [description, setDescription] = useState(`About Us

Welcome to Menswear Maven – Your Ultimate Destination for Stylish Men's Fashion!

Menswear Maven: Redefining men's style since 2015. Explore our curated collection of timeless yet trendy fashion, expressing your individuality and enhancing your personality. Look your best with our one-stop online store.


Our mission

Our mission is to empower men to embrace their unique style and feel confident in their appearance. We understand that every man has his distinct taste, and that's why we offer a diverse range of high-quality clothing and accessories to cater to different preferences and occasions.`);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
              <span className="text-xl font-semibold text-gray-900">ShopFlow</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <span>Dashboard</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <span>Admin Config</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 text-blue-600 border-b-2 border-blue-600 pb-3">
                <span>Sales Channel</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <span>Analytics</span>
              </button>
            </nav>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Bell className="w-5 h-5 text-gray-400" />
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Sales Channel</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className="text-blue-600">Page Detail</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Main Editor Area */}
        <div className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">About Us</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded">
                <MoreHorizontal className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
            </div>
          </div>

          {/* Left Sidebar Navigation */}
          <div className="flex space-x-6">
            <div className="w-64">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium">General Information</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Search Engine Review</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                {/* General Information Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-medium text-gray-900">General Information</h2>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>

                {/* Page Title */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Title
                  </label>
                  <input
                    type="text"
                    value={pageTitle}
                    onChange={(e) => setPageTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  
                  {/* Toolbar */}
                  <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex items-center space-x-1">
                    <select className="text-sm border-none bg-transparent">
                      <option>Normal</option>
                    </select>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Underline className="w-4 h-4" />
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <List className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ListOrdered className="w-4 h-4" />
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <select className="text-sm border-none bg-transparent">
                      <option>Insert</option>
                    </select>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <select className="text-sm border-none bg-transparent">
                      <option>12</option>
                    </select>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Undo className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Redo className="w-4 h-4" />
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Editor */}
                  <div className="border-l border-r border-b border-gray-300 rounded-b-lg bg-white min-h-[300px]">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full h-full min-h-[300px] p-4 border-none resize-none focus:outline-none font-mono text-sm leading-relaxed"
                      placeholder="Enter your page description here..."
                    />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Page Status</h3>
            
            <div className="space-y-4">
              <div>
                <select 
                  value={pageStatus}
                  onChange={(e) => setPageStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-200 text-purple-800 rounded-lg"
                >
                  <option>Displayed</option>
                  <option>Hidden</option>
                  <option>Draft</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>At 03:34 PM • On Aug 23, 2023</span>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Schedule Display</span>
              </button>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium">
            Save and publish
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Made with</span>
          <span className="text-blue-600 font-medium">Visily</span>
        </div>
      </footer>
    </div>
  );
}
