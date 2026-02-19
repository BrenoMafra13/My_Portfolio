function About() {
  return (
    <section id="about" className="reveal scroll-mt-28">
      <div className="flex flex-col gap-4">
        <div className="relative mx-auto mt-6 max-w-4xl text-center">
          <span className="pointer-events-none absolute left-0 top-0 -translate-x-6 -translate-y-6 text-7xl font-semibold text-accent-strong/70 md:-translate-x-10 md:-translate-y-8 md:text-8xl">
            “
          </span>
          <p className="mx-auto max-w-6xl font-display text-[clamp(1.6rem,2.4vw,2.3rem)] leading-tight text-text">
            <span className="block">
              Code is my tool for <span className="text-accent-strong">serving people</span>. I build 
            </span>
            <span className="block">
              to solve real problems and create{' '}
              <span className="text-accent-strong">human impact</span>
            </span>
            <span className="block">that scales far beyond the screen.</span>
          </p>
          <span className="pointer-events-none absolute bottom-0 right-0 translate-x-6 translate-y-6 text-7xl font-semibold text-accent-strong/70 md:translate-x-10 md:translate-y-8 md:text-8xl">
            ”
          </span>
          <div className="mx-auto mt-6 h-px w-16 bg-accent-strong/70" />
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted">Breno Lopes Mafra</p>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p className="text-sm uppercase tracking-[0.28em] text-accent-strong">Career goal</p>
          <p className="indent-12 text-text/90">
            I communicate with clarity and intent, translating complex problems into shared
            understanding and actionable plans. My motivation comes from building software that
            makes people’s work simpler and more confident, and I hold myself accountable to ship
            experiences that are thoughtful, reliable, and aligned with real user needs. My role is
            to bring structure, critical thinking, and calm execution to every stage of delivery;
            past projects taught me to value feedback loops and disciplined iteration, and my
            ambition is to grow into a leadership role where I can mentor teams and drive product
            outcomes with lasting impact.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-soft transition hover:-translate-y-1"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-accent-strong/80" />
            <p className="text-sm uppercase tracking-[0.28em] text-accent-strong">Resume</p>
            <h3 className="mt-2 font-display text-2xl text-text">View my Resume:</h3>
            <p className="mt-3 text-sm text-muted">
              Download or view the full resume whit my experience and skills.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/Breno_Software_Developer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
              >
                View PDF
              </a>
              <a
                href="/Breno_Software_Developer_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent"
              >
                Download
              </a>
            </div>
          </article>
          <article
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-soft transition hover:-translate-y-1"
            style={{ transitionDelay: '220ms' }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-accent-strong/80" />
            <p className="text-sm uppercase tracking-[0.28em] text-accent-strong">Cover Letter</p>
            <h3 className="mt-2 font-display text-2xl text-text">Know more about me:</h3>
            <p className="mt-3 text-sm text-muted">
              Download or view the full cover letter whit information about me.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/Breno_Cover_Letter.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-button-text transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,40,30,0.25)]"
              >
                View PDF
              </a>
              <a
                href="/Breno_Cover_Letter.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent"
              >
                Download
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
