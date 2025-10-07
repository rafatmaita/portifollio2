'use client'

import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react'
import { cvData } from '@/data/cvData'

const About = () => {

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks like React, Next.js, and Vue.js.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using Node.js, Python, and various databases.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user experiences that engage users and drive conversions.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native and Flutter.'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Building full-stack web applications with modern technologies and best practices.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, scalability, and better user experience.'
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-flip-in-x text-glow">
            About <span className="gradient-text text-shimmer">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            I&apos;m a passionate full-stack developer with a love for creating innovative solutions 
            and bringing ideas to life through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m a dedicated software engineer with a strong foundation in computer science 
                and a passion for creating innovative web solutions. My journey began with a 
                curiosity about how things work, which led me to pursue a degree in Computer Science.
              </p>
              <p>
                Throughout my career, I&apos;ve had the opportunity to work on diverse projects, 
                from building e-commerce platforms to developing mobile applications. Each 
                project has taught me something new and helped me grow as a developer.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                technologies. When I&apos;m not coding, you can find me exploring new frameworks, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 animate-fade-in-right">
            {[
              { number: cvData.stats.yearsExperience, label: 'Years Experience' },
              { number: cvData.stats.projectsCompleted, label: 'Projects Completed' },
              { number: cvData.stats.aiProjectsCompleted, label: 'AI Projects' },
              { number: cvData.stats.clientSatisfaction, label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover-zoom transition-elastic animate-bounce-in glass-effect`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 text-glow">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12 animate-flip-in-x text-glow">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 animate-zoom-in hover-tilt transition-elastic glass-effect"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 animate-rotate-in hover-wiggle">
                  <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-glow">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

