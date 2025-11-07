import Navbar from './Component/navbar';
import Hero from './Component/hero';
import Gallery from './Component/gallery';
import About from './Component/about';
import Contact from './Component/Contact';
import CartLogin from './Component/CartLogin';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <CartLogin />
    </div>
  );
}