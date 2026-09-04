import { useReveal } from '@/hooks/useReveal';
import { Mountain, Waves, CloudRain, Flame, Compass, MessageCircle, ArrowRight } from 'lucide-react';

const whatsappCommunityLink = 'https://chat.whatsapp.com/B9AGI21HmIyAftjaNxrmSf';

const badges = [
  { icon: Mountain, label: 'Mountain Seeker' },
  { icon: Waves, label: 'Coastal Rider' },
  { icon: CloudRain, label: 'Monsoon Rider' },
  { icon: Flame, label: 'Long Haul' },
  { icon: Compass, label: 'Explorer' },
];

const benefits = [
  'Early access to rides',
  'Special events',
  'Member-only journeys',
  'Community meetups',
  'Limited-edition merchandise',
  'Rider profiles',
  'Loyalty benefits',
];

export default function Community() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="community"
      ref={ref}
      className="relative bg-charcoal-800 py-28 md:py-40"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">13 — The SilentMiles Community</p>
          <h2 className="font-display text-4xl tracking-mega text-ivory-50 md:text-5xl lg:text-6xl">
            The SilentMiles Community
          </h2>
          <p className="mt-4 font-serif text-lg italic text-ivory-200/50">
            Come for the road. Stay for the people.
          </p>
        </div>

        {/* Your Miles preview */}
        <div
          className={`mb-12 rounded-2xl border border-champagne-400/20 bg-charcoal-900/50 p-8 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-ultra text-champagne-400">
            Your Journey Starts Here
          </p>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
            <div className="text-center">
              <p className="font-display text-4xl text-ivory-50">3</p>
              <p className="text-xs uppercase tracking-mega text-ivory-200/40">Journeys</p>
            </div>
            <div className="hidden h-12 w-px bg-charcoal-600 sm:block" />
            <div className="text-center">
              <p className="font-display text-4xl text-ivory-50">1,840</p>
              <p className="text-xs uppercase tracking-mega text-ivory-200/40">KM</p>
            </div>
            <div className="hidden h-12 w-px bg-charcoal-600 sm:block" />
            <div className="text-center">
              <p className="font-display text-4xl text-ivory-50">5</p>
              <p className="text-xs uppercase tracking-mega text-ivory-200/40">Destinations</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-sage-600/40 bg-sage-900/30 px-4 py-1.5 text-xs font-medium text-sage-300"
                >
                  <Icon size={14} />
                  {b.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-xl border border-charcoal-600 bg-charcoal-900/40 px-5 py-4 ${
                visible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${0.3 + i * 0.08}s`,
                opacity: visible ? undefined : 0,
              }}
            >
              <span className="text-champagne-400">✓</span>
              <span className="text-sm text-ivory-200/80">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-3.5 text-xs font-semibold uppercase tracking-mega text-[#0d0b09] transition-all duration-300 hover:bg-[#1ebe5d]"
          >
            <MessageCircle size={16} />
            Join WhatsApp Community
            <ArrowRight size={14} />
          </a>
          <a
            href="#cta"
            className="inline-block rounded-full border border-champagne-400/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-mega text-champagne-300 transition-all duration-300 hover:bg-champagne-400 hover:text-charcoal-900"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  );
}
