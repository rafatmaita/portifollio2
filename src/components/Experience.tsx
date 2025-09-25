'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Orange Coding Academy',
      location: 'Jordan',
      period: '2023 - Present',
      description: 'Developing full-stack web applications using modern technologies. Working on various projects including e-commerce platforms, content management systems, and mobile applications.',
      achievements: [
        'Built responsive web applications using React, Next.js, and TypeScript',
        'Developed RESTful APIs using Node.js and Express',
        'Implemented database solutions with MongoDB and PostgreSQL',
        'Collaborated with cross-functional teams using Agile methodologies',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
      link: 'https://orange.jo/en/corporate/csr/coding-academy'
    },
    {
      title: 'Software Development Intern',
      company: 'MENA Devs',
      location: 'Jordan',
      period: '2022 - 2023',
      description: 'Gained hands-on experience in software development while working on real-world projects. Focused on learning best practices and modern development workflows.',
      achievements: [
        'Assisted in developing web applications using React and Vue.js',
        'Learned backend development with Python and Django',
        'Participated in daily standups and sprint planning sessions',
        'Contributed to open-source projects and documentation',
        'Gained experience with version control and collaborative development'
      ],
      technologies: ['React', 'Vue.js', 'Python', 'Django', 'Git', 'Docker'],
      link: 'https://menadevs.io/'
    },
    {
      title: 'Computer Science Student',
      company: 'Hashemite University',
      location: 'Jordan',
      period: '2020 - 2024',
      description: 'Pursued a Bachelor\'s degree in Computer Science, focusing on software engineering, algorithms, and data structures. Participated in various programming competitions and projects.',
      achievements: [
        'Maintained high academic performance with focus on software engineering',
        'Participated in programming competitions and hackathons',
        'Completed capstone project on web application development',
        'Learned fundamental concepts in algorithms and data structures',
        'Gained experience with multiple programming languages'
      ],
      technologies: ['Java', 'C++', 'Python', 'JavaScript', 'SQL', 'Data Structures', 'Algorithms'],
      link: 'https://hu.edu.jo/'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A journey through my professional experience and the projects that have shaped my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                          {exp.company}
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

