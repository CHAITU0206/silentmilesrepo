import { Instagram, Facebook, Youtube, Mail, MessageCircle, Users } from 'lucide-react';

const whatsappNumber = '919353743588';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'm interested in SilentMiles journeys. Could you share more details?")}`;
const whatsappCommunityLink = 'https://chat.whatsapp.com/B9AGI21HmIyAftjaNxrmSf';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl tracking-ultra text-ivory-50">
                SILENT
              </span>
              <span className="font-display text-3xl tracking-ultra text-gold-gradient">
                MILES
              </span>
            </div>
            <p className="mt-4 max-w-sm font-serif text-lg italic text-ivory-200/50">
              More than a ride. It's a feeling.
            </p>
            <p className="mt-2 max-w-sm text-sm text-ivory-200/40">
              We don't just plan journeys. We create the moments you'll remember
              long after the road ends.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-mega text-champagne-400">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#miles" className="text-sm text-ivory-200/60 transition-colors hover:text-champagne-300">
                  Miles
                </a>
              </li>
              <li>
                <a href="#collection" className="text-sm text-ivory-200/60 transition-colors hover:text-champagne-300">
                  Collection
                </a>
              </li>
              <li>
                <a href="#journeys" className="text-sm text-ivory-200/60 transition-colors hover:text-champagne-300">
                  Featured Journeys
                </a>
              </li>
              <li>
                <a href="#private" className="text-sm text-ivory-200/60 transition-colors hover:text-champagne-300">
                  SilentMiles Private
                </a>
              </li>
              <li>
                <a href="#community" className="text-sm text-ivory-200/60 transition-colors hover:text-champagne-300">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-mega text-champagne-400">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-charcoal-600 p-2.5 text-ivory-200/60 transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={whatsappCommunityLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="rounded-full border border-charcoal-600 p-2.5 text-ivory-200/60 transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366]"
              >
                <Users size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-charcoal-600 p-2.5 text-ivory-200/60 transition-all duration-300 hover:border-champagne-400 hover:text-champagne-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-charcoal-600 p-2.5 text-ivory-200/60 transition-all duration-300 hover:border-champagne-400 hover:text-champagne-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full border border-charcoal-600 p-2.5 text-ivory-200/60 transition-all duration-300 hover:border-champagne-400 hover:text-champagne-300"
              >
                <Youtube size={18} />
              </a>
              <a
                href="mailto:hello@silentmiles.com"
                aria-label="Email"
                className="rounded-full border border-charcoal-600 p-2.5 text-ivory-200/60 transition-all duration-300 hover:border-champagne-400 hover:text-champagne-300"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-ivory-200/40">
              hello@silentmiles.com
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-charcoal-700 pt-8 sm:flex-row">
          <p className="text-xs text-ivory-200/30">
            © 2026 SilentMiles. All rights reserved.
          </p>
          <p className="text-xs text-ivory-200/30">
            You bring the dream. We enhance the journey.
          </p>
        </div>
      </div>
    </footer>
  );
}
