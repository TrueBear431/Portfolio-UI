import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills3D from './components/Skills3D';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-gray-50" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills3D />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
