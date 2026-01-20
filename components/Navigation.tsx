'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            AFH Consultant
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/curriculum" className="text-gray-700 hover:text-primary-600 font-medium">
              Curriculum
            </Link>
            <Link href="/exam" className="text-gray-700 hover:text-primary-600 font-medium">
              Practice Exam
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-primary-600 font-medium">
              Tools
            </Link>
            <Link href="/handbook" className="text-gray-700 hover:text-primary-600 font-medium">
              Master Handbook
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/curriculum" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
              Curriculum
            </Link>
            <Link href="/exam" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
              Practice Exam
            </Link>
            <Link href="/tools" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
              Tools
            </Link>
            <Link href="/handbook" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
              Master Handbook
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

