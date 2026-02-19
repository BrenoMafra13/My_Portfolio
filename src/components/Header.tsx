import { useState } from 'react'
import { navItems } from '../data/nav'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-white/5 backdrop-blur-xl px-[1vw] py-2 sm:py-3">
      <div className="flex items-center justify-between gap-2">
        {/* Avatar + Name - Left side */}
        <div className="flex items-center gap-2 font-display text-[clamp(0.8rem,1.8vw,1.5rem)] tracking-wide">
          <a href="#hero">
            <img 
              src="/avatar.jpg" 
              alt="Breno" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full object-cover hover:ring-2 hover:ring-accent transition-all"
            />
          </a>
          <a href="#hero" className="font-semibold hover:text-accent transition-colors whitespace-nowrap">
            Breno Lopes Mafra
          </a>
        </div>

        {/* Desktop Navigation - Center with auto sizing */}
<nav className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-8 text-[clamp(0.7rem,1.3vw,1.25rem)]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative py-0.5 text-muted transition hover:text-text focus:text-text after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent-strong after:transition after:content-[''] hover:after:scale-x-100 focus:after:scale-x-100 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Let's Talk Button + Hamburger - Right side */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-accent-strong px-3 lg:px-4 xl:px-5 py-0.5 lg:py-1 text-[clamp(0.65rem,1vw,1rem)] font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)] whitespace-nowrap"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Button - Far Right */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1 p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`w-5 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span 
              className={`w-5 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span 
              className={`w-5 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-3 pb-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-muted transition hover:text-text focus:text-text"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-accent-strong px-5 py-2 text-lg font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

