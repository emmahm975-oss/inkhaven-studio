"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Portfolio", href: "#portfolio" },
     { name: "Pricing", href: "#pricing" },
    { name: "Artists", href: "#artists" },
    { name: "Aftercare", href: "#aftercare" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl tracking-widest uppercase">
              Ink<span className="text-accent">Haven</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#book"
                className="bg-accent text-white px-6 py-2.5 rounded-sm text-sm uppercase tracking-wider hover:bg-red-800 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-secondary hover:text-primary text-base uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#book"
              className="block px-3 py-2 text-accent font-bold text-base uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}