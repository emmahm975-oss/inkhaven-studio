"use client";

import Image from "next/image";
import { Download, Check } from "lucide-react";
import { useState } from "react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop", style: "Blackwork" },
  { id: 2, src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop", style: "Fine Line" },
  { id: 3, src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop", style: "Realism" },
  { id: 4, src: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=800&auto=format&fit=crop", style: "Traditional" },
  { id: 5, src: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop", style: "Blackwork" },
  { id: 6, src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop", style: "Fine Line" },
];

export default function Portfolio() {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedImages((prev) => 
      prev.includes(id) ? prev.filter((imgId) => imgId !== id) : [...prev, id]
    );
  };

  return (
    <section id="portfolio" className="py-24 px-4 max-w-7xl mx-auto bg-background">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Work</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Every piece is custom-designed and tattooed by our artists. 
          Browse our recent work to find inspiration. Click the download icon to save a reference!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
          >
            <Image
              src={image.src}
              alt={`Tattoo style: ${image.style}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
              <span className="text-white font-serif text-xl tracking-wider uppercase border-b-2 border-accent pb-1">
                {image.style}
              </span>

              <div className="flex gap-3 mt-2">
                <a 
                  href={image.src} 
                  download={`tattoo-inspiration-${image.id}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all duration-300"
                  title="Download image"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={20} />
                </a>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelection(image.id);
                  }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    selectedImages.includes(image.id) 
                      ? "bg-accent text-white" 
                      : "bg-white/20 hover:bg-white text-white hover:text-black"
                  }`}
                  title="Select this style"
                >
                  <Check size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}