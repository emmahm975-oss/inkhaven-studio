import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-16 px-4 flex flex-col items-center justify-center text-center">
      {/* Big Elegant Logo */}
      <Link href="/" className="font-serif text-4xl md:text-6xl tracking-widest uppercase mb-4">
        Ink<span className="text-accent">Haven</span>
      </Link>
      
      {/* Tagline */}
      <p className="text-secondary text-sm md:text-base tracking-widest uppercase mb-8">
        Art That Lasts Forever
      </p>

      {/* Social Icons (Optional - replace '#' with real links later) */}
      <div className="flex gap-6 mb-12">
        <a href="#" className="text-secondary hover:text-accent transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-secondary hover:text-accent transition-colors">
          <Facebook size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-xs text-secondary/50">
        &copy; {new Date().getFullYear()} InkHaven Studio. All rights reserved.
      </div>
    </footer>
  );
}