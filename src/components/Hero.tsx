import { ChevronDown } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/28238704/pexels-photo-28238704.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Motorcyclists riding through mountain landscape"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/30 to-charcoal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 animate-fade-in text-xs font-medium uppercase tracking-ultra text-champagne-300">
          The Road Is Calling
        </p>
        <h1 className="animate-fade-in-delay-1 font-display text-6xl tracking-ultra text-ivory-50 sm:text-7xl md:text-8xl lg:text-9xl">
          SILENTMILES
        </h1>
        <p className="mt-6 animate-fade-in-delay-2 max-w-xl font-serif text-xl italic text-ivory-200/80 sm:text-2xl">
          We just make the journey better.
        </p>

        <div className="mt-12 flex animate-fade-in-delay-3 flex-col gap-4 sm:flex-row">
          <a
            href="#philosophy"
            className="rounded-full bg-champagne-400 px-8 py-3.5 text-xs font-semibold uppercase tracking-mega text-charcoal-900 transition-all duration-300 hover:bg-champagne-300 hover:shadow-lg hover:shadow-champagne-400/30"
          >
            Explore the Journey
          </a>
          <a
            href="#cta"
            className="rounded-full border border-ivory-200/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-mega text-ivory-50 backdrop-blur-sm transition-all duration-300 hover:border-champagne-400 hover:text-champagne-300"
          >
            Create Your Own
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <ChevronDown className="text-ivory-200/50" size={28} />
      </div>
    </section>
  );
}
