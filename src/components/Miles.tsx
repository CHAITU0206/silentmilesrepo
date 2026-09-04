import { useReveal } from '@/hooks/useReveal';

const miles = [
  {
    label: '1 MILE',
    title: 'One-Day Escapes',
    desc: 'Quick rides that reset your soul before the week begins.',
    duration: '1 Day',
  },
  {
    label: '2 MILES',
    title: 'Weekend Journeys',
    desc: 'Two days of road, discovery, and stories worth telling.',
    duration: '2-3 Days',
  },
  {
    label: '7 MILES',
    title: 'Extended Adventures',
    desc: 'A week deep into landscapes that change you.',
    duration: '5-8 Days',
  },
  {
    label: '15 MILES',
    title: 'Signature India Journeys',
    desc: 'The definitive rides across India\'s most iconic terrain.',
    duration: '10-15 Days',
  },
  {
    label: '\u221E MILES',
    title: 'Custom Journeys',
    desc: 'Tell us what you imagine. We\'ll make it real.',
    duration: 'Your Call',
  },
];

export default function Miles() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="miles"
      ref={ref}
      className="relative bg-charcoal-900 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">03 — How Many Miles?</p>
          <h2 className="font-display text-4xl tracking-mega text-ivory-50 md:text-5xl lg:text-6xl">
            How many miles are you ready for?
          </h2>
          <p className="mt-4 font-serif text-lg italic text-ivory-200/50">
            Our language for journeys.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miles.map((m, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-charcoal-600 bg-charcoal-800/50 p-8 transition-all duration-500 hover:border-champagne-400/40 hover:bg-charcoal-800 ${
                visible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
                opacity: visible ? undefined : 0,
              }}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-display text-3xl tracking-mega text-champagne-400">
                  {m.label}
                </span>
                <span className="text-xs uppercase tracking-mega text-ivory-200/40">
                  {m.duration}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-2xl text-ivory-50">
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed text-ivory-200/60">
                {m.desc}
              </p>
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-champagne-400 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}

          {/* CTA card */}
          <div
            className={`flex items-center justify-center rounded-2xl border border-champagne-400/30 bg-gradient-to-br from-champagne-400/10 to-transparent p-8 ${
              visible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.75s', opacity: visible ? undefined : 0 }}
          >
            <a
              href="#cta"
              className="text-center transition-colors hover:text-champagne-300"
            >
              <p className="font-serif text-xl italic text-ivory-100">
                Not sure how many miles you need?
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-mega text-champagne-400">
                Let us help you decide →
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
