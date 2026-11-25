"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  const businessWhatsAppNumber = "447547662383";
  const depositMessage = encodeURIComponent("Hello InkHaven! I would like to pay the 50% deposit and book an appointment for a tattoo.");
  const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${depositMessage}`;

  const packages = [
    { name: "Small Tattoo", price: "$250", desc: "Perfect for minimalist, fine line, or small script pieces (approx. 2-4 inches)." },
    { name: "Medium Tattoo", price: "$450", desc: "Great for detailed designs, traditional pieces, or medium-sized cover-ups (approx. 5-8 inches)." },
    { name: "Large Tattoo", price: "$700", desc: "Ideal for large custom pieces, realistic portraits, or half-sleeves (9+ inches)." },
    { name: "Full Day Session", price: "$1000", desc: "Book the artist for the full day to work on large projects, back pieces, or full sleeves." },
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Pricing & Packages</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Transparent pricing for premium custom work. Custom designs are available for every tier. 
            <strong className="text-primary block mt-2">A 50% non-refundable deposit is required to secure your appointment.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-surface border border-white/10 p-8 rounded-sm flex flex-col h-full hover:border-accent transition-colors duration-300">
              <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold text-accent mb-4">{pkg.price}</div>
              <p className="text-secondary text-sm flex-grow mb-6">{pkg.desc}</p>
              <div className="flex items-center gap-2 text-sm text-primary mb-6">
                <Check size={16} className="text-accent" /> Custom Designs Included
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-primary text-background py-3 rounded-sm font-semibold uppercase tracking-wider hover:bg-secondary transition-colors"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center bg-surface/50 border border-white/10 p-6 rounded-sm max-w-3xl mx-auto">
          <p className="text-secondary text-sm">
            Prices are estimates and may vary based on complexity, placement, and artist. A 50% deposit is required to lock in your date. The remaining balance is due on the day of the session.
          </p>
        </div>
      </div>
    </section>
  );
}