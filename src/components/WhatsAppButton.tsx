import { MessageCircle } from 'lucide-react';

const whatsappNumber = '919353743588';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I\'m interested in SilentMiles journeys. Could you share more details?')}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <MessageCircle size={26} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
