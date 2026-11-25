import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.3)" 
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 md:mt-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
          Art That <span className="text-accent italic">Lasts</span> Forever.
        </h1>
        <p className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto drop-shadow-md">
          Premium custom tattoos in a private, sterile, and welcoming environment. 
          We turn your vision into a masterpiece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#book"
            className="bg-primary text-background px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Book Consultation 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#portfolio"
            className="border border-white/30 text-primary px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}