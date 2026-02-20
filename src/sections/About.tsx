import { useState } from 'react';

function About() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

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
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="relative group">
            <img
              src="/cardResume.png"
              alt="Resume Card"
              className="rounded-3xl shadow-lg w-[110%] transition-transform transform group-hover:scale-105 group-hover:shadow-xl"
            />
            <div className="absolute inset-x-0 bottom-8 flex justify-end gap-4 pr-8">
              <button
                onClick={() => setIsSheetOpen(true)}
                className="px-4 py-1.5 bg-accent-strong text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                View PDF
              </button>
              <a
                href="/Breno_Software_Developer_Resume.pdf"
                download
                className="px-4 py-1.5 bg-white text-accent-strong font-semibold border border-accent-strong rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4unG-TNHpLI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl shadow-lg w-[100%] h-full transition-transform transform group-hover:scale-105 group-hover:shadow-xl"
            ></iframe>
          </div>
        </div>

        {isSheetOpen && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
            onClick={closeSheet}
          >
            <div
              className="relative bg-white p-6 rounded-t-lg shadow-lg w-full max-w-4xl h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sheet
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeSheet}
              >
                &times;
              </button>
              <iframe
                src="/Breno_Software_Developer_Resume.pdf"
                className="w-full h-full"
                title="Resume"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
