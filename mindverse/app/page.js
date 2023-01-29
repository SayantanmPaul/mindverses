import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import About from '@/sections/about';
import Hero from '@/sections/Hero';
import Explore from '@/sections/Explore';
import GetStarted from '@/sections/GetStarted';
import WhatsNew from '@/sections/WhatsNew';
import World from '@/sections/World';
import Insights from '@/sections/Insights';
import Feedback from '@/sections/Feedback';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
