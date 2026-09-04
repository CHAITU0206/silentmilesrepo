import { useReveal } from '@/hooks/useReveal';

export default function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const lines = [
    'Travel shouldn\'t feel like a checklist.',
    'A journey should have a story.',
    'A road should have a reason.',
    'A destination should leave you with something.',
  ];

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative bg-ivory-50 py-28 md:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className={`section-number mb-8 ${visible ? 'animate-fade-in' : 'opacity-0'}`}>
          02 — Why We Exist
        </p>

        <h2
          className={`mb-12 font-serif text-3xl font-light text-sage-800 md:text-4xl ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          SilentMiles started with a simple idea.
        </h2>

        <div className="space-y-6">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`font-serif text-xl italic text-sage-600 md:text-2xl ${
                visible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${0.3 + i * 0.2}s`,
                opacity: visible ? undefined : 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mx-auto my-12 gold-divider" />

        <h3
          className={`font-display text-4xl tracking-mega text-sage-800 md:text-5xl ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.2s' }}
        >
          You bring the dream.
        </h3>
        <h3
          className={`mt-3 font-display text-4xl tracking-mega text-gold-gradient md:text-5xl ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.5s' }}
        >
          We build the journey.
        </h3>
      </div>
    </section>
  );
}
