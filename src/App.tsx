import { useEffect } from 'react'
import Header from './components/Header'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (!elements.length) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('reveal-visible'))
      return
    }

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
      <Header />

      <main className="flex flex-col gap-24 px-[6vw] pb-24 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
