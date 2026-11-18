"use client";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Mymenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-indigo-600">
          BrandLogo
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none md:hidden"
        >
          {isOpen ? (
            /* Close (X) Icon */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Menu Icon */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}