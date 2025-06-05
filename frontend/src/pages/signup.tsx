import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, Loader2, CheckCircle, AlertCircle, Eye, EyeOff, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ShopFlowSignup() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return null;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!phone.trim()) return 'Phone number is required';
    if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
      return 'Please enter a valid phone number';
    }
    return null;
  };

  const validatePassword = (password) => {
    if (!password.trim()) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters long';
    if (!/(?=.*[a-z])/.test(password)) return 'Password must contain at least one lowercase letter';
    if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain at least one uppercase letter';
    if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number';
    if (!/(?=.*[@$!%*?&])/.test(password)) return 'Password must contain at least one special character (@$!%*?&)';
    return null;
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword.trim()) return 'Please confirm your password';
    if (confirmPassword !== password) return 'Passwords do not match';
    return null;
  };

  // Get password strength
  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/(?=.*[a-z])/.test(password)) score++;
    if (/(?=.*[A-Z])/.test(password)) score++;
    if (/(?=.*\d)/.test(password)) score++;
    if (/(?=.*[@$!%*?&])/.test(password)) score++;
    
    if (score === 0) return { strength: 'none', color: 'bg-gray-200', text: '' };
    if (score <= 2) return { strength: 'weak', color: 'bg-red-500', text: 'Weak' };
    if (score <= 3) return { strength: 'fair', color: 'bg-yellow-500', text: 'Fair' };
    if (score <= 4) return { strength: 'good', color: 'bg-blue-500', text: 'Good' };
    return { strength: 'strong', color: 'bg-green-500', text: 'Strong' };
  };

  // Handle form submission
  const handleContinue = async () => {
    setErrors({});
    
    // Validate based on active tab
    let validationErrors = {};
    
    if (activeTab === 'email') {
      const emailError = validateEmail(email);
      if (emailError) validationErrors.email = emailError;
    } else {
      const phoneError = validatePhone(phone);
      if (phoneError) validationErrors.phone = phoneError;
    }
    
    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) validationErrors.password = passwordError;
    
    // Validate confirm password
    const confirmPasswordError = validateConfirmPassword(confirmPassword, password);
    if (confirmPasswordError) validationErrors.confirmPassword = confirmPasswordError;
    
    // If there are validation errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically make an API call to your backend
      const userData = {
        type: activeTab,
        [activeTab]: activeTab === 'email' ? email : phone,
        password: password, // In real app, this would be hashed on the backend
        timestamp: new Date().toISOString()
      };
      
      console.log('Registration data:', userData);
      
      // Show success state
      setSuccess(true);
      
      // Reset form and redirect after showing success

      setTimeout(() => {
        setSuccess(false);
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        router.push('/login');

      }, 2000);
      
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ 
        general: 'Registration failed. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login
  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    // Here you would integrate with your social auth provider
    // For example: Google OAuth, Facebook Login SDK, etc.
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Signup Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">ShopFlow</h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Get started now
          </h2>

          {/* Social Login Buttons */}
          <div className="space-y-4 mb-6">
            <button 
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">Sign up with Google</span>
            </button>

            <button 
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-gray-700 font-medium">Sign up with Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Alternative Registration */}
          <p className="text-center text-gray-600 mb-6">
            You have the option to register using either your email or phone number
          </p>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('email')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === 'email'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </button>
            <button
              onClick={() => setActiveTab('phone')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === 'phone'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </button>
          </div>

          {/* Input Field */}
          <div className="mb-6 space-y-4">
            {activeTab === 'email' ? (
              <div>
                <input
                  type="email"
                  placeholder="example.email@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: ''});
                  }}
                  className={`w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({...errors, phone: ''});
                  }}
                  className={`w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.phone 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
                {errors.phone && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>
            )}
            
            {/* Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: ''});
                  }}
                  className={`w-full px-4 py-3 pr-12 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.password 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrength(password).color}`}
                        style={{ width: `${(getPasswordStrength(password).strength === 'weak' ? 20 : 
                                            getPasswordStrength(password).strength === 'fair' ? 40 : 
                                            getPasswordStrength(password).strength === 'good' ? 60 : 
                                            getPasswordStrength(password).strength === 'strong' ? 80 : 0)}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 min-w-12">
                      {getPasswordStrength(password).text}
                    </span>
                  </div>
                </div>
              )}
              
              {errors.password && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.password}
                </div>
              )}
            </div>
            
            {/* Confirm Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) setErrors({...errors, confirmPassword: ''});
                  }}
                  className={`w-full px-4 py-3 pr-12 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.confirmPassword 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Match Indicator */}
              {confirmPassword && password && (
                <div className="mt-2">
                  <div className={`flex items-center gap-2 text-sm ${
                    confirmPassword === password ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {confirmPassword === password ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    <span>
                      {confirmPassword === password ? 'Passwords match' : 'Passwords do not match'}
                    </span>
                  </div>
                </div>
              )}
              
              {errors.confirmPassword && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          </div>

          {/* General Error Message */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errors.general}
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-700 text-sm">
                <CheckCircle className="w-4 h-4" />
                Registration successful! Please check your {activeTab} for verification.
              </div>
            </div>
          )}

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            disabled={isLoading || success}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group ${
              isLoading || success
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
            } text-white`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : success ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Success!</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <span className="text-gray-600">Have an account? </span>
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign in
            </Link>
          </div>
        </div>

        {/* Right Side - Hero Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute top-32 right-16 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute bottom-20 left-16 w-12 h-12 border border-white rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-8">
                <span className="text-2xl">@</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                With a Shopflow, you have the creative freedom to bring your unique store to life without the need for extensive technical expertise.
              </h3>

              {/* Mockup Browser */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white bg-opacity-30 rounded h-6 w-24"></div>
                    <div className="bg-white bg-opacity-30 rounded h-6 w-16"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white bg-opacity-30 rounded h-16"></div>
                    <div className="bg-white bg-opacity-30 rounded h-16"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Arrow */}
            <div className="absolute bottom-8 right-8">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Made with Visily Badge */}
          <div className="absolute -bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <span className="text-gray-600 text-sm">Made with</span>
            <span className="text-blue-600 font-semibold text-sm">Visily</span>
          </div>
        </div>
      </div>
    </div>
  );
}
