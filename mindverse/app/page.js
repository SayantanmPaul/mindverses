import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';
import GetStarted from '@/sections/GetStarted';
import WhatsNew from '@/sections/WhatsNew';
import World from '@/sections/World';
import Insights from '@/sections/Insights';
import Feedback from '@/sections/Feedback';

const Page = () => (
  <div className="bg-slate-900 overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>

    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04  z-0" />
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
