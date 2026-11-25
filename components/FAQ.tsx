"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Does getting a tattoo hurt?", a: "Pain is subjective. Most people describe it as a scratching or vibrating sensation. Areas with more flesh (like the outer arm) hurt less than areas over bone (like the ribs or ankle)." },
    { q: "How do I prepare for my appointment?", a: "Get a good night's sleep, eat a full meal beforehand, and stay hydrated. Avoid alcohol or blood-thinning medications for 24 hours before your session." },
    { q: "How much is the deposit?", a: "A 50% non-refundable deposit is required to book your appointment. This goes towards the final cost of your tattoo and secures your time slot." },
    { q: "Can I bring my own design?", a: "Absolutely! We love working with your ideas. Our artists will refine your concept to ensure it flows with your body and heals beautifully." },
    { q: "Do you do cover-ups?", a: "Yes, we do! Cover-ups require a consultation so our artists can assess the existing tattoo and design a piece that will effectively conceal it." },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-surface border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary">Everything you need to know before your visit.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-surface text-secondary border-t border-white/10">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}