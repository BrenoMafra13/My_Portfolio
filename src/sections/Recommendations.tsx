import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Recommendation = {
  id: string
  name: string
  title: string
  relationship: string
  date: string
  content: string
  technologies: string[]
  image: string
  email: string
  linkedin: string
}

function Recommendations() {
  const [showEmail, setShowEmail] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const recommendations: Recommendation[] = [
    {
      id: 'nicolas',
      name: 'Nicolas Cavalcante',
      title: 'Systems Analyst',
      relationship: 'Colleague at CENIBRA',
      date: 'February 12, 2025',
      content: 'Breno is a great team player who always assists the team and meets deadlines. He has strong communication skills and agility, consistently bringing innovative features to our applications.',
      technologies: ['React', 'React Native', 'Azure'],
      image: '/nicolas.jpeg',
      email: 'nicolascavalcante.rosa@hotmail.com',
      linkedin: 'https://www.linkedin.com/in/nicolascavalcante2011/',
    },
    {
      id: 'gustavo',
      name: 'Gustavo Silva',
      title: 'Full Stack Developer',
      relationship: 'Manager at CENIBRA',
      date: 'December 5, 2024',
      content: 'Breno is an excellent developer eager to learn new things. He always looks for best practices and brings innovative ideas to solve project problems.',
      technologies: ['React', 'Node.js', 'TypeScript'],
      image: '/gustavo.jpeg',
      email: 'lopesb.gustavo@gmail.com',
      linkedin: 'https://www.linkedin.com/in/gustavo-silva-8605209a/',
    },
    {
      id: 'dihann',
      name: 'Dihann Nagib',
      title: 'Full Stack Developer',
      relationship: 'Colleague at CENIBRA',
      date: 'December 3, 2024',
      content: 'Breno demonstrated great dedication and a collaborative spirit. He actively contributed to overcoming challenges. I confidently recommend him for opportunities where these qualities are valued.',
      technologies: ['React', 'Angular', 'REST APIs'],
      image: '/Dihann.jpeg',
      email: 'dihann_salles@hotmail.com',
      linkedin: 'https://www.linkedin.com/in/dihann-nagib/',
    },
    {
      id: 'albert',
      name: 'Albert Danison',
      title: 'Associate Dean at George Brown College',
      relationship: 'Instructor in T177 program',
      date: 'March 31, 2026',
      content: 'Breno stood out in the T177 program as a highly capable full-stack developer with strong React, TypeScript, Node.js, and Java skills. He combines technical depth with professionalism, collaboration, and a persistent, solution-oriented mindset.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Java'],
      image: '/albert.jpeg',
      email: 'Recommendation available on LinkedIn',
      linkedin: 'https://www.linkedin.com/in/albert-danison-23161015pr/',
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pageSize = isMobile ? 1 : 2

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + pageSize) % recommendations.length)
    }, 9000)

    return () => window.clearInterval(intervalId)
  }, [recommendations.length, pageSize])

  const toggleEmail = (id: string) => {
    setShowEmail(showEmail === id ? null : id)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + pageSize) % recommendations.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - pageSize + recommendations.length) % recommendations.length)
  }

  const visibleRecommendations = isMobile
    ? [recommendations[activeIndex]]
    : [recommendations[activeIndex], recommendations[(activeIndex + 1) % recommendations.length]]

  const pageCount = Math.ceil(recommendations.length / pageSize)
  const currentPage = Math.floor(activeIndex / pageSize)

  return (
    <section 
      id="recommendations" 
      className="reveal relative h-auto py-2 scroll-mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial_gradient(ellipse_at_50%_0%,_rgba(34,197,94,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.28em] text-green-500 font-mono">{"<Recommendations />"}</p>
          <h2 className="font-display text-2xl md:text-2xl text-white">What colleagues say about me:</h2>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPrev}
              aria-label="Previous recommendation"
              className="px-3 py-2 rounded-lg border border-green-500/20 text-green-500 bg-green-500/10 hover:bg-green-500/20 transition-colors duration-300"
            >
              <span className="font-mono text-sm">Prev</span>
            </button>
            <p className="text-xs md:text-sm font-mono text-white/60">
              {currentPage + 1} / {pageCount}
            </p>
            <button
              onClick={goToNext}
              aria-label="Next recommendation"
              className="px-3 py-2 rounded-lg border border-green-500/20 text-green-500 bg-green-500/10 hover:bg-green-500/20 transition-colors duration-300"
            >
              <span className="font-mono text-sm">Next</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleRecommendations.map((rec, cardIndex) => (
              <motion.div
                key={`${rec.id}-${activeIndex}`}
                className={`${cardIndex === 1 ? 'hidden md:block' : 'block'} relative group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent rounded-2xl opacity-100" />

                <div className="relative z-10 h-full p-5 md:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500/30 transition-colors duration-300 flex flex-col">
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="flex-1 pr-3 md:pr-8">
                    <p
                      className="text-sm md:text-base text-white leading-relaxed mb-5 italic ml-2 md:ml-6"
                      style={{ color: '#ffffff' }}
                    >
                      "{rec.content}"
                    </p>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <a href={rec.linkedin} target="_blank" rel="noopener noreferrer">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500/30 hover:border-green-400 transition-colors duration-300">
                          <img
                            src={rec.image}
                            alt={rec.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href={rec.linkedin} target="_blank" rel="noopener noreferrer">
                        <h4 className="font-display text-lg text-white group-hover:text-green-400 transition-colors duration-300">
                          {rec.name}
                        </h4>
                      </a>
                      <p className="text-xs font-mono text-green-400">{rec.title}</p>
                      <p className="text-xs font-mono text-white/75">
                        {rec.relationship}
                      </p>
                      <p className="text-xs font-mono text-white/55 mt-1">
                        {rec.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {rec.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-mono rounded-md bg-green-500/10 text-green-300 border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => toggleEmail(rec.id)}
                      className="w-full py-2 px-4 rounded-lg bg-green-500/10 text-green-300 border border-green-500/20 text-sm font-mono hover:bg-green-500/20 transition-colors duration-300"
                    >
                      {showEmail === rec.id ? rec.email : 'Request Recommendation'}
                    </button>
                  </div>

                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-green-500/10 to-transparent transform translate-x-1/2 -translate-y-1/2 rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex((index * pageSize) % recommendations.length)}
                aria-label={`Go to page ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentPage ? 'w-8 bg-green-500' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recommendations

