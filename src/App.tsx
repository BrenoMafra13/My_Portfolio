import { useEffect } from 'react'
import Header from './components/Header'
import About from './sections/About'
import CertificatesAndAwards from './sections/CertificatesAndAwards'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Recommendations from './sections/Recommendations'
import Skills from './sections/Skills'
import WorkExperience from './sections/WorkExperience'

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
          } else {
            entry.target.classList.remove('reveal-visible')
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
      {/* Animated Background Elements */}
      <div className="bg-gradient-animated" />
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="bg-stars" />
      <div className="bg-scanlines" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      <Header />

<main className="flex flex-col gap-8 px-[6vw] pb-24 pt-16">
        <Hero />
        <About />
        <Education />
        <CertificatesAndAwards />
        <Skills />
        <Projects />
        <WorkExperience />
        <Recommendations />
        <Contact />
      </main>
    </div>
  )
}

export default App
