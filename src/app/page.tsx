import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TopButton from './components/TopButton';

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </>
  );
}
