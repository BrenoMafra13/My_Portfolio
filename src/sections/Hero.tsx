import { useEffect, useState } from 'react'
import heroPhoto from '../assets/my_photo.jpeg'
import { stats } from '../data/stats'

function Hero() {
  const [text, setText] = useState('')
  const fullText = "I'm Breno, Full-stack Software Developer"
  const splitIndex = fullText.indexOf(',')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 120)
    return () => clearInterval(interval)
  }, [])

  const typedPart = text
  const beforeComma = typedPart.slice(0, splitIndex + 1)
  const afterComma = typedPart.slice(splitIndex + 1)

  return (
    <section
      id="home"
      className="reveal grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-display text-[clamp(2.8rem,4vw,4.8rem)] leading-[1.05]">
          <span className="min-h-[1.2em]">
            {beforeComma}
            <span className="text-accent-strong">{afterComma}</span>
            <span className="typing-cursor">|</span>
          </span>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          I use my knowledge in JavaScript, TypeScript, Node.js and React to build web applications
          with a focus on product performance.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/breno-lopes-mafra/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(10,102,194,0.35)]"
          >
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.369-1.85 3.6 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/BrenoMafra13"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-[#0D1117] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(13,17,23,0.35)]"
          >
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.242 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.429.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.216.695.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@brenolopesmafra4519"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,0,0,0.35)]"
          >
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.12-2.136C19.5 3.545 12 3.545 12 3.545s-7.5 0-9.378.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.12 2.136C4.5 20.455 12 20.455 12 20.455s7.5 0 9.378-.505a3.015 3.015 0 0 0 2.12-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-line px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="6" width="18" height="12" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Contact Me
          </a>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-line bg-surface px-5 py-4 text-sm shadow-soft"
            >
              <p className="text-xl font-semibold text-text">{item.value}</p>
              <p className="text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -right-4 -top-4 h-full w-full rounded-[40px] border border-line/40" />
        <div className="relative overflow-hidden rounded-[40px] border border-line bg-accent-strong p-4 shadow-soft">
          <img
            src={heroPhoto}
            alt="Breno Lopes Mafra"
            className="h-[320px] md:h-[420px] w-full rounded-[32px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

