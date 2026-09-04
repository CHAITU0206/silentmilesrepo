import { useReveal } from '@/hooks/useReveal';
import { ShieldCheck, Sofa, Route, BedDouble, Sparkles, LifeBuoy } from 'lucide-react';

const standards = [
  { icon: ShieldCheck, title: 'Safety', desc: 'Every route vetted, every support vehicle ready.' },
  { icon: Sofa, title: 'Comfort', desc: 'Stays and rides that never compromise on ease.' },
  { icon: Route, title: 'Route Quality', desc: 'Handpicked roads that earn their miles.' },
  { icon: BedDouble, title: 'Stay Quality', desc: 'Only properties that meet our standard.' },
  { icon: Sparkles, title: 'Experience', desc: 'Moments designed, not just delivered.' },
  { icon: LifeBuoy, title: 'Support', desc: 'On-call assistance from start to finish.' },
];

export default function Standard() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-sage-50 py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="section-number mb-6">12 — The SilentMiles Standard</p>
          <h2 className="font-display text-4xl tracking-mega text-sage-800 md:text-5xl lg:text-6xl">
            The SilentMiles Standard
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl border border-sage-200 bg-white/70 p-8 text-center transition-all duration-500 hover:border-sage-400 hover:shadow-lg hover:shadow-sage-100 ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: visible ? undefined : 0,
                }}
              >
                <Icon className="mx-auto mb-4 text-sage-600" size={32} />
                <h3 className="font-serif text-xl font-semibold text-sage-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-sage-500">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <div className="mx-auto mb-6 gold-divider" />
          <p className="font-serif text-xl italic text-sage-700 md:text-2xl">
            If it doesn't meet the SilentMiles standard, it doesn't belong on
            the journey.
          </p>
        </div>
      </div>
    </section>
  );
}
