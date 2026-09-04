import { useReveal } from '@/hooks/useReveal';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const rides = [
  {
    title: 'Sunrise Coastal Ride',
    date: 'Every Saturday',
    distance: '120 KM',
    riders: '8-15 Riders',
    duration: '1 Day',
    image:
      'https://images.pexels.com/photos/27869489/pexels-photo-27869489.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: '1 Mile',
  },
  {
    title: 'Hill Station Weekend',
    date: 'First Weekend / Month',
    distance: '350 KM',
    riders: '10-20 Riders',
    duration: '2 Days',
    image:
      'https://images.pexels.com/photos/13258053/pexels-photo-13258053.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: '2 Miles',
  },
  {
    title: 'Monsoon Forest Ride',
    date: 'July - September',
    distance: '280 KM',
    riders: '6-12 Riders',
    duration: '2 Days',
    image:
      'https://images.pexels.com/photos/5629850/pexels-photo-5629850.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: '2 Miles',
  },
];

const trips = [
  {
    title: 'Spiti Valley Expedition',
    date: 'Aug 2026',
    duration: '10 Days',
    distance: '1,800 KM',
    image:
      'https://images.pexels.com/photos/28238704/pexels-photo-28238704.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: '15 Miles',
    desc: 'High passes. Cold air. Endless horizons.',
  },
  {
    title: 'Kerala Backwaters Tour',
    date: 'Nov 2026',
    duration: '7 Days',
    distance: '900 KM',
    image:
      'https://images.pexels.com/photos/6544756/pexels-photo-6544756.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: '7 Miles',
    desc: 'Sunrise. Empty road. First coffee.',
  },
];

export default function GroupRides() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-ivory-50">
      {/* Group Rides */}
      <div className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="section-number mb-6">07 — Group Rides</p>
            <h2 className="font-display text-4xl tracking-mega text-sage-800 md:text-5xl lg:text-6xl">
              Ride Together
            </h2>
            <p className="mt-4 font-serif text-lg italic text-sage-600">
              Come for the road. Stay for the people.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rides.map((r, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl bg-white shadow-lg shadow-sage-100 transition-all duration-500 hover:shadow-2xl hover:shadow-sage-200/60 ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  opacity: visible ? undefined : 0,
                }}
              >
                <div className="img-zoom relative h-52 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-sage-800/90 px-3 py-1 text-xs font-medium uppercase tracking-mega text-ivory-50">
                    {r.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-sage-800">
                    {r.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-sage-600">
                    <p className="flex items-center gap-2">
                      <Calendar size={14} className="text-sage-400" />
                      {r.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={14} className="text-sage-400" />
                      {r.distance}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users size={14} className="text-sage-400" />
                      {r.riders}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock size={14} className="text-sage-400" />
                      {r.duration}
                    </p>
                  </div>
                  <button className="mt-6 w-full rounded-full border border-sage-300 py-2.5 text-xs font-semibold uppercase tracking-mega text-sage-700 transition-all duration-300 hover:bg-sage-700 hover:text-ivory-50">
                    Join Ride
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Group Trips */}
      <div className="bg-sage-100/50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="section-number mb-6">08 — Group Trips</p>
            <h2 className="font-display text-4xl tracking-mega text-sage-800 md:text-5xl lg:text-6xl">
              The Long Road Together
            </h2>
            <p className="mt-4 font-serif text-lg italic text-sage-600">
              Multi-day journeys with riders who become friends.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {trips.map((t, i) => (
              <div
                key={i}
                className={`img-zoom group relative h-96 overflow-hidden rounded-2xl ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  opacity: visible ? undefined : 0,
                }}
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-champagne-400/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-mega text-charcoal-900">
                  {t.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-3xl font-medium text-ivory-50">
                    {t.title}
                  </h3>
                  <p className="mt-1 font-serif text-lg italic text-champagne-300">
                    {t.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs uppercase tracking-mega text-ivory-200/60">
                    <span>{t.date}</span>
                    <span>•</span>
                    <span>{t.duration}</span>
                    <span>•</span>
                    <span>{t.distance}</span>
                  </div>
                  <button className="mt-5 rounded-full bg-ivory-50/10 px-6 py-2 text-xs font-semibold uppercase tracking-mega text-ivory-50 backdrop-blur-sm transition-all duration-300 hover:bg-champagne-400 hover:text-charcoal-900">
    Reserve Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
