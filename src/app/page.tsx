import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SideMenu from './components/SideMenu';
import Skills from './components/Skills';
import TopButton from './components/TopButton';

export default function Home() {
  return (
    <>
      <main className="flex flex-row">
        <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden" id="home">
          <SideMenu />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <TopButton />
        </section>
      </main>
    </>
  );
}
