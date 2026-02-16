function Contact() {
  return (
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
  )
}

export default Contact
