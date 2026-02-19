import { useEffect, useRef, useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  github?: string
  video?: string
  videos?: string[]
  year: string
  figmaAdmin?: string
  figmaApp?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Financial Analytics Dashboard',
    description: 'Full-stack finance dashboard with auth (login/register/guest), KPIs, charts, accounts/transactions, and settings. Features real-time financial data visualization, account management, transaction tracking, and investment portfolio overview.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Zustand', 'Axios', 'Recharts', 'Node.js', 'Express', 'better-sqlite3', 'JWT', 'Zod', 'nanoid', 'cron'],
    image: '/financialProject.jpeg',
    link: 'https://financial-analytics-dashboard-neon.vercel.app/',
    github: 'https://github.com/BrenoMafra13/financial-analytics-dashboard',
    video: 'https://www.youtube.com/watch?v=U5P4nF6hltQ',
    year: '2025 - 2026',
  },
  {
    id: 2,
    title: 'Full-Stack Order Management System',
    description: 'Full-stack Java microservices with Dockerized infrastructure. Gateway with Keycloak/JWT aggregation, Product Service with MongoDB and Redis, Inventory Service with PostgreSQL, Order Service, and Notification Service with Kafka.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Redis', 'MongoDB', 'PostgreSQL', 'Kafka', 'Keycloak', 'OpenFeign'],
    image: '/project2.png',
    link: '#',
    github: 'https://github.com/BrenoMafra13/Microsservice-Ecommerce-Platform',
    videos: ['https://www.youtube.com/watch?v=vuW-PBnc7YY', 'https://www.youtube.com/watch?v=DFeRhN09lWI'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Cashier Management System',
    description: 'Complete web-based cashier management system designed to streamline operations for small businesses. The application enables product and customer registration, sales transactions, inventory control, and sales history tracking — all supported by a SQLite database. Features include user authentication with hashed passwords, product/customer CRUD operations with image upload, shopping cart system with quantity tracking and stock updates, and role-restricted deletion with admin password validation.',
    technologies: ['JavaScript', 'CSS', 'Flask', 'Python', 'SQLite', 'Jinja2', 'HTML'],
    image: '/project3.png',
    link: 'https://lively-creativity-production.up.railway.app/login',
    github: 'https://github.com/me50/BrenoMafra13/tree/66e7ee4d316cc6ea6f787578200346fdb335007b',
    video: 'https://www.youtube.com/watch?v=8QARnsCS8uI',
    year: '2024 - 2025',
  },
  {
    id: 4,
    title: 'Project Management Tool',
    description: 'Full-featured web application using ASP.NET MVC, structured with the Model-View-Controller (MVC) design pattern. The platform enables efficient project and task management, including creation and search of projects and tasks by name, customizable user profiles with editable name, photo, phone number, email, and more, role-based access control system with specific permissions for Admins, Managers, Executors, and Testers, and full integration with a PostgreSQL database for real-time data handling (CRUD operations).',
    technologies: ['ASP.NET MVC', 'PostgreSQL', 'C#', 'Razor', 'Entity Framework'],
    image: '/project4.png',
    link: 'https://projecttool-production.up.railway.app/',
    github: 'https://github.com/BrenoMafra13/Project-Management-Tool',
    videos: ['https://www.youtube.com/watch?v=NBVjLgryr_s', 'https://www.youtube.com/watch?v=be8gfvCMi5Q'],
    year: '2025',
  },
  {
    id: 5,
    title: 'MoviCare – Senior Care and Support Application',
    description: 'Capstone Project - Digital solution designed to address the challenges of Canada\'s aging population by supporting seniors through integrated technology. Provides centralized platform for medication alerts, wellness check-ins, and coordination between seniors, family members, and caregivers.',
    technologies: ['Capstone Project', 'Healthcare Tech', 'Firebase', 'GPS Integration', 'Cross-Platform'],
    image: '/capstoneadmin.png',
    link: '#',
    github: 'https://gitlab.com/BrenoMafra13/movicareapp',
    figmaAdmin: 'https://polo-washi-30760547.figma.site/admin',
    figmaApp: 'https://mural-ankle-24427301.figma.site/',
    year: '2025 - 2026',
  },
]

function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState<number[]>(projects.map(() => 0))
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      const newProgress = projects.map((_, index) => {
        const cardZoneStart = index * (sectionHeight / projects.length) - (windowHeight * 0.3)
        const cardZoneEnd = cardZoneStart + (sectionHeight / projects.length)
        const scrollPosition = -sectionTop + (windowHeight * 0.7)
        const cardProgress = (scrollPosition - cardZoneStart) / (cardZoneEnd - cardZoneStart)
        return Math.max(0, Math.min(1, cardProgress))
      })

      setScrollProgress(newProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleProjectClick = (project: Project) => {
    if (project.id === 5) {
      setSelectedProject(project)
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" ref={sectionRef} className="reveal py-10 scroll-mt-28">
        <div className="mb-16 flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.28em] text-accent-strong font-mono">{"<Projects />"}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">Selected work and impact.</h2>
          <p className="max-w-2xl text-muted text-lg">
            A curated selection of portfolio projects and product wins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const progress = scrollProgress[index] || 0
            const isEven = index % 2 === 0
            
            // Direction calculations
            const slideDirection = isEven ? -1 : 1
            
            // 3. Progressive scale: scale from 0.8 to 1
            const scale = 0.8 + (progress * 0.2)
            
            // 5. More dynamic rotation: starts at 12deg, goes to 0
            const rotate = (1 - progress) * 12 * slideDirection
            
            // Main card transform
            const translateX = (1 - progress) * 80 * slideDirection
            const translateY = (1 - progress) * 40
            
            // 4. 3D depth: perspective and translateZ
            const perspective = 1000
            const translateZ = (1 - progress) * 50
            
            const opacity = progress
            
            // 2. Glow effect intensity based on progress
            const glowIntensity = Math.sin(progress * Math.PI) * 0.6

            return (
              <article
                key={project.id}
                className={`${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
                style={{
                  transform: `perspective(${perspective}px) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale}) translateZ(${-translateZ}px)`,
                  opacity: opacity,
                  transition: 'transform 0.05s linear, opacity 0.05s linear',
                }}
              >
                <div 
                  className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-accent/30 hover:bg-white/10 ${index === 4 ? 'cursor-pointer' : ''}`}
                  onClick={() => handleProjectClick(project)}
                  style={{
                    transform: `translateZ(${translateZ}px)`,
                  }}
                >
                  {/* 2. Glow effect behind card */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: `radial-gradient(800px circle at 50% 120%, rgba(59, 130, 246, ${glowIntensity}), transparent 50%)`,
                      filter: 'blur(40px)',
                      transform: 'translateY(20px)',
                    }}
                  />

                  {/* Image Container with 1. Parallax effect */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-[#0a0f0d]/20 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        // 1. Parallax: image moves at different speed
                        transform: `translateY(${(1 - progress) * 20}px) scale(${1 + (1 - progress) * 0.1})`,
                      }}
                    />
                    
                    {/* Year Badge */}
                    <div className="absolute right-4 top-4 z-20">
                      <span className="rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 px-3 py-1 text-xs font-mono text-accent">
                        {project.year}
                      </span>
                    </div>

                    {/* Project Number */}
                    <div className="absolute left-4 bottom-4 z-20">
                      <span 
                        className="text-6xl font-display text-white/10 font-bold"
                        style={{
                          opacity: 0.3 + (progress * 0.7),
                          transform: `scale(${0.5 + (progress * 0.5)})`,
                          transition: 'transform 0.1s linear, opacity 0.1s linear',
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-text mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-mono text-accent-strong border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-button-text transition-all hover:bg-accent-strong hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View
                        </a>
                      )}
                      <a
                        href={project.github || '#'}
                        target={project.github ? "_blank" : undefined}
                        rel={project.github ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-text transition-all hover:border-accent hover:text-accent hover:-translate-y-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[#FF0000] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#CC0000] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:-translate-y-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          Video
                        </a>
                      )}
                      {project.videos && project.videos.map((video, idx) => (
                        <a
                          key={idx}
                          href={video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[#FF0000] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#CC0000] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:-translate-y-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          Video {idx + 1}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-strong to-accent transition-transform duration-300 group-hover:scale-x-100" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/20 to-transparent transform translate-x-1/2 -translate-y-1/2 rotate-45" />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Capstone Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Card */}
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#0a0f0d]/95 backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono mb-4">
                  CAPSTONE PROJECT
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* 1. Capstone Project Info */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Capstone Project
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Title:</strong> MoviCare – Senior Care and Support Application.
                  </div>
                  <div>
                    <strong className="text-text">Team (Movicode Inc.):</strong> Breno Lopes Mafra, Carlos Figuera La Riva, Jezril Calivoso, and Henry Wagner.
                  </div>
                  <div>
                    <strong className="text-text">Institution:</strong> George Brown College, School of Computer Technology.
                  </div>
                  <div>
                    <strong className="text-text">Timeline:</strong> September 15, 2025 – March 27, 2026.
                  </div>
                </div>
              </section>

              {/* 2. Project Summary */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Project Summary
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Overview:</strong> MoviCare is a digital solution designed to address the challenges of Canada's aging population by supporting seniors through integrated technology.
                  </div>
                  <div>
                    <strong className="text-text">Core Purpose:</strong> The application provides a centralized platform for medication alerts, wellness check-ins, and coordination between seniors, family members, and caregivers.
                  </div>
                  <div>
                    <strong className="text-text">Business Model:</strong> A "freemium" approach offering essential features for free, with premium subscriptions for advanced caregiver tools and institutional licensing for NGOs and municipalities.
                  </div>
                </div>
              </section>

              {/* 3. Project Vision */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Project Vision
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Problem Statement:</strong> By 2030, seniors will represent 23% of the Canadian population, increasing the risk of social isolation and health management difficulties.
                  </div>
                  <div>
                    <strong className="text-text">Product Positioning:</strong> MoviCare is positioned as a preventive healthcare tool that reduces public health costs by preventing emergencies related to missed medications or lack of monitoring.
                  </div>
                  <div>
                    <strong className="text-text">Target Users:</strong> Primary users include elderly Canadians needing assistance with daily tasks, as well as family members and professional caregivers who monitor their well-being.
                  </div>
                </div>
              </section>

              {/* 4. Project/Business Requirements */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Project/Business Requirements
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Health Management:</strong> Automated medication reminders (HLR24) and doctor's appointment scheduling (HLR25).
                  </div>
                  <div>
                    <strong className="text-text">Safety & Security:</strong> An emergency "Panic Button" that broadcasts the senior's real-time GPS location to designated contacts.
                  </div>
                  <div>
                    <strong className="text-text">Well-being Monitoring:</strong> A "Daily Wellness Check-in" (I'm OK button) to confirm status; failure to check in triggers an automatic caregiver alert.
                  </div>
                </div>
              </section>

              {/* 5. Project Plan */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Project Plan
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Methodology:</strong> The project follows a sprint-based development cycle from requirements definition to final delivery.
                  </div>
                  <div>
                    <strong className="text-text">Key Milestones:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>September 26, 2025: Vision, Personas, and Stories approval.</li>
                      <li>October 10, 2025: Prototype completion.</li>
                      <li>November 7, 2025: Core application features completion.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-text">Risk Management:</strong> Mitigation strategies are in place for technical failures (e.g., local storage during network outages) and market risks.
                  </div>
                </div>
              </section>

              {/* 6. Requirements Analysis and Design */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Requirements Analysis and Design
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">System Architecture:</strong> A cross-platform application (Web and Mobile) utilizing Firebase Cloud Messaging for real-time alerts and a synchronized database.
                  </div>
                  <div>
                    <strong className="text-text">Accessibility Standards:</strong> Designed to meet WCAG 2.1 standards, featuring large buttons, high contrast, and simplified navigation for seniors.
                  </div>
                  <div>
                    <strong className="text-text">Technical Modeling:</strong> Includes Use Case diagrams, normalized data models, activity diagrams, and sequence diagrams for core features like medication management.
                  </div>
                </div>
              </section>

              {/* 7. Wireframes/Mockups */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Wireframes/Mockups
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">User-Centric Design:</strong> Focuses on a minimalist interface to reduce cognitive load.
                  </div>
                  <div>
                    <strong className="text-text">Dashboard Views:</strong> Distinct interfaces tailored for different roles—Seniors (simplified tasks), Caregivers (monitoring logs), and Nurses (medical data).
                  </div>
                  <div>
                    <strong className="text-text">Core Components:</strong> Visual indicators for upcoming appointments and red emergency banners for active alerts.
                  </div>
                </div>
              </section>

              {/* 8. Status Reports */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Status Reports
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Sprint 1:</strong> Completion of the Project Vision, Personas, and high-level requirements.
                  </div>
                  <div>
                    <strong className="text-text">Sprint 2:</strong> Delivery of textual analysis, use cases, and the traceability matrix.
                  </div>
                  <div>
                    <strong className="text-text">Sprint 3:</strong> Finalization of the prototype, design technical updates, and SRS documentation.
                  </div>
                </div>
              </section>

              {/* 9. System Implementation */}
              <section className="mb-8">
                <h3 className="font-display text-xl text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  System Implementation
                </h3>
                <div className="space-y-4 text-muted">
                  <div>
                    <strong className="text-text">Core Features:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Medication Module: Inputs for dosage/frequency with automated local and push notifications.</li>
                      <li>Wellness Check-in: Timestamp recording and status updates on family dashboards.</li>
                      <li>Task Management: Real-time synchronization of caregiving tasks (e.g., "In Progress" or "Completed").</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-text">Tech Stack:</strong> Implementation utilizes GPS sensor integration for emergency alerts and API-based community activity feeds.
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-button-text transition-all hover:bg-accent-strong hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitLab Repository
                  </a>
                )}
                {selectedProject.figmaAdmin && (
                  <a
                    href={selectedProject.figmaAdmin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#F24E1E] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D94216] hover:shadow-[0_0_30px_rgba(242,78,30,0.4)] hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                    </svg>
                    Figma Prototype (Admin)
                  </a>
                )}
                {selectedProject.figmaApp && (
                  <a
                    href={selectedProject.figmaApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#A259FF] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8B47DB] hover:shadow-[0_0_30px_rgba(162,89,255,0.4)] hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                    </svg>
                    Figma Prototype (App)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects

