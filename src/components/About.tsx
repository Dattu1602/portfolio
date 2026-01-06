import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Education</h3>
                  <p className="text-slate-600 font-medium">
                    Atal Bihari Vajpayee Indian Institute of Information Technology
                  </p>
                  <p className="text-slate-500">B.Tech in Computer Science and Engineering</p>
                  <p className="text-slate-500">GPA: 7.53/10 | 2022-2026</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Achievements</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 1550 rating on CodeChef</li>
                    <li>• Completed Responsive Web Design course on freeCodeCamp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate computer science student with a strong foundation in full-stack web development
              and machine learning. Currently pursuing my B.Tech at IIIT, I combine academic knowledge with
              practical experience to build innovative solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              As a Web Developer Intern at Influitive Consultancy Services, I've successfully designed and
              launched responsive websites that prioritize user experience and performance. My expertise spans
              across modern web technologies including React, Node.js, and MongoDB, complemented by a solid
              understanding of machine learning frameworks like PyTorch and TensorFlow.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm driven by the challenge of creating scalable applications and exploring how AI can enhance
              user experiences. When I'm not coding, you'll find me solving algorithmic challenges or learning
              about the latest trends in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
