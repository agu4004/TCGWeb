"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState("email")
  const [contact, setContact] = useState("")

  const handleTabChange = (tab: "email" | "phone") => {
    setActiveTab(tab)
    setContact("") // Clear the input when switching tabs
  }

  const handleContinue = () => {
    if (activeTab === "email") {
      if (!isValidEmail(contact)) {
        alert("Please enter a valid email address.")
        return
      }
    } else {
      if (!isValidPhoneNumber(contact)) {
        alert("Please enter a valid phone number.")
        return
      }
    }
    alert(`Continue with: ${contact}`) // Replace with actual logic
  }

  const handleSocialLogin = (provider: "google" | "facebook") => {
    alert(`Sign in with ${provider}`) // Replace with actual social login logic
  }

  const isValidEmail = (email: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhoneNumber = (phoneNumber: string) => {
    // Basic phone number validation regex (adjust as needed)
    const phoneRegex = /^\d{10}$/ // Assumes 10-digit phone number
    return phoneRegex.test(phoneNumber)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span className="text-xl font-semibold">ShopFlow</span>
            </div>
            <h1 className="text-2xl font-bold mb-8">Get started now</h1>
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 flex items-center gap-2"
                onClick={() => handleSocialLogin("google")}
              >
                <div className="w-5 h-5 bg-red-500 rounded"></div>
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="flex-1 flex items-center gap-2"
                onClick={() => handleSocialLogin("facebook")}
              >
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                Sign up with Facebook
              </Button>
            </div>

            <div className="text-center">
              <span className="text-gray-400 text-sm">OR</span>
            </div>

            <p className="text-center text-gray-600 text-sm">
              You have the option to register using either your email or phone number
            </p>

            <div className="flex border-b">
              <button
                onClick={() => handleTabChange("email")}
                className={`flex-1 pb-3 text-center ${
                  activeTab === "email" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
                }`}
              >
                Email
              </button>
              <button
                onClick={() => handleTabChange("phone")}
                className={`flex-1 pb-3 text-center ${
                  activeTab === "phone" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
                }`}
              >
                Phone Number
              </button>
            </div>

            <div>
              <Input
                type={activeTab === "email" ? "email" : "tel"}
                placeholder={activeTab === "email" ? "example.email@gmail.com" : "123-456-7890"}
                className="bg-gray-100 border-0"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 flex items-center justify-center gap-2"
              onClick={handleContinue}
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="text-center">
              <span className="text-gray-600">Have an account? </span>
              <Link href="/auth/signup" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image and Info */}
      <div className="flex-1 bg-gradient-to-br from-pink-100 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-64 bg-white rounded-lg shadow-lg transform rotate-3"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded opacity-20"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-8 right-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">@</span>
            </div>
            <p className="text-gray-700">
              With a Shopflow, you have the creative freedom to bring your unique store to life without the need for
              extensive technical expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
