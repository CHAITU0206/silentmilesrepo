import { useReveal } from '@/hooks/useReveal';
import {
  Sunrise,
  Mountain,
  Flame,
  Leaf,
  Users,
  Heart,
  Compass,
} from 'lucide-react';

const escapes = [
  {
    icon: Sunrise,
    title: 'Escape',
    desc: 'Short weekend rides',
    color: 'text-amber-400',
  },
  {
    icon: Mountain,
    title: 'Explore',
    desc: 'Long mountain journeys',
    color: 'text-sky-300',
  },
  {
    icon: Flame,
    title: 'Adventure',
    desc: 'High-altitude & challenging rides',
    color: 'text-red-400',
  },
  {
    icon: Leaf,
    title: 'Slow Down',
    desc: 'Nature & peaceful destinations',
    color: 'text-sage-300',
  },
  {
    icon: Users,
    title: 'Meet People',
    desc: 'Group rides & trips',
    color: 'text-ivory-200',
  },
  {
    icon: Heart,
    title: 'Make Memories',
    desc: 'Couples & family journeys',
    color: 'text-rose-300',
  },
  {
    icon: Compass,
    title: 'Go Somewhere New',
    desc: 'Custom travel',
    color: 'text-champagne-400',
  },
];

export default function ChooseEscape() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="escape"
      ref={ref}
      className="relative bg-sage-50 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">04 — Choose Your Escape</p>
          <h2 className="font-display text-4xl tracking-mega text-sage-800 md:text-5xl lg:text-6xl">
            What are you looking for?
          </h2>
          <p className="mt-4 font-serif text-lg italic text-sage-600">
            I want to...
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {escapes.map((e, i) => {
            const Icon = e.icon;
            return (
              <button
                key={i}
                className={`group flex flex-col items-center rounded-2xl border border-sage-200 bg-white/60 p-8 text-center transition-all duration-500 hover:border-sage-400 hover:bg-white hover:shadow-xl hover:shadow-sage-200/50 ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: visible ? undefined : 0,
                }}
              >
                <Icon
                  className={`mb-4 ${e.color} transition-transform duration-500 group-hover:scale-110`}
                  size={36}
                />
                <h3 className="font-serif text-xl font-semibold text-sage-800">
                  {e.title}
                </h3>
                <p className="mt-1 text-xs text-sage-500">{e.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
