"use client"

import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const [formErrors, setFormErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.firstName) {
      errors.firstName = "First name is required"
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required"
    }
    if (!formData.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }
    if (!formData.password) {
      errors.password = "Password is required"
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms and conditions"
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMessage("")
    setErrorMessage("")

    if (validateForm()) {
      // Simulate successful registration
      setSuccessMessage("Registration successful!")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreeToTerms: false,
      })
      setFormErrors({})
    } else {
      setErrorMessage("Please correct the errors below.")
    }
  }

  const handleSocialLogin = (provider) => {
    alert(`Login with ${provider} clicked`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-md mx-auto w-full">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
            <span className="text-xl font-semibold text-gray-600">Logo</span>
          </div>

          <h1 className="text-2xl font-bold mb-8">Begin your journey</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-700 font-medium">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Input first name"
                  className="mt-2 bg-gray-100 border-0"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-700 font-medium">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Input last name"
                  className="mt-2 bg-gray-100 border-0"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example.email@gmail.com"
                className="mt-2 bg-gray-100 border-0"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter at least 8+ characters"
                  className="bg-gray-100 border-0 pr-10"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                name="agreeToTerms"
                className="mt-1"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />
              <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                By signing up, I agree with the{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
              {formErrors.agreeToTerms && <p className="text-red-500 text-sm">{formErrors.agreeToTerms}</p>}
            </div>

            {successMessage && <p className="text-green-500">{successMessage}</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
              Register
            </Button>

            <div className="text-center">
              <span className="text-gray-400 text-sm">OR</span>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 flex items-center gap-2"
                onClick={() => handleSocialLogin("Google")}
              >
                <div className="w-5 h-5 bg-red-500 rounded"></div>
                Google
              </Button>
              <Button
                variant="outline"
                className="flex-1 flex items-center gap-2"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                Facebook
              </Button>
              <Button
                variant="outline"
                className="flex-1 flex items-center gap-2"
                onClick={() => handleSocialLogin("Apple")}
              >
                <div className="w-5 h-5 bg-gray-800 rounded"></div>
                Apple
              </Button>
            </div>

            <div className="text-center">
              <span className="text-gray-600">Returning user? </span>
              <Link href="/auth/signin" className="text-blue-600 hover:underline">
                Log in here
              </Link>
            </div>
          </form>
        </div>

        {/* Right Side - Benefits */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-8">
            Come join us
            <div className="w-24 h-1 bg-blue-600 mt-2 mx-auto lg:mx-0"></div>
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <div>
                <p className="text-gray-700">Explore articles, tutorials, and guides on diverse subjects</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <div>
                <p className="text-gray-700">Learn at your own pace and access educational resources anytime</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-pink-500 rounded"></div>
              </div>
              <div>
                <p className="text-gray-700">Engage with a community of learners and share insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
