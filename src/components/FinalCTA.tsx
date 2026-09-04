import { useReveal } from '@/hooks/useReveal';

const bgImage =
  'https://images.pexels.com/photos/10939877/pexels-photo-10939877.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="cta"
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-28"
    >
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Motorcyclist at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/60 to-charcoal-900/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2
          className={`font-display text-5xl tracking-mega text-ivory-50 md:text-6xl lg:text-7xl ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Where will your
          <br />
          miles take you?
        </h2>

        <p
          className={`mt-6 font-serif text-xl italic text-ivory-200/70 md:text-2xl ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          You bring the dream. We enhance the journey.
        </p>

        <a
          href="#hero"
          className={`mt-12 inline-block rounded-full bg-champagne-400 px-12 py-4 text-xs font-semibold uppercase tracking-mega text-charcoal-900 transition-all duration-300 hover:bg-champagne-300 hover:shadow-2xl hover:shadow-champagne-400/40 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          Start Your Journey →
        </a>
      </div>
    </section>
  );
}
