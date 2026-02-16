import { navItems } from '../data/nav'

function Header() {
  return (
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
  )
}

export default Header
