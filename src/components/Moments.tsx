import { useReveal } from '@/hooks/useReveal';

const moments = [
  {
    image:
      'https://images.pexels.com/photos/33212453/pexels-photo-33212453.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Rider looking at mountains',
  },
  {
    image:
      'https://images.pexels.com/photos/9809188/pexels-photo-9809188.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Friends beside motorcycles',
  },
  {
    image:
      'https://images.pexels.com/photos/10938245/pexels-photo-10938245.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Campfire',
  },
  {
    image:
      'https://images.pexels.com/photos/13258053/pexels-photo-13258053.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Road through forest',
  },
  {
    image:
      'https://images.pexels.com/photos/984534/pexels-photo-984534.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Local food',
  },
  {
    image:
      'https://images.pexels.com/photos/39121733/pexels-photo-39121733.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Sunrise',
  },
  {
    image:
      'https://images.pexels.com/photos/5629850/pexels-photo-5629850.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Rain ride',
  },
  {
    image:
      'https://images.pexels.com/photos/6058267/pexels-photo-6058267.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Village life',
  },
];

export default function Moments() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="moments"
      ref={ref}
      className="relative bg-charcoal-900 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">11 — Moments We Chase</p>
          <h2 className="font-display text-4xl tracking-mega text-ivory-50 md:text-5xl lg:text-6xl">
            Moments From the Road
          </h2>
          <p className="mt-4 font-serif text-lg italic text-ivory-200/50">
            Some roads are worth remembering.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {moments.map((m, i) => (
            <div
              key={i}
              className={`img-zoom group relative aspect-square overflow-hidden rounded-lg ${
                visible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.08}s`,
                opacity: visible ? undefined : 0,
              }}
            >
              <img
                src={m.image}
                alt={m.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 transition-all duration-500 group-hover:bg-charcoal-900/40" />
              <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs font-medium uppercase tracking-mega text-ivory-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {m.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
