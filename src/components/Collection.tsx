import { useReveal } from '@/hooks/useReveal';

const collections = [
  {
    name: 'Himalayan Collection',
    regions: 'Ladakh \u2022 Himachal \u2022 Uttarakhand',
    image:
      'https://images.pexels.com/photos/29494205/pexels-photo-29494205.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'North East Collection',
    regions: 'Meghalaya \u2022 Arunachal \u2022 Sikkim \u2022 Nagaland',
    image:
      'https://images.pexels.com/photos/6058267/pexels-photo-6058267.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Western Ghats Collection',
    regions: 'Karnataka \u2022 Kerala \u2022 Tamil Nadu \u2022 Maharashtra',
    image:
      'https://images.pexels.com/photos/11170475/pexels-photo-11170475.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Coastal Collection',
    regions: 'Goa \u2022 Konkan \u2022 Kerala',
    image:
      'https://images.pexels.com/photos/8037061/pexels-photo-8037061.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Heritage Collection',
    regions: 'Rajasthan \u2022 Agra \u2022 Delhi',
    image:
      'https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Wild Collection',
    regions: 'Forests \u2022 Wildlife \u2022 Remote roads',
    image:
      'https://images.pexels.com/photos/14658736/pexels-photo-14658736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Collection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="collection"
      ref={ref}
      className="relative bg-charcoal-800 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">05 — The SilentMiles Collection</p>
          <h2 className="font-display text-4xl tracking-mega text-ivory-50 md:text-5xl lg:text-6xl">
            The SilentMiles Collection
          </h2>
          <p className="mt-4 font-serif text-lg italic text-ivory-200/50">
            Curated journeys, not packages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <div
              key={i}
              className={`img-zoom group relative h-80 overflow-hidden rounded-2xl ${
                visible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.12}s`,
                opacity: visible ? undefined : 0,
              }}
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-medium text-ivory-50">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-mega text-champagne-300/80">
                  {c.regions}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-mega text-ivory-200/0 transition-all duration-500 group-hover:text-champagne-300">
                  Explore Collection
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
