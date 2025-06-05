"use client"

import type React from "react"

import { ArrowLeft, Search, Bell, HelpCircle, ChevronDown, MoreHorizontal, Eye, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function PageEditor() {
  const [pageData, setPageData] = useState({ title: "About Us", content: "...", status: "displayed" })
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault()
        event.returnValue = "" // Required for some browsers
        return "You have unsaved changes. Are you sure you want to leave?"
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [hasUnsavedChanges])

  const handleSave = () => {
    // Save changes to backend
    setHasUnsavedChanges(false)
    alert("Changes saved successfully!")
  }

  const handlePreview = () => {
    window.open("/preview", "_blank")
  }

  const handleStatusChange = (value: string) => {
    setPageData({ ...pageData, status: value })
    setHasUnsavedChanges(true)
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageData({ ...pageData, title: event.target.value })
    setHasUnsavedChanges(true)
  }

  const handleBold = () => {
    // Implement bold functionality
    setHasUnsavedChanges(true)
  }

  const handleItalic = () => {
    // Implement italic functionality
    setHasUnsavedChanges(true)
  }

  const handleUnderline = () => {
    // Implement underline functionality
    setHasUnsavedChanges(true)
  }

  const handleScheduleDisplay = () => {
    // Implement schedule display functionality
    setHasUnsavedChanges(true)
  }

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
              <div className="flex items-center gap-1 text-gray-600">
                <span>Admin Config</span>
                <ChevronDown className="w-4 h-4" />
              </div>
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
        <span>Page</span>
        <span className="mx-2">/</span>
        <span className="text-blue-600">Page Detail</span>
      </div>

      {/* Page Header */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-2xl font-bold">{pageData.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
            <Button variant="outline" className="flex items-center gap-2" onClick={handlePreview}>
              <Eye className="w-4 h-4" />
              Preview
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 grid lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Sidebar Navigation */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="font-medium">General Information</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 ml-5">
                <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
                <span>Search Engine Review</span>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                General Information
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">?</span>
                </div>
              </h2>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="pageTitle" className="text-gray-700 font-medium">
                  Page Title
                </Label>
                <Input id="pageTitle" value={pageData.title} className="mt-2" onChange={handleTitleChange} />
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-700 font-medium">
                  Description
                </Label>
                <div className="mt-2 border rounded-lg">
                  {/* Rich Text Editor Toolbar */}
                  <div className="border-b p-3 flex items-center gap-2">
                    <Select defaultValue="paragraph">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paragraph">Paragraph</SelectItem>
                        <SelectItem value="heading1">Heading 1</SelectItem>
                        <SelectItem value="heading2">Heading 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="font-bold" onClick={handleBold}>
                        B
                      </Button>
                      <Button variant="ghost" size="sm" className="italic" onClick={handleItalic}>
                        I
                      </Button>
                      <Button variant="ghost" size="sm" className="underline" onClick={handleUnderline}>
                        U
                      </Button>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        •
                      </Button>
                      <Button variant="ghost" size="sm">
                        1.
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm">
                      Link
                    </Button>
                    <Select defaultValue="13">
                      <SelectTrigger className="w-16">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="13">13</SelectItem>
                        <SelectItem value="14">14</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">About Us</h3>
                      <p className="text-gray-700 mb-4">
                        Welcome to Menswear Maven – Your Ultimate Destination for Stylish Men's Fashion!
                      </p>
                      <p className="text-gray-700">
                        Menswear Maven: Redefining men's style since 2015. Explore our curated collection of timeless
                        yet trendy fashion, expressing your individuality and enhancing your personality. Look your best
                        with our one-stop online store.
                      </p>
                    </div>

                    <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Fashion store interior"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Our mission</h3>
                      <p className="text-gray-700">
                        Our mission is to empower men to embrace their unique style and feel confident in their
                        appearance. We understand that every man has his distinct taste, and that's why we offer a
                        diverse range of high-quality clothing and accessories to cater to different preferences and
                        occasions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Preview */}
          <div className="bg-white rounded-lg p-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search Engine Review on Shopflow</h3>
              <Button variant="ghost" className="text-blue-600">
                Preview
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                <div>
                  <h4 className="text-blue-600 text-lg">About Us - Welcome to Menswear Maven</h4>
                  <p className="text-green-600 text-sm">menswearmaven.shopflow.com/about-us</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Welcome to Menswear Maven – Your Ultimate Destination for Stylish Men's Fashion!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">Learn more about Shopflow Search Engine</span>
              <Link href="#" className="text-blue-600 hover:underline ml-auto">
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Page Status</h3>

            <div className="space-y-4">
              <div>
                <Select value={pageData.status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="displayed">Displayed</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-gray-600">At 03:34 PM • On Aug 23, 2023</div>

              <Button
                variant="ghost"
                className="text-pink-600 flex items-center gap-2 p-0"
                onClick={handleScheduleDisplay}
              >
                <Calendar className="w-4 h-4" />
                Schedule Display
              </Button>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleSave}
                disabled={!hasUnsavedChanges}
              >
                Save and publish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
