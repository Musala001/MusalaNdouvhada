import { useState } from "react";
import "./App.css";

const projects = [
  { name: "ChatApp", url: "https://musala.onrender.com" },
  { name: "React-Dog-API", url: "https://musalareactdogapi.onrender.com" },
  { name: "Random-Quotes-API", url: "https://musalsrandomquotesapi.onrender.com" },
  { name: "Dictionary App", url: "https://musalsdictionaryapp.onrender.com" },
  { name: "Simple Chat", url: "https://musalssimplechat.onrender.com" },
  { name: "Chat 4.0", url: "https://musalschat4-0.onrender.com" },
  { name: "Shift Ciphers", url: "https://musalashiftciphers.onrender.com" },
  { name: "Wanga Study Resources", url: "https://wanga-study-resources.onrender.com" },
  { name: "Seeing Beyond AI", url: "https://seeing-beyond-ai.vercel.app/" },
  { name: "University Research Collaboration", url: "https://unirescollab-a0bgfbhzcfg6angs.southafricanorth-01.azurewebsites.net/" },
  { name: "Medical Control", url: "https://musala001.github.io/Medical-Control/" },
];

const techStack = [
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "📜" },
  { name: "C", icon: "🔧" },
  { name: "React JS", icon: "⚛️" },
  { name: "Node JS", icon: "🟢" },
  { name: "CSS", icon: "🎨" },
  { name: "HTML", icon: "🌐" },
  { name: "Android Studio", icon: "🤖" },
  { name: "Tailwind CSS", icon: "💨" }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="nav-logo">MN</div>
            <span>Musala Ndouvhada</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Musala Ndouvhada
            </h1>
            
            <div className="hero-subtitle">
              <p>Honours in Computer Science</p>
              <p>Founder & Director of Musala Group Software Solutions</p>
            </div>

            <div className="hero-description">
              Building scalable solutions and innovative software for modern challenges
            </div>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Developer & Entrepreneur</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I am currently pursuing my Honours in Computer Science at the University of the Witwatersrand, 
                having completed my BSc in Computer Science and Mathematics. My role model is Alan Turing, 
                and I'm passionate about web development, problem-solving, app development (Android & iOS), 
                robotics, cybersecurity, and AI.
              </p>
              <p>
                As a software developer and entrepreneur, I create innovative digital solutions for small businesses, 
                schools, and communities. My mission is to leverage technology to improve education, accessibility, 
                and business efficiency.
              </p>

              <div className="tech-stack">
                <h3>Technical Skills</h3>
                <div className="tech-grid">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="tech-item">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section bg-light">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Selected Work & Deployed Applications</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.url} className="project-card">
                <div className="card-content">
                  <h3>{project.name}</h3>
                  <p className="project-description">
                    Innovative solution showcasing software engineering and design principles.
                  </p>
                  <div className="card-footer">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic Journey</p>
          </div>
          
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-date">2024 - Present</div>
              <div className="education-content">
                <h3>Honours in Computer Science</h3>
                <p className="education-institution">University of the Witwatersrand</p>
                <div className="education-tags">
                  <span className="tag">Advanced Algorithms</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Research Methods</span>
                </div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">2020 - 2023</div>
              <div className="education-content">
                <h3>BSc Computer Science & Mathematics</h3>
                <p className="education-institution">University of the Witwatersrand</p>
                <p className="education-status">Graduated</p>
                <div className="education-tags">
                  <span className="tag">Software Engineering</span>
                  <span className="tag">Artificial Intelligence</span>
                  <span className="tag">Data Structures</span>
                  <span className="tag">Calculus</span>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-date">2010 - 2022</div>
              <div className="education-content">
                <h3>Madaheni Combined School</h3>
                <p className="education-institution">Grade R to Grade 12</p>
                <div className="education-tags">
                  <span className="tag">Mathematics</span>
                  <span className="tag">Physical Science</span>
                  <span className="tag">Computer Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section bg-light">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Let's Connect</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:solomonndouvhada@gmail.com" className="contact-link">
                solomonndouvhada@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/musala-ndouvhada-78bb892b9/" target="_blank" rel="noopener noreferrer" className="contact-link">
                Connect Professionally
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⚡</div>
              <h3>GitHub</h3>
              <a href="https://github.com/Musala001/" target="_blank" rel="noopener noreferrer" className="contact-link">
                View Code & Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">MN</div>
            <span>Musala Ndouvhada</span>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} Musala Ndouvhada. All rights reserved.
          </div>
          <div className="footer-status">
            <div className="status-dot"></div>
            <span>Available for opportunities</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
