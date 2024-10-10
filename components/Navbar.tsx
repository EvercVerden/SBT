"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInDialog } from "@/components/SignInDialog";

export function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleSearch = () => {
    console.log("Search functionality to be implemented");
  };

  const handleSignInSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
          JTL Fund
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors">
            Explore
          </Link>
          <Link href="/community" className="text-gray-700 hover:text-gray-900 transition-colors">
            Community
          </Link>
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search" 
              className="w-64 pr-10 rounded-full border-gray-300 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
            />
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
            <Bell className="h-5 w-5 mr-2" />
            <span className="hidden md:inline">Notifications</span>
          </Button>
          {user ? (
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              <User className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">User ID: {user.user_id}</span>
            </Button>
          ) : (
            <Button 
              variant="ghost"
              onClick={() => setShowSignIn(true)}
              className="text-gray-700 hover:text-gray-900"
            >
              <User className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Sign In</span>
            </Button>
          )}
        </div>
      </div>
      <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} onSignInSuccess={handleSignInSuccess} />
    </nav>
  );
}