import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';
import GetStarted from '@/components/GetStarted';
import WhatsNew from '@/components/WhatsNew';
import World from '@/components/World';
import Insights from '@/components/Insights';
import Credit from '@/components/credits';
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
      <Credit />
    </div>
  </div>
);

export default Page;
