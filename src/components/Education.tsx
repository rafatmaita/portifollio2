'use client'

import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react'
import { cvData } from '@/data/cvData'

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A strong foundation in computer science and continuous learning in the ever-evolving world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {cvData.education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-6">
                    <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
              </div>
              

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                    Relevant Courses
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start text-slate-600 dark:text-slate-300 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      {cert.date}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education