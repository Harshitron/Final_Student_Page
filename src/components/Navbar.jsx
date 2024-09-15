import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import React from 'react';

export default function Navbar({ canUpdateApplication }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow border-b border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="PMSSS Logo" className="h-10" />
            <h1 className="text-xl font-bold">PMSSS Scholarship</h1>
          </div>

          {/* Desktop Links (Visible on screens ≥ 1200px) */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-700">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-700">About Us</Link>
            <Link to="/eligibility" className="text-gray-600 hover:text-blue-700">Eligibility</Link>
            <Link to="/track-application" className="text-gray-600 hover:text-blue-700">Track Application</Link>
            <Link to="/faqs" className="text-gray-600 hover:text-blue-700">FAQs</Link>
            <Link to="/apply" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Apply Now</Link>
            {canUpdateApplication && (
              <Link to="/update-application" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Update Application</Link>
            )}
            <Link to="/sign-in" className="text-gray-600 hover:text-blue-700">Sign In</Link>
            <Link to="/sign-up" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</Link>
          </div>

          {/* Mobile Menu Button (Visible on screens < 1200px) */}
          <button
            className="xl:hidden"  // Button is hidden on large screens
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links (Visible only when toggle is active and screen is < 1200px) */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link to="/" className="block text-gray-600 hover:text-blue-700">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-700">About Us</Link>
            <Link to="/eligibility" className="block text-gray-600 hover:text-blue-700">Eligibility</Link>
            <Link to="/track-application" className="block text-gray-600 hover:text-blue-700">Track Application</Link>
            <Link to="/faqs" className="block text-gray-600 hover:text-blue-700">FAQs</Link>
            <Link to="/apply" className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center">Apply Now</Link>
            {canUpdateApplication && (
              <Link to="/update-application" className="block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-center">Update Application</Link>
            )}
            <Link to="/sign-in" className="block text-gray-600 hover:text-blue-700">Sign In</Link>
            <Link to="/sign-up" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
