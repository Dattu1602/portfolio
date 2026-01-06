import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FoodMine',
    subtitle: 'Full-Stack Food Ordering Web App',
    description: 'Built a responsive food ordering platform with user authentication, real-time updates, and profile management. Implemented category-based filtering, search, shopping cart, and seamless routing between pages.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    liveLink: 'https://full-stack-food-orde-33n1.bolt.host/',
    githubLink: 'https://github.com/Dattu1602'
  },
  {
    title: 'Electricity Demand Forecasting',
    subtitle: 'Deep Learning Time Series Model',
    description: 'Built a deep learning model using N-BEATS achieving <5% MAPE on 15-min interval demand data. Improved performance by 20% with seasonal splitting and engineered temporal features. Forecasted 42-hour sequences using a lightweight architecture.',
    tech: ['Python', 'PyTorch', 'N-BEATS', 'Huber Loss'],
    githubLink: 'https://github.com/Dattu1602'
  },
  {
    title: 'Human Activity Recognition',
    subtitle: 'Deep Learning using CNN-LSTM',
    description: 'Developed a CNN-LSTM model achieving 78% accuracy on multimodal sensor data for activity recognition. Benchmarked InnoHAR against traditional models, showing superior performance and suitability for wearables.',
    tech: ['Python', 'Keras', 'TensorFlow', 'CNN-LSTM'],
    githubLink: 'https://github.com/Dattu1602'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">{project.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
