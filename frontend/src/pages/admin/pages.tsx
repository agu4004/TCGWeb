import { useState } from 'react';
import { Search, Bell, HelpCircle, User, Filter, Download, Upload, Plus, Eye, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PagesManagement() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedPages, setSelectedPages] = useState([1, 2, 3, 4, 5]); // Initially selected pages
  
  const pages = [
    {
      id: 1,
      name: 'Home Page',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Displayed',
      thumbnail: '🏠'
    },
    {
      id: 2,
      name: 'Product Listing',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Displayed',
      thumbnail: '📋'
    },
    {
      id: 3,
      name: 'Product Detail',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Displayed',
      thumbnail: '📄'
    },
    {
      id: 4,
      name: 'Contact Us',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Draft',
      thumbnail: '📞'
    },
    {
      id: 5,
      name: 'About Us',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Displayed',
      thumbnail: 'ℹ️'
    },
    {
      id: 6,
      name: 'Blogs',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Hidden',
      thumbnail: '📝'
    },
    {
      id: 7,
      name: 'Reviews',
      lastEdit: 'Aug 12, 2023',
      section: '3',
      status: 'Hidden',
      thumbnail: '⭐'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Pages (5)', count: 5 },
    { id: 'displayed', label: 'Displayed (4)', count: 4 },
    { id: 'draft', label: 'Draft (1)', count: 1 },
    { id: 'hidden', label: 'Hidden (0)', count: 0 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Displayed':
        return 'bg-pink-100 text-pink-700';
      case 'Draft':
        return 'bg-blue-100 text-blue-700';
      case 'Hidden':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Handle individual checkbox selection
  const handlePageSelect = (pageId) => {
    setSelectedPages(prev => 
      prev.includes(pageId) 
        ? prev.filter(id => id !== pageId)
        : [...prev, pageId]
    );
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages.map(page => page.id));
    }
  };

  // Check if all pages are selected
  const isAllSelected = selectedPages.length === pages.length;
  const isIndeterminate = selectedPages.length > 0 && selectedPages.length < pages.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-gray-900">ShopFlow</span>
            </div>
            
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                <span>📊</span>
                <span>Dashboard</span>
              </a>
              <div className="relative">
                <button className="text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                  <span>⚙️</span>
                  <span>Admin Config</span>
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <div className="relative">
                <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 border-b-2 border-blue-600 pb-1">
                  <span>📄</span>
                  <span>Sales Channel</span>
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                <span>📈</span>
                <span>Analytics</span>
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500" />
            <Bell className="w-5 h-5 text-gray-500" />
            <HelpCircle className="w-5 h-5 text-gray-500" />
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Sales Channel</span>
          <span>/</span>
          <span className="text-blue-600">Page</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Pages</h1>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Upload className="w-4 h-4" />
              <span>Import</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>Add Pages</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-1 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            
            {selectedPages.length > 0 && (
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                <span className="text-sm font-medium">
                  {selectedPages.length} selected
                </span>
                <button 
                  onClick={() => setSelectedPages([])}
                  className="text-blue-600 hover:text-blue-800 text-sm underline"
                >
                  Clear selection
                </button>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-gray-900 bg-white border border-gray-300 rounded px-3 py-1"
            >
              <option value="name">Name</option>
              <option value="date">Last Edit</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-6 py-3">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300" 
                    checked={isAllSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = isIndeterminate;
                    }}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thumbnail
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Edit
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Section
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="w-16 px-6 py-3"></th>
                <th className="w-16 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input 
                      type="checkbox" 
                      checked={selectedPages.includes(page.id)}
                      onChange={() => handlePageSelect(page.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-lg">
                      {page.thumbnail}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{page.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{page.lastEdit}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{page.section}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(page.status)}`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div></div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 text-white bg-blue-600 rounded">1</button>
            <button className="px-3 py-1 text-gray-600 hover:text-gray-900">2</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-3 py-1 text-gray-600 hover:text-gray-900">10</button>
            <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs">i</span>
              </div>
              <span className="text-sm text-blue-800">Learn more about page</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                How to create a new page ?
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                How to manage pages ?
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-blue-600 font-semibold">Visily</span>
          </div>
        </div>
      </div>
    </div>
  );
}