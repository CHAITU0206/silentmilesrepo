import { useReveal } from '@/hooks/useReveal';

const journeys = [
  {
    title: 'Ladakh',
    subtitle: 'Where the Road Touches the Sky',
    tagline: '10 Days. 1,000+ Stories.',
    image:
      'https://images.pexels.com/photos/6002462/pexels-photo-6002462.jpeg?auto=compress&cs=tinysrgb&w=1600',
    story: [
      'The engine starts.',
      'The city disappears.',
      'The mountains get closer.',
      'The air gets thinner.',
      'And suddenly... you\'re exactly where you wanted to be.',
    ],
    meta: '15 Miles \u2022 Himalayan Collection',
  },
  {
    title: 'North East',
    subtitle: 'Into the Unexplored',
    tagline: '12 Days. Endless Green.',
    image:
      'https://images.pexels.com/photos/25311368/pexels-photo-25311368.jpeg?auto=compress&cs=tinysrgb&w=1600',
    story: [
      'The road narrows.',
      'The forests deepen.',
      'The villages whisper stories.',
      'The rivers guide you forward.',
      'And you find a place map forgot.',
    ],
    meta: '15 Miles \u2022 North East Collection',
  },
  {
    title: 'Western Ghats',
    subtitle: 'Through the Green Corridor',
    tagline: '7 Days. A Million Shades of Green.',
    image:
      'https://images.pexels.com/photos/30317431/pexels-photo-30317431.jpeg?auto=compress&cs=tinysrgb&w=1600',
    story: [
      'The mist lifts slowly.',
      'The hairpins unfold.',
      'The rain plays on your visor.',
      'The coffee tastes different here.',
      'And every mile feels alive.',
    ],
    meta: '7 Miles \u2022 Western Ghats Collection',
  },
];

export default function FeaturedJourneys() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="journeys"
      ref={ref}
      className="relative bg-charcoal-900 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">06 — Featured Journeys</p>
          <h2 className="font-display text-4xl tracking-mega text-ivory-50 md:text-5xl lg:text-6xl">
            Stories on the Road
          </h2>
          <p className="mt-4 font-serif text-lg italic text-ivory-200/50">
            We don't sell destinations. We sell moments.
          </p>
        </div>

        <div className="space-y-20">
          {journeys.map((j, i) => (
            <div
              key={i}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`img-zoom relative h-80 overflow-hidden rounded-2xl lg:h-[420px] ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                } lg:[direction:ltr]`}
                style={{ animationDelay: '0.2s' }}
              >
                <img
                  src={j.image}
                  alt={j.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-charcoal-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-mega text-champagne-300 backdrop-blur-sm">
                  {j.meta}
                </div>
              </div>

              {/* Story */}
              <div
                className={`lg:[direction:ltr] ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                <h3 className="font-display text-5xl tracking-mega text-ivory-50 md:text-6xl">
                  {j.title}
                </h3>
                <p className="mt-2 font-serif text-xl italic text-champagne-400">
                  {j.subtitle}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-ultra text-ivory-200/40">
                  {j.tagline}
                </p>

                <div className="my-6 gold-divider" />

                <div className="space-y-3">
                  {j.story.map((line, si) => (
                    <p
                      key={si}
                      className="font-serif text-lg italic text-ivory-200/70"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <a
                  href="#cta"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-mega text-champagne-400 transition-colors hover:text-champagne-300"
                >
                  View Journey
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
