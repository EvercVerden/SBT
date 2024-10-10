import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm text-gray-600">&copy; 2023 JTL Fund. All rights reserved.</p>
          </div>
          <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/about" className="text-sm text-gray-600 hover:text-pink-500">About Us</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-pink-500">Terms of Service</Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-pink-500">Privacy Policy</Link>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-pink-500"><Facebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500"><Twitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500"><Instagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}