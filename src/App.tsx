import { useEffect } from 'react'
import heroPhoto from './assets/my_photo.jpeg'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const stats = [
  { value: '1.5', label: 'Years of work Experience' },
  { value: '8+', label: 'Projects Shipped' },
  { value: '12', label: 'Core Skills' },
]

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-base text-text">
      <header className="sticky top-0 z-20 border-b border-line bg-glass px-[6vw] py-5 backdrop-blur-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="font-display text-[1.7rem] tracking-wide">
            <span className="font-semibold">Breno Lopes Mafra</span>
          </div>
          <nav className="flex flex-wrap gap-5 text-[1.3rem] md:gap-7">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative py-1 text-muted transition hover:text-text focus:text-text after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent-strong after:transition after:content-[''] hover:after:scale-x-100 focus:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent-strong px-5 py-2 text-[1.3rem] font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      <main className="flex flex-col gap-24 px-[6vw] pb-24 pt-16">
        <section
          id="home"
          className="reveal grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[clamp(2.8rem,4vw,4.8rem)] leading-[1.05]">
              I’m Breno,
              <span className="block text-accent-strong">Full-stack Software Developer</span>
            </h1>
            <p className="max-w-xl text-lg text-muted">
              I build modern, scalable web experiences with a focus on product clarity, performance,
              and polished UI delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent"
              >
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
            <div className="absolute -right-8 -top-8 hidden h-full w-full rounded-[40px] border border-line/40 md:block" />
            <div className="relative overflow-hidden rounded-[40px] border border-line bg-accent-strong p-6 shadow-soft">
              <img
                src={heroPhoto}
                alt="Breno Lopes Mafra"
                className="h-[420px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="reveal scroll-mt-28 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div className="rounded-2xl border border-line bg-surface p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
            <h2 className="mt-3 font-display text-3xl">Product-focused engineering mindset.</h2>
            <p className="mt-4 text-muted">
              I combine frontend engineering with a strong sense of product direction. My work
              focuses on delivering intuitive interfaces, reliable architecture, and a clean,
              consistent user experience.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Highlights</p>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              <li>End-to-end ownership from concept to deployment</li>
              <li>Strong collaboration with design and product teams</li>
              <li>Performance tuning and codebase scalability</li>
              <li>Clean UI systems with reusable components</li>
            </ul>
          </div>
        </section>

        <section id="skills" className="reveal scroll-mt-28">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Skills</p>
            <h2 className="font-display text-3xl">Core strengths that drive delivery.</h2>
            <p className="max-w-2xl text-muted">
              Focused on modern frontend stacks, UI engineering, and product execution.
            </p>
          </div>
        </section>

        <section id="projects" className="reveal scroll-mt-28">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Projects</p>
            <h2 className="font-display text-3xl">Selected work and impact.</h2>
            <p className="max-w-2xl text-muted">
              A curated selection of portfolio projects and product wins.
            </p>
          </div>
        </section>

        <section id="contact" className="reveal scroll-mt-28">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
            <h2 className="font-display text-3xl">Let’s build something together.</h2>
            <p className="max-w-2xl text-muted">
              Reach out for collaborations, opportunities, or to talk about how I can support your
              team.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:brenolopesmafra@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
            >
              brenolopesmafra@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/breno-lopes-mafra/"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
