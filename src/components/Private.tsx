import { useReveal } from '@/hooks/useReveal';
import { Bike, Car, Building, MapPinned, Utensils, Camera, Tent, Plane } from 'lucide-react';

const features = [
  { icon: Bike, label: 'Motorcycle Rides' },
  { icon: Car, label: 'Chauffeur-Driven Journeys' },
  { icon: Building, label: 'Premium Stays' },
  { icon: MapPinned, label: 'Private Guides' },
  { icon: Utensils, label: 'Curated Dining' },
  { icon: Camera, label: 'Photography Experiences' },
  { icon: Tent, label: 'Private Camps' },
  { icon: Plane, label: 'Airport Transfers' },
];

const bgImage =
  'https://images.pexels.com/photos/18671249/pexels-photo-18671249.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Private() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="private"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Luxury desert camp"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="section-number mb-6">09 — SilentMiles Private</p>
        <h2 className="font-display text-5xl tracking-mega text-ivory-50 md:text-6xl lg:text-7xl">
          SILENTMILES
          <span className="text-gold-gradient"> PRIVATE</span>
        </h2>
        <p className="mt-6 font-serif text-xl italic text-champagne-300/80 md:text-2xl">
          For journeys that deserve to be entirely yours.
        </p>

        <div className="mx-auto my-10 gold-divider" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-3 rounded-xl border border-champagne-400/20 bg-charcoal-900/40 p-5 backdrop-blur-sm transition-all duration-500 hover:border-champagne-400/50 hover:bg-charcoal-900/60 ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: visible ? undefined : 0,
                }}
              >
                <Icon className="text-champagne-400" size={28} />
                <span className="text-xs font-medium uppercase tracking-mega text-ivory-200/80">
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>

        <a
          href="#cta"
          className="mt-12 inline-block rounded-full bg-champagne-400 px-10 py-4 text-xs font-semibold uppercase tracking-mega text-charcoal-900 transition-all duration-300 hover:bg-champagne-300 hover:shadow-xl hover:shadow-champagne-400/30"
        >
          Create a Private Journey
        </a>
      </div>
    </section>
  );
}
