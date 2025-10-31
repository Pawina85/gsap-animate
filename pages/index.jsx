import Navbar from './Component/navbar';
import Hero from './Component/hero';
import Gallery from './Component/gallery';
import About from './Component/about';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
    </div>
  );
}