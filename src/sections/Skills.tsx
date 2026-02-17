import type { MouseEvent } from 'react'
import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'

type Skill = {
  name: string
  tag: string
  detail: string
  icon: IconType
  color: string
  experience: string
}

function Skills() {
  const skills: Skill[] = [
    {
      name: 'JavaScript',
      tag: 'JS',
      detail: 'ES6+, tooling, and UI architecture.',
      icon: SiJavascript,
      color: 'text-[#F7DF1E]',
      experience: '3+ years',
    },
    {
      name: 'TypeScript',
      tag: 'TS',
      detail: 'Type-safe React and scalable systems.',
      icon: SiTypescript,
      color: 'text-[#3178C6]',
      experience: '2+ years',
    },
    {
      name: 'React',
      tag: 'UI',
      detail: 'Component-driven, accessible interfaces.',
      icon: SiReact,
      color: 'text-[#61DAFB]',
      experience: '2+ years',
    },
    {
      name: 'Node.js',
      tag: 'API',
      detail: 'APIs, services, and runtime performance.',
      icon: SiNodedotjs,
      color: 'text-[#339933]',
      experience: '2+ years',
    },
    {
      name: 'Spring Boot',
      tag: 'JVM',
      detail: 'Enterprise-ready backend services.',
      icon: SiSpringboot,
      color: 'text-[#6DB33F]',
      experience: '1+ years',
    },
    {
      name: 'PostgreSQL',
      tag: 'SQL',
      detail: 'Relational data modeling and queries.',
      icon: SiPostgresql,
      color: 'text-[#4169E1]',
      experience: '2+ years',
    },
    {
      name: 'MongoDB',
      tag: 'NoSQL',
      detail: 'Document databases and aggregation.',
      icon: SiMongodb,
      color: 'text-[#47A248]',
      experience: '1.5 years',
    },
    {
      name: 'Docker',
      tag: 'DX',
      detail: 'Containerized dev and deployment.',
      icon: SiDocker,
      color: 'text-[#2496ED]',
      experience: '1.5 years',
    },
    {
      name: 'CI/CD',
      tag: 'OPS',
      detail: 'Automation, testing, and delivery.',
      icon: SiGithubactions,
      color: 'text-[#2088FF]',
      experience: '1+ years',
    },
  ]

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    target.style.setProperty('--x', `${x}px`)
    target.style.setProperty('--y', `${y}px`)
  }

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement
    target.style.setProperty('--x', '50%')
    target.style.setProperty('--y', '50%')
  }

  return (
    <section id="skills" className="reveal scroll-mt-28">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.28em] text-accent-strong font-mono">{"<Skills />"}</p>
        <h2 className="font-display text-3xl md:text-4xl">Core strengths that drive delivery.</h2>
        <p className="max-w-2xl text-muted text-lg">
          Focused on modern frontend stacks, UI engineering, and product execution.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon

          return (
            <article
              key={skill.name}
              className="dev-card group relative overflow-hidden rounded-2xl border border-line/40 bg-[#0a0f0d] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="dev-card-glow" aria-hidden="true" />
              <div className="dev-card-grid" aria-hidden="true" />
              
              <div className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-md bg-accent-strong/10">
                <span className="text-[10px] font-mono text-accent-strong">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent-strong/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-surface to-[#1a2420] border border-line/50 group-hover:border-accent-strong/30 transition-colors duration-300">
                        <Icon className={`h-7 w-7 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-text group-hover:text-accent-strong transition-colors duration-300">{skill.name}</h3>
                      <span className="text-xs font-mono text-accent-strong">{skill.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-line/50 to-transparent mb-4" />

                <p className="text-sm text-muted group-hover:text-muted/80 transition-colors duration-300 font-mono text-xs">
                  <span className="text-accent-strong">{">"}</span> {skill.detail}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-md bg-surface px-2 py-1 text-xs font-mono text-accent-strong border border-line/50">
                    {skill.tag}
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

