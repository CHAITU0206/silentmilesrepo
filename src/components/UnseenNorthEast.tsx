import { useReveal } from '@/hooks/useReveal';
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  MapPin,
  Mountain,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const whatsappNumber = '919353743588';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Bhuvan, I'm interested in the Unseen North East expedition. Could you share more details?")}`;

const route = [
  ['01', 'Guwahati → Kisama, Nagaland'],
  ['02', 'Full day at Hornbill Festival'],
  ['03', 'Nagaland → Dibrugarh, Assam'],
  ['04', 'Dibrugarh → Roing, Anini'],
  ['05', 'Anini local exploration'],
  ['06', 'Anini → Pasighat'],
  ['07', 'Pasighat → Ziro'],
  ['08', 'Ziro → Bomdila'],
  ['09', 'Bomdila → Tawang'],
  ['10', 'Tawang → Bum La Pass → Jung'],
  ['11', 'Jung → Mago Valley → Gongkar La Lake'],
  ['12', 'Jung → Udaluguri, Assam'],
  ['13', 'Udaluguri → Shora'],
  ['14', 'Shora exploration, Cherrapunji'],
  ['15', 'Shora → Guwahati'],
];

const experiences = [
  { icon: Sparkles, title: 'Hornbill Festival', desc: 'Asia’s biggest cultural celebration, alive with music, dance, handcrafts, and local flavours.' },
  { icon: Mountain, title: 'Anini Valley', desc: 'India’s last village before the Indo-China border, where valleys, rivers, and silence meet.' },
  { icon: MapPin, title: 'Gongkar La Lake', desc: 'A turquoise hidden gem in the remote Mago Valley, surrounded by towering peaks.' },
  { icon: Compass, title: 'Tawang', desc: 'High mountains, sharp curves, cold winds, and the spirit of the Himalayas.' },
  { icon: Sparkles, title: 'Meghalaya', desc: 'Living root bridges, deep canyons, and endless waterfalls in a paradise like no other.' },
  { icon: Users, title: 'Ziro & Pasighat', desc: 'Apatani culture, river towns, and a slower way of life at the edge of the map.' },
  { icon: Mountain, title: 'Bomdila Pass', desc: 'An 8,200 ft crossing where the altitude rises and the adventure intensifies.' },
  { icon: Compass, title: 'Mago Valley', desc: 'Raw, remote, and real—rugged terrain, ancient villages, and untouched landscapes.' },
  { icon: Sparkles, title: 'Cherrapunji', desc: 'The land of eternal rain and a fitting finale of cloud forests and waterfalls.' },
];

const included = [
  'Accommodation from start date to end date',
  'Breakfast and dinner',
  'Dedicated 4x4 camper as backup and support vehicle',
  'Luggage van',
  'Rider permits and bike permits for all states',
  'Entry for Hornbill Festival event',
  'Driver allowance, toll, parking, road tax, night halt, and interstate charges',
  'Experienced mechanic throughout the expedition',
  'Guided and experienced expedition support',
  'Access to protected remote areas',
];

const prices = [
  { label: 'Early Bird', price: '₹64,999', dates: 'Sep 04 – Sep 30', note: '8 slots only' },
  { label: 'Phase 01', price: '₹68,999', dates: 'Oct 01 – Oct 20', note: 'Next release' },
  { label: 'Phase 02', price: '₹72,999', dates: 'Oct 21 – Nov 05', note: 'Final release' },
];

const heroImage = 'https://images.pexels.com/photos/6058267/pexels-photo-6058267.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function UnseenNorthEast() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="unseen" ref={ref} className="relative overflow-hidden bg-[#0d0b09] text-[#f6ede0]">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Misty Northeast mountain landscape" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5d2a0b_0%,transparent_42%),linear-gradient(180deg,#0d0b09_0%,#160d08_48%,#0d0b09_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#ed7c16]">15 Days · Beyond Roads. Beyond Maps.</p>
            <h2 className="max-w-4xl font-display text-6xl uppercase leading-[0.88] tracking-[0.08em] text-[#f7ead8] md:text-8xl">
              Unseen
              <span className="block text-[#ed7c16]">North East</span>
            </h2>
            <p className="mt-7 max-w-2xl font-serif text-2xl italic text-[#d9c5ab] md:text-3xl">
              Explore the Northeast beyond the usual. This isn’t just a ride—it’s a journey into the unseen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-[#f4c58e]">
              <span className="rounded-full border border-[#a74c0a] px-4 py-2">The 0.2% India</span>
              <span className="rounded-full border border-[#a74c0a] px-4 py-2">Limited slots</span>
              <span className="rounded-full border border-[#a74c0a] px-4 py-2">Recognised by Arunachal Tourism</span>
            </div>
          </div>

          <div className="border border-[#a74c0a]/60 bg-black/40 p-6 backdrop-blur-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ed7c16]">Why this ride?</p>
            <p className="mt-4 font-serif text-2xl italic leading-tight text-[#f7ead8]">This isn’t for the 99.8%. This is for the 0.2% who seek more.</p>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[#a74c0a]/50 pt-6">
              <div><p className="font-display text-4xl text-[#ed7c16]">15</p><p className="text-xs uppercase tracking-[0.18em] text-[#bda589]">Days on the road</p></div>
              <div><p className="font-display text-4xl text-[#ed7c16]">9+</p><p className="text-xs uppercase tracking-[0.18em] text-[#bda589]">Unseen regions</p></div>
              <div><p className="font-display text-4xl text-[#ed7c16]">8,200</p><p className="text-xs uppercase tracking-[0.18em] text-[#bda589]">Feet at Bomdila</p></div>
              <div><p className="font-display text-4xl text-[#ed7c16]">0.2%</p><p className="text-xs uppercase tracking-[0.18em] text-[#bda589]">Who seek more</p></div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ed7c16]">01 — Route map</p>
            <h3 className="font-display text-5xl uppercase tracking-[0.1em] text-[#f7ead8]">Follow the unknown.</h3>
            <p className="mt-5 max-w-md font-serif text-xl italic text-[#bda589]">From Guwahati to Nagaland, Arunachal Pradesh, Assam, and Meghalaya—15 days of raw landscapes, living cultures, and roads that few have seen.</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#f4c58e]"><Compass size={19} /> Guwahati · Kisama · Tawang · Cherrapunji · Guwahati</div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {route.map(([day, place]) => <div key={day} className="border border-[#7b380c]/70 bg-[#1a0f09]/80 p-4 transition-colors hover:border-[#ed7c16]"><p className="text-xs font-bold tracking-[0.2em] text-[#ed7c16]">DAY {day}</p><p className="mt-2 text-sm leading-snug text-[#ecdcc9]">{place}</p></div>)}
          </div>
        </div>

        <div className="mt-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ed7c16]">02 — Ride experience</p>
          <h3 className="font-display text-5xl uppercase tracking-[0.1em] text-[#f7ead8] md:text-6xl">Roads. Mountains. Villages. Rivers. Culture.</h3>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map(({ icon: Icon, title, desc }) => <div key={title} className="border border-[#7b380c]/70 bg-black/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ed7c16]"><Icon size={25} className="text-[#ed7c16]" /><h4 className="mt-5 font-serif text-2xl text-[#f7ead8]">{title}</h4><p className="mt-2 text-sm leading-relaxed text-[#bda589]">{desc}</p></div>)}
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="border border-[#7b380c]/70 bg-[#160d08]/90 p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ed7c16]">03 — Why ride with us?</p>
            <h3 className="mt-4 font-display text-5xl uppercase tracking-[0.1em] text-[#f7ead8]">Not just a ride. A brotherhood.</h3>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-[#cdb9a0]">
              <p><strong className="text-[#ed7c16]">A community, not just a group.</strong> Ride with like-minded souls who believe in trust, friendship, and good vibes.</p>
              <p><strong className="text-[#ed7c16]">Mountain experience you can trust.</strong> Experienced captains, mechanics, medical support, and a fully-stocked backup vehicle.</p>
              <p><strong className="text-[#ed7c16]">Memories that last a lifetime.</strong> Dedicated media coverage captures the journey through photography and videography.</p>
              <p><strong className="text-[#ed7c16]">Expert guidance and local insights.</strong> Meet the terrain, culture, and hidden gems through people who know them.</p>
            </div>
          </div>
          <div className="border border-[#7b380c]/70 bg-[#160d08]/90 p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ed7c16]">04 — Package details</p>
            <h3 className="mt-4 font-display text-5xl uppercase tracking-[0.1em] text-[#f7ead8]">You ride. We handle the rest.</h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {included.map(item => <p key={item} className="flex gap-2 text-sm text-[#cdb9a0]"><BadgeCheck size={17} className="mt-0.5 shrink-0 text-[#ed7c16]" />{item}</p>)}
            </div>
            <p className="mt-8 border-t border-[#7b380c]/70 pt-6 text-sm leading-relaxed text-[#8f7862]">Excludes flights, fuel, bike transportation, lunch, personal expenses, optional activities, and items not mentioned in the inclusions.</p>
          </div>
        </div>

        <div className="mt-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ed7c16]">05 — Pricing</p>
          <h3 className="font-display text-5xl uppercase tracking-[0.1em] text-[#f7ead8] md:text-6xl">Your adventure. Your choice.</h3>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {prices.map((plan, i) => <div key={plan.label} className={`border p-7 ${i === 0 ? 'border-[#ed7c16] bg-[#552508]/70' : 'border-[#7b380c]/70 bg-black/35'}`}><div className="flex items-center justify-between"><p className="font-display text-3xl uppercase tracking-[0.1em] text-[#ed7c16]">{plan.label}</p><span className="text-xs uppercase tracking-[0.15em] text-[#cdb9a0]">{plan.note}</span></div><p className="mt-5 font-display text-5xl tracking-[0.08em] text-[#f7ead8]">{plan.price}</p><p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#bda589]">{plan.dates}</p></div>)}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2"><div className="border border-[#7b380c]/70 bg-black/35 p-6"><p className="text-xs uppercase tracking-[0.2em] text-[#ed7c16]">Booking amount</p><p className="mt-2 font-display text-4xl text-[#f7ead8]">₹25,000</p><p className="mt-1 text-sm text-[#bda589]">Advance for confirmation of slot</p></div><div className="border border-[#7b380c]/70 bg-black/35 p-6"><p className="text-xs uppercase tracking-[0.2em] text-[#ed7c16]">Remaining amount</p><p className="mt-2 font-serif text-2xl italic text-[#f7ead8]">Collected later</p><p className="mt-1 text-sm text-[#bda589]">Limited slot expedition</p></div></div>
        </div>

        <div className="mt-24 border border-[#ed7c16] bg-[#4b2108]/80 p-8 text-center md:p-12">
          <ShieldCheck className="mx-auto text-[#ed7c16]" size={30} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#f4c58e]">Recognised by Arunachal Tourism</p>
          <h3 className="mt-3 font-display text-4xl uppercase tracking-[0.1em] text-[#f7ead8] md:text-5xl">Ride deep. Respect nature. Leave nothing but memories.</h3>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-xl italic text-[#d9c5ab]">Adventure awaits. Memories last forever.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0d0b09] transition hover:bg-[#1ebe5d]"><MessageCircle size={16} /> WhatsApp Bhuvan · 9353743588 <ArrowRight size={16} /></a>
            <a href="tel:9353743588" className="inline-flex items-center gap-3 rounded-full border border-[#ed7c16] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ed7c16] transition hover:bg-[#ed7c16] hover:text-[#1a0d06]"><Phone size={16} /> Call · 9353743588</a>
          </div>
          <p className="mt-4 text-sm text-[#d9c5ab]">silentmiles.com@gmail.com · Ride coordinator</p>
        </div>
      </div>
    </section>
  );
}
