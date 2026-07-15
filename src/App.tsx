import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <BackToTop />
    </>
  );
}
