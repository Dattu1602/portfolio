import { Code, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages & Web Technologies',
    skills: ['C', 'JavaScript', 'Python', 'React', 'Node.js', 'HTML5', 'CSS', 'Express.js', 'Angular.js']
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL']
  },
  {
    icon: Wrench,
    title: 'Tools & Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Git', 'Bootstrap', 'Firebase']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
