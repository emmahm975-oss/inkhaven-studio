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
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
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
              className="text-primary hover:text-accent focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Slide Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-serif text-primary hover:text-accent transition-colors uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#book"
            className="mt-8 bg-accent text-white px-12 py-4 rounded-sm text-lg uppercase tracking-wider hover:bg-red-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}