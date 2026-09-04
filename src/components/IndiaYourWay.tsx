import { useReveal } from '@/hooks/useReveal';

const experiences = [
  {
    text: 'Wake up in the Himalayas.',
    image:
      'https://images.pexels.com/photos/17033848/pexels-photo-17033848.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    text: 'Ride through the Western Ghats.',
    image:
      'https://images.pexels.com/photos/28860264/pexels-photo-28860264.png?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    text: 'Watch the sunrise over the Ganges.',
    image:
      'https://images.pexels.com/photos/39121733/pexels-photo-39121733.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    text: 'Get lost in Rajasthan.',
    image:
      'https://images.pexels.com/photos/33797765/pexels-photo-33797765.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    text: 'Taste India from the streets.',
    image:
      'https://images.pexels.com/photos/984534/pexels-photo-984534.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    text: 'Drive through the North East.',
    image:
      'https://images.pexels.com/photos/14916663/pexels-photo-14916663.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function IndiaYourWay() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="india-your-way"
      ref={ref}
      className="relative bg-ivory-50 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">10 — India, Your Way</p>
          <h2 className="font-display text-4xl tracking-mega text-sage-800 md:text-5xl lg:text-6xl">
            India has many stories.
          </h2>
          <h3 className="mt-4 font-serif text-2xl italic text-sage-600 md:text-3xl">
            Which one will be yours?
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e, i) => (
            <div
              key={i}
              className={`img-zoom group relative h-56 overflow-hidden rounded-xl ${
                visible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: visible ? undefined : 0,
              }}
            >
              <img
                src={e.image}
                alt={e.text}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-serif text-xl italic text-ivory-50">
                {e.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="mx-auto mb-6 gold-divider" />
          <p className="font-serif text-2xl italic text-sage-700">
            Tell us what you imagine. We'll help make it real.
          </p>
          <a
            href="#cta"
            className="mt-8 inline-block rounded-full border border-sage-400 px-8 py-3.5 text-xs font-semibold uppercase tracking-mega text-sage-700 transition-all duration-300 hover:bg-sage-700 hover:text-ivory-50"
          >
            Start Planning
          </a>
        </div>
      </div>
    </section>
  );
}
