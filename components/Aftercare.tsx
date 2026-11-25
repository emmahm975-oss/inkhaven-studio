export default function Aftercare() {
  const steps = [
    { title: "Keep It Clean", desc: "Wash your tattoo gently with fragrance-free soap and lukewarm water 2-3 times a day. Pat dry with a clean paper towel." },
    { title: "Moisturize", desc: "Apply a thin layer of tattoo-specific ointment or unscented lotion. Do not over-moisturize; the skin needs to breathe." },
    { title: "Avoid Sun & Water", desc: "Keep your tattoo out of direct sunlight and avoid swimming pools, hot tubs, or long baths for at least 2 weeks." },
    { title: "Don't Pick or Scratch", desc: "As your tattoo heals, it will itch and peel. Do not pick or scratch it, as this can pull out the ink and cause scarring." },
  ];

  return (
    <section id="aftercare" className="py-24 px-4 bg-background border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Aftercare Guide</h2>
          <p className="text-secondary">
            Proper aftercare is just as important as the tattoo itself. Follow these steps to ensure your new ink heals perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-surface p-8 rounded-sm border border-white/5">
              <div className="text-accent font-serif text-4xl mb-4">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}