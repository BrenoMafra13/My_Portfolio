import { motion } from 'framer-motion'

type WorkExperience = {
  company: string
  companyLine2?: string
  position: string
  period: string
  location: string
  logo?: string
  description: string
  link?: string
  highlights: string[]
}

function WorkExperience() {
  const experiences: WorkExperience[] = [
    {
      company: 'Oakberry',
      position: 'Assistant Manager',
      period: 'Sep 2023 – Present',
      location: 'Toronto, ON, Canada',
      logo: '/oakberry.webp',
      description: 'Operations leadership in a high-volume environment.',
      highlights: [
        'Oversee daily operations, health/safety compliance, and audit readiness.',
        'Train and onboard employees, improving team consistency and execution quality.',
        'Coordinate inventory and stock control to reduce waste and keep product availability.',
      ],
    },
    {
      company: 'Tomkulak Consortium',
      position: 'Full-Stack Developer (Volunteer)',
      period: 'Nov 2025 – Present',
      location: 'Toronto, ON, Canada',
      logo: '/tomkulak.jpeg',
      description: 'Volunteer software development on critical infrastructure systems.',
      highlights: [
        'Develop global state management for a System of Systems dashboard across 21 infrastructure sectors.',
        'Optimize PostGIS-to-React data pipelines for 1,000+ GIS assets in map interfaces.',
        'Design API contracts and JSON schemas for multi-regional deployment.',
      ],
    },
    {
      company: 'CENIBRA',
      companyLine2: 'Celulose Nipo Brasileira S.A.',
      position: 'Junior Software Developer',
      period: 'Jan 2023 – Apr 2024',
      location: 'Brazil (Remote)',
      logo: '/company.jpg',
      description: 'Full-stack development for internal industrial applications.',
      link: 'https://www.cenibra.com.br/',
      highlights: [
        'Engineered internal web applications using React and TypeScript, focusing on high-performance interfaces and optimal user experience.',
        'Implemented RESTful APIs with Node.js and Express, managing large-scale industrial data through PostgreSQL/MySQL optimization.',
        'Streamlined deployment workflows by containerizing applications with Docker and implementing CI/CD pipelines via Azure DevOps.',
        'Delivered code within an Agile/Scrum framework, contributing to code reviews and documentation.',
      ],
    },
    {
      company: 'Bosch',
      position: 'Mechatronics Intern',
      period: 'Jan 2021 – Dec 2022',
      location: 'Curitiba, Brazil',
      logo: '/bosch.jpg',
      description: 'Engineering internship combining technical training and industrial practice.',
      highlights: [
        'Completed dual education training while supporting multidisciplinary production operations.',
        'Assisted industrial electrical maintenance and troubleshooting to improve equipment reliability.',
        'Applied programming and IoT concepts in robotic automation initiatives.',
      ],
    },
  ]

  return (
    <section 
      id="experience" 
      className="reveal relative h-auto py-2 scroll-mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial_gradient(ellipse_at_50%_0%,_rgba(34,211,238,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.28em] text-accent-strong font-mono">{"<Experience />"}</p>
          <h2 className="font-display text-2xl md:text-2xl">Professional journey in software development:</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative h-full">
              <motion.div
                className="relative group h-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
              {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full min-h-[760px] p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  {/* Background logo - inside the card */}
                  {exp.logo && (
                    <div className="absolute -top-21 -right-2 w-80 h-80 md:w-96 md:h-96 lg:w-[45rem] lg:h-[25rem] pointer-events-none opacity-50 pr-8">
                      <motion.img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain group-hover:scale-110 group-hover:brightness-110"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        whileInView={{ opacity: 0.4, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  )}

                  <div className="relative z-10 flex h-full flex-col">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block text-xl md:text-2xl lg:text-3xl font-mono text-accent font-bold mr-2">
                        {exp.period}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="font-display text-3xl md:text-4xl text-text mb-2 group-hover:text-accent transition-colors duration-300 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                          {exp.position}
                        </a>
                      ) : (
                        exp.position
                      )}
                    </motion.h3>

                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent-strong transition-colors duration-300">
                          <span className="text-lg md:text-xl lg:text-2xl font-mono text-accent-strong group-hover:text-muted/80 transition-colors duration-300">
                            {exp.company}
                          </span>
                          {exp.companyLine2 && (
                            <>
                              <br />
                              <span className="text-base md:text-lg lg:text-xl font-mono text-muted group-hover:text-muted/80 transition-colors duration-300">
                                {exp.companyLine2}
                              </span>
                            </>
                          )}
                        </a>
                      ) : (
                        <>
                          <span className="text-lg md:text-xl lg:text-2xl font-mono text-accent-strong group-hover:text-muted/80 transition-colors duration-300">
                            {exp.company}
                          </span>
                          {exp.companyLine2 && (
                            <>
                              <br />
                              <span className="text-base md:text-lg lg:text-xl font-mono text-muted group-hover:text-muted/80 transition-colors duration-300">
                                {exp.companyLine2}
                              </span>
                            </>
                          )}
                        </>
                      )}
                    </motion.div>

                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-base md:text-lg lg:text-xl font-mono text-muted group-hover:text-muted/70 transition-colors duration-300">
                        {exp.location}
                      </span>
                    </motion.div>

                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-6">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + highlightIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                            <p className="text-sm md:text-base lg:text-lg leading-relaxed" style={{color: 'white'}}>
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Timeline connector */}
              {index % 2 === 0 && index < experiences.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

