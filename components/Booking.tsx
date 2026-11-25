"use client";

import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    artist: "Any Available",
    size: "Small (2-4 inches)",
    placement: "Arm",
    idea: "",
  });

  const businessWhatsAppNumber = "447547662383";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const greeting = "Hello InkHaven! I would like to book a tattoo consultation.";
    
    const message = `${greeting}%0A%0A` +
      `*New Booking Request!*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Artist:* ${formData.artist}%0A` +
      `*Size:* ${formData.size}%0A` +
      `*Placement:* ${formData.placement}%0A` +
      `*Idea:* ${formData.idea}`;

    const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="book" className="py-24 px-4 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Book a Consultation</h2>
          <p className="text-secondary">
  Tell us about your idea. When you submit, this will open your WhatsApp to chat with us directly and secure your booking. 
  <strong className="text-primary block mt-2">Remember, a 50% deposit is required to lock in your appointment.</strong>
</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
              <label className="block text-sm font-medium text-secondary mb-2">Estimated Size</label>
              <select
                className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              >
                <option>Small (2-4 inches)</option>
                <option>Medium (5-8 inches)</option>
                <option>Large (9+ inches)</option>
                <option>Full Sleeve / Back Piece</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">Placement</label>
              <select
                className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                value={formData.placement}
                onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
              >
                <option>Arm / Forearm</option>
                <option>Leg / Thigh</option>
                <option>Back</option>
                <option>Chest</option>
                <option>Wrist / Ankle (Fine Line)</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Tattoo Idea & Details</label>
            <textarea
              required
              rows={4}
              className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
              placeholder="Describe your design, style (e.g., realism, traditional), and any reference images you have."
              value={formData.idea}
              onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
            ></textarea>
          </div>

          <div className="text-sm text-secondary text-center">
            *If you downloaded images from our portfolio, please attach them in the WhatsApp chat after sending this form.*
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-4 rounded-sm uppercase tracking-wider hover:bg-red-800 transition-colors flex items-center justify-center gap-2"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}