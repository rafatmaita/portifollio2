'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative solutions 
            and bringing ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                I'm a dedicated software engineer with a strong foundation in computer science 
                and a passion for creating innovative web solutions. My journey began with a 
                curiosity about how things work, which led me to pursue a degree in Computer Science.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on diverse projects, 
                from building e-commerce platforms to developing mobile applications. Each 
                project has taught me something new and helped me grow as a developer.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                technologies. When I'm not coding, you can find me exploring new frameworks, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '10+', label: 'Technologies Mastered' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-800 dark:to-slate-700"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="spectacular-hover p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 card-3d"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

