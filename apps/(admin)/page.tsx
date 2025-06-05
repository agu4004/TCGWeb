"use client"

import {
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  Filter,
  Download,
  Upload,
  Plus,
  Eye,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState } from "react"

export default function AdminDashboard() {
  const [selectedPages, setSelectedPages] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("name")
  const [activeTab, setActiveTab] = useState("all")

  const pages = [
    {
      id: 1,
      name: "Home Page",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Displayed",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 2,
      name: "Product Listing",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Displayed",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 3,
      name: "Product Detail",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Displayed",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 4,
      name: "Contact Us",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Draft",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 5,
      name: "About Us",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Displayed",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 6,
      name: "Blogs",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Hidden",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 7,
      name: "Reviews",
      lastEdit: "Aug 12, 2023",
      section: "3",
      status: "Hidden",
      thumbnail: "/placeholder.svg?height=40&width=60",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Displayed":
        return (
          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
            Displayed
          </Badge>
        )
      case "Draft":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            Draft
          </Badge>
        )
      case "Hidden":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            Hidden
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleSelectAll = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([])
    } else {
      setSelectedPages(pages.map((page) => page.id))
    }
  }

  const handleSelectPage = (id: number) => {
    if (selectedPages.includes(id)) {
      setSelectedPages(selectedPages.filter((pageId) => pageId !== id))
    } else {
      setSelectedPages([...selectedPages, id])
    }
  }

  const handleExport = () => {
    alert("Exporting...")
  }

  const handleImport = () => {
    alert("Importing...")
  }

  const handleAddPages = () => {
    alert("Adding pages...")
  }

  const handleSort = (field: string) => {
    setSortBy(field)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleEdit = (id: number) => {
    alert(`Editing page ${id}...`)
  }

  const handleDuplicate = (id: number) => {
    alert(`Duplicating page ${id}...`)
  }

  const handleDelete = (id: number) => {
    alert(`Deleting page ${id}...`)
  }

  const filteredPages = activeTab === "all" ? pages : pages.filter((page) => page.status.toLowerCase() === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span className="text-xl font-semibold">ShopFlow</span>
            </div>

            <nav className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-gray-600">
                <span>Dashboard</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600">
                  Admin Config
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Users</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center gap-1 text-blue-600 border-b-2 border-blue-600 pb-1">
                <span>Sales Channel</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <span>Analytics</span>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Bell className="w-5 h-5 text-gray-400" />
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 py-4 text-sm text-gray-600">
        <span>Sales Channel</span>
        <span className="mx-2">/</span>
        <span className="text-blue-600">Page</span>
      </div>

      {/* Main Content */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Pages</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2" onClick={handleExport}>
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button variant="outline" className="flex items-center gap-2" onClick={handleImport}>
              <Upload className="w-4 h-4" />
              Import
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2" onClick={handleAddPages}>
              <Plus className="w-4 h-4" />
              Add Pages
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-6 border-b">
          <div
            className={`pb-3 cursor-pointer ${activeTab === "all" ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-600"}`}
            onClick={() => handleTabChange("all")}
          >
            <span>All Pages ({pages.length})</span>
          </div>
          <div
            className={`pb-3 cursor-pointer ${activeTab === "displayed" ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-600"}`}
            onClick={() => handleTabChange("displayed")}
          >
            <span>Displayed ({pages.filter((page) => page.status === "Displayed").length})</span>
          </div>
          <div
            className={`pb-3 cursor-pointer ${activeTab === "draft" ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-600"}`}
            onClick={() => handleTabChange("draft")}
          >
            <span>Draft ({pages.filter((page) => page.status === "Draft").length})</span>
          </div>
          <div
            className={`pb-3 cursor-pointer ${activeTab === "hidden" ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-600"}`}
            onClick={() => handleTabChange("hidden")}
          >
            <span>Hidden ({pages.filter((page) => page.status === "Hidden").length})</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div></div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <Button variant="ghost" size="sm" onClick={() => handleSort("name")}>
                Name {sortBy === "name" && <ChevronDown className="w-3 h-3 ml-1" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={selectedPages.length === filteredPages.length}
                    onChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>THUMBNAIL</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>LAST EDIT</TableHead>
                <TableHead>SECTION</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead className="w-12"></TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedPages.includes(page.id)}
                      onChange={() => handleSelectPage(page.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  </TableCell>
                  <TableCell className="font-medium">
                    <Link href={`/admin/pages/${page.id}`} className="hover:text-blue-600">
                      {page.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-gray-600">{page.lastEdit}</TableCell>
                  <TableCell className="text-gray-600">{page.section}</TableCell>
                  <TableCell>{getStatusBadge(page.status)}</TableCell>
                  <TableCell>
                    <Eye className="w-4 h-4 text-gray-400" />
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleEdit(page.id)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDuplicate(page.id)}>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(page.id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={handlePreviousPage}>
            Previous
          </Button>
          <Button size="sm" className="bg-blue-600">
            {currentPage}
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextPage}>
            Next
          </Button>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-4 mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-gray-700">Learn more about page</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-blue-600 hover:underline">
              How to create a new page?
            </Link>
            <Link href="#" className="text-blue-600 hover:underline">
              How to manage pages?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
