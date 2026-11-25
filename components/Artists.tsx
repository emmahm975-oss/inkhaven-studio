import Image from "next/image";

const artists = [
  {
    name: "Elena Rossi",
    specialty: "Fine Line & Minimalist",
    bio: "Elena specializes in delicate, intricate designs with a focus on healing perfectly. Her style is perfect for first-timers and those seeking elegant, timeless pieces.",
    // Working Pexels image (Female artist)
    image: "https://images.pexels.com/photos/16940645/pexels-photo-16940645.jpeg?auto=compress&cs=tinysrgb&w=800", 
  },
  {
    name: "Marcus Vance",
    specialty: "Blackwork & Traditional",
    bio: "With over 10 years of experience, Marcus creates bold, high-contrast pieces that stand the test of time. He loves large-scale geometric and traditional designs.",
    // Working Unsplash image (Male artist)
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop", 
  },
  {
    name: "Jade Chen",
    specialty: "Realism & Color",
    bio: "Jade is a master of color and realism, bringing portraits and vibrant scenes to life on skin. Her attention to detail and color theory is unmatched.",
    // Working Unsplash image (Female artist working)
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop", 
  }
];

export default function Artists() {
  return (
    <section id="artists" className="py-24 px-4 bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Artists</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We only work with the best. Our award-winning artists are passionate about their craft and dedicated to giving you a piece you'll love forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-background">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bio overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <p className="text-sm text-white">{artist.bio}</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl">{artist.name}</h3>
              <p className="text-accent text-sm uppercase tracking-wider mb-2">{artist.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}