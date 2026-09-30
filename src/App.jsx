import { useState } from "react";

const skills = [
  "Swift", "SwiftUI", "UIKit", "iOS Architecture",
  "React Native", "React", "JavaScript", "Flutter",
  "Swift Concurrency", "REST APIs", "Git", "AI-assisted Development"
];

const experiences = [
  {
    period: "Current",
    role: "Senior iOS Developer",
    company: "Futurism Technologies",
    description:
      "Building and maintaining production mobile applications for a US client, with a focus on iOS development, clean UI implementation, code quality and client collaboration."
  },
  {
    period: "13+ years",
    role: "Mobile Application Development",
    company: "iOS • React Native • Flutter",
    description:
      "Hands-on experience across native iOS and cross-platform mobile development, including feature development, debugging, architecture, code reviews and technical collaboration."
  }
];

const projects = [
  {
    title: "RethinkBH+",
    tag: "Healthcare • iOS",
    description:
      "A behavioral health application used to assess and track behavioral data for children with special needs.",
    stack: ["Swift", "SwiftUI", "UIKit"],
    highlights: [
      "Developed product features and fixes",
      "Worked on SwiftUI and UIKit components",
      "Participated in PR and code reviews",
      "Collaborated directly with a US client"
    ]
  },
  {
    title: "Modern iOS Applications",
    tag: "Mobile Engineering",
    description:
      "Production-focused iOS work covering scalable UI, API integration, debugging, performance and maintainable architecture.",
    stack: ["Swift", "SwiftUI", "UIKit", "Concurrency"],
    highlights: [
      "Clean and reusable UI components",
      "Modern Swift concurrency patterns",
      "Debugging and performance troubleshooting",
      "Code quality and engineering best practices"
    ]
  },
  {
    title: "React Native Development",
    tag: "Cross-platform",
    description:
      "Expanding native mobile expertise into React and React Native to build reusable cross-platform experiences.",
    stack: ["React", "React Native", "JavaScript"],
    highlights: [
      "Component-based UI development",
      "State and form handling",
      "Navigation and reusable components",
      "Building a strong React foundation for React Native"
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">SA</span>
            <span>Suchi Abhiruta</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu} className="nav-cta">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">SENIOR MOBILE ENGINEER</p>
              <h1>
                Building thoughtful
                <span> mobile experiences.</span>
              </h1>
              <p className="hero-text">
                Senior iOS Developer with 13+ years of experience building
                production applications with Swift, SwiftUI and UIKit, with
                growing expertise in React and React Native.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">View my work</a>
                <a className="button secondary" href="#contact">Let's connect</a>
              </div>

              <div className="hero-meta">
                <span>Swift</span>
                <span>SwiftUI</span>
                <span>UIKit</span>
                <span>React Native</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-top">
                <span className="status-dot" />
                <span>Available for opportunities</span>
              </div>
              <div className="code-window">
                <div className="window-dots"><i /><i /><i /></div>
                <pre>{`let engineer = Suchi(
  experience: "13+ years",
  focus: [
    "iOS",
    "SwiftUI",
    "Mobile Architecture",
    "React Native"
  ]
)

engineer.build(
  quality: .high,
  userExperience: .first
)`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <p className="section-label">01 — ABOUT</p>
              <h2>Engineering with a product mindset.</h2>
            </div>
            <div className="section-copy">
              <p>
                I’m a senior mobile developer focused on creating reliable,
                maintainable and user-friendly applications. My core strength
                is native iOS development, and I also work across React and
                React Native.
              </p>
              <p>
                I enjoy turning product requirements into clean interfaces,
                solving tricky UI and performance problems, reviewing code and
                collaborating closely with teams and clients.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <p className="section-label">02 — EXPERIENCE</p>
            <h2>Experience</h2>

            <div className="timeline">
              {experiences.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.role}`}>
                  <div className="timeline-period">{item.period}</div>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="muted">{item.company}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <p className="section-label">03 — SKILLS</p>
            <div className="section-heading-row">
              <h2>Technical toolkit</h2>
              <p>Native depth, cross-platform breadth.</p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <p className="section-label">04 — SELECTED WORK</p>
            <h2>Projects</h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-number">0{projects.indexOf(project) + 1}</span>
                    <span className="project-tag">{project.tag}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-section">
          <div className="container resume-card">
            <div>
              <p className="section-label">05 — RESUME</p>
              <h2>Want to know more?</h2>
              <p>
                Add your latest PDF resume to the <code>public</code> folder
                as <code>Suchi_Abhiruta_Resume.pdf</code> and this button will
                download it.
              </p>
            </div>
            <a className="button primary" href="/Suchi_Abhiruta_Resume.pdf" download>
              Download Resume
            </a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-inner">
            <p className="section-label">06 — CONTACT</p>
            <h2>Let's build something useful.</h2>
            <p>
              Open to senior iOS and mobile engineering opportunities,
              especially roles involving Swift, SwiftUI and modern mobile
              development.
            </p>

            <div className="contact-links">
              <a href="https://github.com/ShuchiAbhiruta" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/suchi-abhiruta-83662157" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:shuchi20.abhi@gmail.com">Email ↗</a>
            </div>
            <p className="small-note">
              LinkedIn: suchi-abhiruta-83662157 • Email: shuchi20.abhi@gmail.com
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Suchi Abhiruta</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>
    </div>
  );
}

export default App;