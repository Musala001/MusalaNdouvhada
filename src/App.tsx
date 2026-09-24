import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    name: "Smart Cable Guard",
    url: "https://smart-cable-guard.vercel.app/",
    description:
      "Cameras on trains watch the overhead cables, and computer vision flags any damage before it causes delays. Every problem it finds gets a GPS location and is checked by a person.",
  },
  {
    name: "Seeing Beyond AI",
    url: "https://seeing-beyond-ai.vercel.app/",
    description: "A website that puts useful AI tools in one place, so anyone can use them without knowing how they work.",
  },
  {
    name: "ShiftCiphers",
    url: "https://musalashiftciphers.onrender.com",
    description: "A small app for encrypting and decrypting messages with a shift cipher.",
  },
];

const education = [
  {
    date: "2026 — Present",
    title: "Honours in Computer Science",
    place: "University of the Witwatersrand",
    tags: [
      "Adaptive Computation and Machine Learning",
      "Research in Machine Learning",
      "Probabilistic Graphical Models",
      "Robotics",
      "Artificial Intelligence",
      "Reinforcement Learning",
      "Applications of Algorithms",
      "Discrete Optimization",
    ],
  },
  {
    date: "2023 — 2025",
    title: "BSc Computer Science & Mathematics",
    place: "University of the Witwatersrand",
    status: "Graduated",
    tags: ["Double major in Computer Science III and Mathematics III"],
  },
  {
    date: "2010 — 2022",
    title: "Madaheni Combined School",
    place: "Grade R to Grade 12",
    tags: ["Mathematics", "Physical Science", "Computer Applications"],
  },
];

const contacts = [
  { label: "Email", value: "solomonndouvhada@gmail.com", href: "mailto:solomonndouvhada@gmail.com" },
  { label: "LinkedIn", value: "musala-ndouvhada", href: "https://linkedin.com/in/musala-ndouvhada-78bb892b9/" },
  { label: "GitHub", value: "Musala001", href: "https://github.com/Musala001/" },
];

const sections = ["about", "projects", "education", "contact"];

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

// Fade/slide elements with [data-reveal] into view once as they enter the viewport.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Track which section is currently in view for nav highlighting.
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...sections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function SectionHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="section-header" data-reveal>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export default function App() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""} ${menuOpen ? "nav--open" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">MN</span>
            <span className="brand-name">Musala Ndouvhada</span>
          </a>
          <div className="nav-links">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className={active === s ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary btn--sm nav-cta" onClick={() => setMenuOpen(false)}>
              Get in touch
            </a>
          </div>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <span className="pill" data-reveal>
              <span className="pill-dot" />
              Available for new projects
            </span>
            <h1 className="hero-title" data-reveal>
              Software <span className="accent">engineer.</span>
            </h1>
            <p className="hero-lead" data-reveal>
              I'm Musala Ndouvhada. I have a BSc in Computer Science and Mathematics from Wits, and I'm now
              doing my Honours in Computer Science there.
            </p>
            <div className="hero-actions" data-reveal>
              <a
                href="https://github.com/Musala001/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                See my work on GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="btn btn--ghost">
                Contact me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about">
            <SectionHeader title="About me" />
            <div className="about-copy" data-reveal>
              <p>
                I love Java. It's the first thing I reach for when I want to build something
                properly, though I'll happily use whatever else a project needs.
              </p>
              <p>
                More than any language, I love solving problems. Give me something that doesn't
                work yet and I'll keep at it until it does. That's what got me into computer
                science in the first place.
              </p>
              <p>
                Away from the keyboard, I follow politics closely and I love a good story, whether
                I'm reading one or telling one. And I spend a lot of time on AI and where computer
                science is going next.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section section--tinted">
          <div className="container">
            <SectionHeader title="Projects" intro="A few things I've built and put online." />
            <div className="projects-grid">
              {projects.map((project, i) => (
                <a
                  key={project.url}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="card-top">
                    <h3 className="card-title">{project.name}</h3>
                    <span className="card-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p className="card-desc">{project.description}</p>
                  <span className="card-host">{hostOf(project.url)}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHeader title="Education" />
            <ol className="edu-list">
              {education.map((item) => (
                <li key={item.title} className="edu-item" data-reveal>
                  <span className="edu-date">{item.date}</span>
                  <div>
                    <h3 className="edu-title">
                      {item.title}
                      {item.status && <span className="badge">{item.status}</span>}
                    </h3>
                    <p className="edu-place">{item.place}</p>
                    <p className="edu-tags">{item.tags.join(", ")}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section section--tinted">
          <div className="container">
            <SectionHeader
              title="Get in touch"
              intro="Want to work together, or just talk about something on this page? Send me an email."
            />
            <div className="contact-list">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-row"
                  data-reveal
                >
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                  <span className="contact-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Musala Ndouvhada</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
