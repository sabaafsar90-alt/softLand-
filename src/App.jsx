import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Steps from './components/Steps';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Featured />
        <Steps />
        <Features />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
