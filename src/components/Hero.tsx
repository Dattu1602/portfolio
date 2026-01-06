import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
            Datta Shanmukh
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-8">
            Full-Stack Developer & ML Enthusiast
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
            Computer Science Engineering student passionate about building scalable web applications
            and exploring the intersection of software development and machine learning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact"
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Get In Touch
            </a>
            <a href="#projects"
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
              View Projects
            </a>
          </div>
        </div>
        <a href="#about" className="inline-block mt-20 animate-bounce">
          <ArrowDown size={32} className="text-slate-400" />
        </a>
      </div>
    </section>
  );
}
