'use client'

import { cvData } from '@/data/cvData'

const Skills = () => {

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: cvData.skills.programmingLanguages
    },
    {
      title: 'Frontend Technologies',
      skills: cvData.skills.frontend
    },
    {
      title: 'Backend Technologies',
      skills: cvData.skills.backend
    },
    {
      title: 'Databases',
      skills: cvData.skills.databases
    },
    {
      title: 'AI & Machine Learning',
      skills: cvData.skills.aiAndML
    },
    {
      title: 'Tools & Version Control',
      skills: cvData.skills.tools
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-flip-in-x text-glow">
            My <span className="gradient-text text-shimmer">Skills</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            A comprehensive overview of the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg animate-zoom-in hover-tilt transition-elastic glass-effect"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center text-glow">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + skillIndex * 0.05}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full relative overflow-hidden hover-glow-pulse transition-elastic"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className="mt-16 text-center animate-fade-in-up"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-glow">
            Additional Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {cvData.skills.softSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700 animate-bounce-in hover-wiggle transition-elastic"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

