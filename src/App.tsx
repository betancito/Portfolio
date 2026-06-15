// Portfolio starter — edit the data below and the sections to make it yours.
const PROFILE = {
  name: "Jeronimo Betancur Duque",
  role: "Software Developer",
  tagline:
    "I build clean, reliable web applications. Welcome to my portfolio — a work in progress.",
  email: "jbetancur@idtsas.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
}

const SKILLS = [
  "TypeScript",
  "React",
  "Node.js",
  "Vite",
  "Tailwind CSS",
  "Git",
]

const PROJECTS = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project. Replace this placeholder with real work and links.",
    tags: ["Node.js", "API"],
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "Highlight something you're proud of. A few sentences is plenty.",
    tags: ["UI", "Tailwind"],
    href: "#",
  },
]

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold text-neutral-100">
            {PROFILE.name.split(" ")[0]}
            <span className="text-indigo-400">.</span>
          </a>
          <ul className="flex gap-6 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-neutral-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section id="top" className="flex min-h-[70vh] flex-col justify-center">
          <p className="mb-3 text-sm font-medium text-indigo-400">
            Hi, my name is
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
            {PROFILE.name}
          </h1>
          <h2 className="mt-2 text-2xl font-semibold text-neutral-400 sm:text-4xl">
            {PROFILE.role}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {PROFILE.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
            >
              View my work
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-md border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-500"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-neutral-800 py-20">
          <h2 className="text-2xl font-bold text-neutral-100">About</h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Write a couple of paragraphs about who you are, what you enjoy
            building, and what you're looking for. This is placeholder text —
            replace it with your own story.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-neutral-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-neutral-800 py-20">
          <h2 className="text-2xl font-bold text-neutral-100">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group flex flex-col rounded-lg border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-indigo-500/60"
              >
                <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-indigo-400">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-neutral-800 py-20 text-center"
        >
          <h2 className="text-2xl font-bold text-neutral-100">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed">
            I'm always open to interesting projects and conversations. Feel free
            to reach out.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-6 inline-block rounded-md bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            Say hello
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-500 sm:flex-row">
          <p>© 2026 {PROFILE.name}</p>
          <ul className="flex gap-6">
            {PROFILE.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-neutral-200"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
