import { useEffect, useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const bgImage =
  'https://images.pexels.com/photos/28238704/pexels-photo-28238704.jpeg?auto=compress&cs=tinysrgb&w=1920';

const whatsappNumber = '919036017587';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'm interested in SilentMiles journeys. Could you share more details?")}`;
const whatsappCommunityLink = 'https://chat.whatsapp.com/B9AGI21HmIyAftjaNxrmSf';
const contactPhone = '+91 90360 17587';

function useCountdown(target: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

export default function App() {
  const launchDate = new Date('2026-10-01T00:00:00');
  const { days, hours, minutes, seconds } = useCountdown(launchDate);

  const pad = (n: number) => String(n).padStart(2, '0');

  const units = [
    { label: 'Days', value: pad(days) },
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0a09]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Motorcyclists riding through mountain landscape"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/60 to-[#0c0a09]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        {/* Brand */}
        <div className="mb-3 animate-fade-in">
          <span className="font-display text-5xl tracking-ultra text-ivory-50 sm:text-6xl md:text-7xl">
            SILENT
          </span>
          <span className="font-display text-5xl tracking-ultra text-gold-gradient sm:text-6xl md:text-7xl">
            MILES
          </span>
        </div>

        <div className="mx-auto mb-10 h-px w-16 bg-gradient-to-r from-transparent via-champagne-400 to-transparent animate-fade-in-delay-1" />

        {/* Coming Soon */}
        <p className="mb-3 animate-fade-in-delay-1 text-xs font-semibold uppercase tracking-ultra text-champagne-300">
          More than a ride. It's a feeling.
        </p>
        <h1 className="animate-fade-in-delay-2 font-display text-6xl uppercase leading-[0.9] tracking-mega text-ivory-50 sm:text-7xl md:text-8xl lg:text-9xl">
          Coming
          <span className="text-gold-gradient"> Soon</span>
        </h1>
        <p className="mt-6 max-w-xl animate-fade-in-delay-3 font-serif text-xl italic text-ivory-200/70 sm:text-2xl">
          We don't just plan journeys. We create the moments you'll remember long
          after the road ends.
        </p>

        {/* Countdown */}
        <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-5">
          {units.map((u, i) => (
            <div
              key={u.label}
              className="flex flex-col items-center rounded-xl border border-champagne-400/20 bg-black/30 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-5"
            >
              <span className="font-display text-3xl text-ivory-50 sm:text-5xl md:text-6xl">
                {u.value}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-mega text-ivory-200/40 sm:text-xs">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-10 flex flex-col items-center gap-2 animate-fade-in-delay-4">
          <p className="text-xs uppercase tracking-ultra text-ivory-200/40">
            Get in touch
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg text-ivory-100 transition-colors hover:text-champagne-300"
          >
            {contactPhone}
          </a>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-xs font-bold uppercase tracking-mega text-[#0c0a09] transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={whatsappCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-champagne-400/50 px-8 py-4 text-xs font-bold uppercase tracking-mega text-champagne-300 transition-all duration-300 hover:bg-champagne-400 hover:text-[#0c0a09]"
          >
            Join Community
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Footer line */}
        <p className="mt-10 text-center text-xs text-ivory-200/30">
          You bring the dream. We enhance the journey.
        </p>
      </div>
    </div>
  );
}
