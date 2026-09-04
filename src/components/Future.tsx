import { useReveal } from '@/hooks/useReveal';
import {
  Bike,
  Car,
  Globe,
  Tent,
  Building,
  Backpack,
  Users,
  Smartphone,
  Ticket,
} from 'lucide-react';

const futures = [
  { icon: Bike, label: 'Motorcycle Journeys', available: true },
  { icon: Car, label: 'Private Travel', available: true },
  { icon: Globe, label: 'International Travel', available: false },
  { icon: Tent, label: 'Camps', available: false },
  { icon: Building, label: 'Stay Experiences', available: false },
  { icon: Backpack, label: 'Travel Gear', available: false },
  { icon: Users, label: 'Community', available: true },
  { icon: Smartphone, label: 'SilentMiles App', available: false },
  { icon: Ticket, label: 'Events', available: false },
];

export default function Future() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-charcoal-900 py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="section-number mb-6">14 — This Is Only the Beginning</p>
        <h2 className="font-display text-4xl tracking-mega text-ivory-50 md:text-5xl lg:text-6xl">
          This Is Only the Beginning
        </h2>

        <div className="mx-auto my-8 max-w-xl">
          <p className="font-serif text-lg italic text-ivory-200/60">
            Today, we're creating rides.
          </p>
          <p className="mt-2 font-serif text-lg italic text-ivory-200/60">
            Tomorrow, we're creating a world around them.
          </p>
        </div>

        <div className="mx-auto my-10 gold-divider" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {futures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-3 rounded-xl border p-6 transition-all duration-500 ${
                  f.available
                    ? 'border-champagne-400/30 bg-champagne-400/5'
                    : 'border-charcoal-600 bg-charcoal-800/30'
                } ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  opacity: visible ? undefined : 0,
                }}
              >
                <Icon
                  className={f.available ? 'text-champagne-400' : 'text-charcoal-400'}
                  size={28}
                />
                <span
                  className={`text-xs font-medium uppercase tracking-mega ${
                    f.available ? 'text-ivory-200/80' : 'text-ivory-200/30'
                  }`}
                >
                  {f.label}
                </span>
                {f.available && (
                  <span className="text-[10px] font-semibold uppercase tracking-ultra text-champagne-400">
                    Available
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
