import { Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-slate-900">DS</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Dattu1602" target="_blank" rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/datta-shanmukh" target="_blank" rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Datta Shanmukh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
