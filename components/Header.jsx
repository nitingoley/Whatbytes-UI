"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Header component with logo, search input, and cart icon
const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Handles search submission and updates the route with the query
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-[#0047AB] shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            Whatbyte
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative mx-auto max-w-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white" />
            </div>
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="block w-full pl-10 pr-3 py-2 border border-white rounded-md leading-5 bg-[#0047AB] text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
            />
          </form>

          {/* Cart Button */}
          <Link
            href="/cart"
            className="flex items-center bg-[#022b63] space-x-2 px-3 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#0047AB] transition relative"
          >
            <ShoppingCart className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm font-medium">Cart</span>
            {/* Optional badge can be added if needed */}
            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
