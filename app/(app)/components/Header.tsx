"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to determine if the link is active
  const isActive = (path: string) => pathname === path;

  // Function to handle link click in mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          TravelEase
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/search"
                  className={`hover:text-blue-500 transition-colors ${
                    isActive("/search") ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className={`hover:text-blue-500 transition-colors ${
                    isActive("/book") ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="/ancillaries"
                  className={`hover:text-blue-500 transition-colors ${
                    isActive("/ancillaries") ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  Ancillaries
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/search"
              onClick={handleLinkClick}
              className={`block py-2 hover:text-blue-500 transition-colors ${
                isActive("/search") ? "text-blue-500 font-semibold" : ""
              }`}
            >
              Search
            </Link>
            <Link
              href="/book"
              onClick={handleLinkClick}
              className={`block py-2 hover:text-blue-500 transition-colors ${
                isActive("/book") ? "text-blue-500 font-semibold" : ""
              }`}
            >
              Book
            </Link>
            <Link
              href="/ancillaries"
              onClick={handleLinkClick}
              className={`block py-2 hover:text-blue-500 transition-colors ${
                isActive("/ancillaries") ? "text-blue-500 font-semibold" : ""
              }`}
            >
              Ancillaries
            </Link>
          </nav>
          <div className="px-4 pb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                handleLinkClick(); // Close menu after theme toggle
              }}
              className="w-full justify-start"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 mr-2" />
              ) : (
                <MoonIcon className="h-5 w-5 mr-2" />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
