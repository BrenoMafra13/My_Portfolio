import { motion } from 'framer-motion'

type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl: string
  skills: string[]
  logoType?: 'harvard' | 'certificate' | 'java'
  expires?: string
}

type Award = {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  documents: { label: string; url: string }[]
}

function CertificatesAndAwards() {
  const certificates: Certificate[] = [
    {
      id: 'cs50',
      title: "CS50's Introduction to Computer Science",
      issuer: 'Harvard University',
      date: 'Mar 2025',
      credentialUrl: 'https://courses.edx.org/certificates/6a03c0bb00af44788791420c0661d61d',
      skills: ['C', 'Python', 'SQL', 'JavaScript', 'Data Structures', 'Algorithms'],
      logoType: 'harvard',
    },
    {
      id: 'java-fullstack',
      title: 'Java Web Full-Stack Training',
      issuer: 'JDev Trainings',
      date: 'Mar 2023',
      credentialUrl: 'https://drive.google.com/file/d/169hBUrYoPy7Ydh8fB5681DOHa5G37l36/view?usp=share_link',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Maven'],
      logoType: 'java',
    },
  ]

  const awards: Award[] = [
    {
      id: 'deans-list',
      title: "Dean's Honour List",
      issuer: 'George Brown College',
      date: 'All course semesters',
      description: "This important achievement is only awarded to those who have earned academic distinction by achieving a Term Grade Point Average of 3.5 or higher. My addition to the Dean's Honour List reflects my hard work, dedication, and motivation to succeed at George Brown College.",
      documents: [
        { label: 'Winter 2024', url: '/winter2024.pdf' },
        { label: 'Fall 2024', url: '/fall2024.pdf' },
        { label: 'Winter 2025', url: '/winter2025.pdf' },
      ],
    },
  ]

  const renderLogo = (type?: 'harvard' | 'certificate' | 'java') => {
    if (type === 'harvard') {
      return (
        <img 
          src="/harvard.svg" 
          alt="Harvard" 
          className="w-10 h-10 object-contain"
        />
      )
    }
    if (type === 'java') {
      return (
        <img 
          src="/java.png" 
          alt="Java" 
          className="w-10 h-10 object-contain"
        />
      )
    }
    // Default certificate icon
    return (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  }

  return (
    <section 
      id="certificates" 
      className="reveal relative h-auto py-2 scroll-mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial_gradient(ellipse_at_50%_0%,_rgba(251,191,36,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.28em] text-yellow-500 font-mono">{"<Certificates />"}</p>
          <h2 className="font-display text-2xl md:text-2xl">Certifications and achievements:</h2>
        </div>

        {/* Certificates Section */}
        <div className="mt-12">
          <h3 className="text-lg font-mono text-muted mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            Certificates
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-500/30 transition-colors duration-300">
                  {/* Certificate icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      {renderLogo(cert.logoType)}
                    </div>
                    <span className="text-sm font-mono text-yellow-500/70">{cert.date}</span>
                  </div>

                  <h4 className="font-display text-xl text-text mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-sm font-mono text-muted mb-4">{cert.issuer}</p>
                  
                  {cert.expires && (
                    <p className="text-xs font-mono text-muted/60 mb-4">
                      Expires: {cert.expires}
                    </p>
                  )}

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 text-yellow-500 text-sm font-mono hover:bg-yellow-500/20 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Show Credential
                  </a>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-500/10 to-transparent transform translate-x-1/2 -translate-y-1/2 rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16">
          <h3 className="text-lg font-mono text-muted mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-strong" />
            Awards
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-accent-strong/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Award icon - certificate/document icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-accent-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-display text-2xl text-text group-hover:text-accent-strong transition-colors duration-300">
                          {award.title}
                        </h4>
                      </div>
                      
                      <p className="text-sm font-mono text-accent-strong mb-2">{award.issuer}</p>
                      <p className="text-sm font-mono text-muted/60 mb-4">{award.date}</p>
                      
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {award.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {award.documents.map((doc, docIndex) => (
                          <a
                            key={docIndex}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-accent-strong text-sm font-mono hover:bg-white/10 border border-white/10 transition-colors duration-300"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            {doc.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-strong/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificatesAndAwards

