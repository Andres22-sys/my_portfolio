import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
