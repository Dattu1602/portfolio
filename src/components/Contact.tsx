import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Get In Touch</h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg text-slate-600 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:dattu2486@gmail.com"
              className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
              <div className="bg-slate-900 p-4 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-slate-900 font-medium">dattu2486@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918639485019"
              className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
              <div className="bg-slate-900 p-4 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Phone</p>
                <p className="text-slate-900 font-medium">+91 8639485019</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/datta-shanmukh" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
              <div className="bg-slate-900 p-4 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <p className="text-slate-900 font-medium">datta-shanmukh</p>
              </div>
            </a>

            <a href="https://github.com/Dattu1602" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
              <div className="bg-slate-900 p-4 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                <p className="text-slate-900 font-medium">Dattu1602</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
