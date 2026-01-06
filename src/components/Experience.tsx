import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Web Developer Intern</h3>
                  <p className="text-lg text-slate-600 font-medium">Influitive Consultancy Services</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <Calendar size={18} />
                <span className="text-sm">May 2025 - Present</span>
              </div>
            </div>

            <div className="space-y-3 text-slate-600">
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">•</span>
                <p>Designed and launched a fully responsive company website using HTML5, CSS3, JavaScript, and Bootstrap 5, improving mobile usability across 100% of modern devices</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">•</span>
                <p>Developed dynamic UI components including a hero carousel, animated service cards, and smooth-scroll navigation, increasing user engagement by 40%</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">•</span>
                <p>Applied glassmorphism and AOS (Animate on Scroll) effects to enhance visual design, contributing to a 25% reduction in bounce rate</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">•</span>
                <p>Reduced average page load time by 30% via image optimization and minimal responsive layout principles</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">•</span>
                <p>Collaborated with a cross-functional team of 3 to deliver the site while iterating on design and UX improvements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
