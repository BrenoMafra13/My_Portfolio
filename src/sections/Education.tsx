import { motion, AnimatePresence } from 'framer-motion'
import gbcLogo from '../assets/gbc.webp'
import pucprLogo from '../assets/pucpr.png'
import { useState } from 'react'

type Education = {
  institution: string
  institutionLine2?: string
  degree: string
  period: string
  location: string
  logo: string
  description: string
  status: string
  details: {
    courses: string[]
    skills: string[]
  }
}

function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const education: Education[] = [
    {
      institution: 'George Brown',
      institutionLine2: 'Polytechnic',
      degree: 'Advanced College Diploma',
      period: '2023 - 2026',
      location: 'Toronto, Canada',
      logo: gbcLogo,
      description: 'Computer Programming and Analysis',
      status: 'Completed (GPA: 3.65)',
      details: {
        courses: [
          'Object-Oriented Programming (Java, C#, Python)',
          'Backend Development with Java and Spring Boot',
          'Database Design and Management (PostgreSQL, SQL Server)',
          'Web Development with PHP and ASP.NET MVC',
          'Full Stack Development using Java, JavaScript, and modern frameworks',
          'RESTful API Design and Integration',
          'DevOps Practices with Docker and CI/CD Concepts',
          'Data Structures and Algorithms',
          'Software Testing and Quality Assurance',
          'System Analysis, Architecture, and Agile Methodologies',
        ],
        skills: [
          'JavaScript',
          'TypeScript',
          'React',
          'Node.js',
          'Java',
          'Spring Boot',
          'Python',
          'C#',
          'PostgreSQL',
          'SQL Server',
          'Docker',
          'REST APIs',
        ],
      },
    },
    {
      institution: 'Pontifícia Universidade',
      institutionLine2: 'Católica do Paraná',
      degree: 'Bachelor Degree',
      period: '2021 - 2022',
      location: 'Curitiba, Brazil',
      logo: pucprLogo,
      description: 'Mechatronic Engineering',
      status: 'Coursework',
      details: {
        courses: [
          'Grade: 4 out of 10 periods attended, suspension due to change of institution',
          'Activities and societies:',
          '- Conception and Design in Engineering',
          '- Calculation I, II, III and numeric',
          '- Chemistry of materials',
          '- Technologies in Engineering',
          '- Computing applied to Engineering',
          '- Engineering in the biological world',
          '- Physics I, II and III',
          '- Conception of application-based solutions',
          '- Innovative entrepreneurship',
          '- Computational numerical methods',
        ],
        skills: [
          'Calculus',
          'Physics',
          'Numerical Methods',
          'Engineering Design',
          'Problem Solving',
          'Technical Analysis',
        ],
      },
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section 
      id="education" 
      className="reveal relative h-auto py-2 scroll-mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial_gradient(ellipse_at_50%_0%,_rgba(63,226,141,0.08)_0%,_transparent_50%)]" />

      <div className="relative z-10 ">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.28em] text-accent-strong font-mono">{"<Education />"}</p>
          <h2 className="font-display text-2xl md:text-2xl">My recent academic journey in technology and engineering:</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
          {education.map((edu, index) => (
            <div key={edu.institution} className="relative">
              {/* Main Content Card */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Big background logo - fixed position relative to the card */}
                <div className="absolute top-0 right-0 w-72 h-72 md:w-80 md:h-80 lg:w-[30rem] lg:h-[27rem] pointer-events-none">
                  <motion.img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain group-hover:scale-110 group-hover:brightness-110"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 0.45, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="min-h-[280px]">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block text-xl md:text-2xl lg:text-3xl font-mono text-accent-strong font-bold group-hover:scale-105 transition-transform duration-300">
                        {edu.period}
                      </span>
                    </motion.div>
                    <motion.h3
                      className="font-display text-3xl md:text-4xl lg:text-5xl text-text mb-3 group-hover:text-accent-strong transition-colors duration-300 leading-tight line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {edu.institution}
                      {edu.institutionLine2 && (
                        <>
                          <br />
                          {edu.institutionLine2}
                        </>
                      )}
                    </motion.h3>
                    <motion.div
                      className="mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg md:text-xl lg:text-2xl font-mono text-muted/60 uppercase tracking-widest group-hover:text-muted/80 transition-colors duration-300">
                        {edu.degree}
                      </span>
                    </motion.div>
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-base md:text-lg lg:text-xl font-mono text-muted/50 group-hover:text-muted/70 transition-colors duration-300">
                        {edu.location}
                      </span>
                    </motion.div>
                    <motion.p
                      className="font-mono text-base md:text-lg lg:text-xl text-muted/70 max-w-lg mb-6 group-hover:text-muted/90 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {edu.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap items-center gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-accent-strong animate-pulse" />
                      <span className="text-base md:text-lg font-mono text-muted/40 group-hover:text-muted/60 transition-colors duration-300">
                        {edu.status}
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      <motion.button
                        onClick={() => toggleExpand(index)}
                        className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-strong/10 text-accent-strong text-sm font-mono hover:bg-accent-strong/20 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{expandedIndex === index ? 'Hide Details' : 'View Details'}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-strong/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-strong/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    className="overflow-hidden z-20"
                  >
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-strong/5 via-accent/5 to-transparent border border-accent-strong/10 backdrop-blur-sm">
                      <div className="mb-6">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-strong mb-3">
                          {index === 0 ? 'Coursework & Activities' : 'Courses Completed'}
                        </h4>
                        <ul className="space-y-2">
                          {edu.details.courses.map((course, courseIndex) => (
                            <motion.li
                              key={courseIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: courseIndex * 0.05 }}
                              className="text-sm md:text-base text-muted/70 font-mono flex items-start gap-2"
                            >
                              <span className="text-accent-strong mt-1">▹</span>
                              {course}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-strong mb-3">
                          Relevant Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.details.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.03 }}
                              className="px-3 py-1.5 text-xs md:text-sm font-mono rounded-full bg-accent-strong/10 text-accent-strong border border-accent-strong/20"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

