import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Miles from '@/components/Miles';
import ChooseEscape from '@/components/ChooseEscape';
import Collection from '@/components/Collection';
import FeaturedJourneys from '@/components/FeaturedJourneys';
import UnseenNorthEast from '@/components/UnseenNorthEast';
import GroupRides from '@/components/GroupRides';
import Private from '@/components/Private';
import IndiaYourWay from '@/components/IndiaYourWay';
import Moments from '@/components/Moments';
import Standard from '@/components/Standard';
import Community from '@/components/Community';
import Future from '@/components/Future';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Miles />
        <ChooseEscape />
        <Collection />
        <FeaturedJourneys />
        <UnseenNorthEast />
        <GroupRides />
        <Private />
        <IndiaYourWay />
        <Moments />
        <Standard />
        <Community />
        <Future />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
