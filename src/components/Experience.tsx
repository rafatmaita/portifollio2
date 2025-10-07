'use client'

import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { cvData } from '@/data/cvData'

const Experience = () => {

  const experiences = cvData.experience

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-flip-in-x text-glow">
            My <span className="gradient-text text-shimmer">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            A journey through my professional experience and the projects that have shaped my career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600 animate-shimmer"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 z-10 animate-pulse hover-glow-pulse"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 hover-tilt transition-elastic glass-effect"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 text-glow">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                          {exp.company}
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:text-primary-700 dark:hover:text-primary-300 transition-elastic hover-rotate"
                          >
                            <ExternalLink className="w-4 h-4 animate-heartbeat" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 animate-heartbeat" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 animate-heartbeat" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-glow">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="animate-fade-in-up" style={{ animationDelay: `${0.1 + achIndex * 0.05}s` }}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-glow">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium animate-bounce-in hover-wiggle transition-elastic"
                            style={{ animationDelay: `${0.1 + techIndex * 0.05}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

