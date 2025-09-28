import { useState, useEffect, useRef } from "react";
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

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fullText = "MUSALA NDOUVHADA";

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      {/* Advanced Particle Background */}
      <canvas ref={canvasRef} className="particle-canvas" />
      
      {/* Holographic Grid */}
      <div className="holographic-grid" />
      
      {/* Floating Geometry */}
      <div className="floating-geometry">
        <div className="geo-1"></div>
        <div className="geo-2"></div>
        <div className="geo-3"></div>
      </div>

      {/* Navigation */}
      <nav className="holographic-nav">
        <div className="nav-brand">
          <div className="nav-logo">MG</div>
          <span>MUSALA_GROUP</span>
        </div>
        <div className="nav-links">
          {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              <span className="link-text">{section.toUpperCase()}</span>
              <span className="link-glow"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-container">
              <h1 className="holographic-title">
                {displayText}
                <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
              </h1>
              <div className="title-reflection">{displayText}</div>
            </div>
            
            <div className="hero-subtitle">
              <div className="subtitle-line">
                <span className="cyber-text">FINAL-YEAR COMPUTER SCIENCE & MATHEMATICS</span>
              </div>
              <div className="subtitle-line">
                <span className="neon-accent">FOUNDER & CEO</span>
                <span className="cyber-text"> OF </span>
                <span className="neon-accent">MUSALA GROUP</span>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">11</div>
                <div className="stat-label">ACTIVE PROJECTS</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">POSSIBILITIES</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">PASSION</div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="holographic-btn">
                <span>EXPLORE PORTFOLIO</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cyber-btn">
                <span>INITIATE CONTACT</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">ABOUT_ME</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="holographic-card">
            <div className="card-content">
              <div className="content-grid">
                <div className="text-content">
                  <p className="futuristic-text">
                    I am a final-year Computer Science and Mathematics student at the University of the Witwatersrand. 
                    My role model is Alan Turing, and I'm passionate about web development, problem-solving, 
                    app development (Android & iOS), robotics, cybersecurity, and AI.
                  </p>
                  <p className="futuristic-text">
                    Born and raised in Makhitha village, Limpopo Province, I attended Madaheni Combined School 
                    from grade R (2010) to grade 12 (2022). Currently, I'm pursuing my passion in mathematics 
                    and technology at Wits.
                  </p>
                  <p className="futuristic-text">
                    As the founder and CEO of <span className="neon-accent">Musala Group</span>, I lead a software 
                    company dedicated to creating innovative digital solutions for small businesses, schools, and communities. 
                    Our mission is to leverage technology to improve education, accessibility, and business efficiency.
                  </p>
                </div>
                <div className="visual-content">
                  <div className="hologram-display">
                    <div className="hologram-content">
                      <div className="data-point">
                        <span className="data-label">TECH STACK</span>
                        <div className="data-bar">
                          <div className="data-fill" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="data-point">
                        <span className="data-label">AI/ML</span>
                        <div className="data-bar">
                          <div className="data-fill" style={{width: '78%'}}></div>
                        </div>
                      </div>
                      <div className="data-point">
                        <span className="data-label">CYBERSECURITY</span>
                        <div className="data-bar">
                          <div className="data-fill" style={{width: '70%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">PROJECTS</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.url} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-header">
                  <h3>{project.name}</h3>
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>ONLINE</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="project-description">
                    Innovative solution showcasing cutting-edge technology and user-centric design.
                  </div>
                </div>
                <div className="card-footer">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>ACCESS SYSTEM</span>
                    <div className="link-arrow">→</div>
                  </a>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">EDUCATION</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-glow"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2022 - PRESENT</div>
                <h3>UNIVERSITY OF THE WITWATERSRAND</h3>
                <p>BSc Computer Science & Mathematics</p>
                <div className="timeline-tech">
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">CYBERSECURITY</span>
                  <span className="tech-tag">ADVANCED MATHEMATICS</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-glow"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2010 - 2022</div>
                <h3>MADAHENI COMBINED SCHOOL</h3>
                <p>Grade R to Grade 12</p>
                <div className="timeline-tech">
                  <span className="tech-tag">FOUNDATION EDUCATION</span>
                  <span className="tech-tag">STEM FOCUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">CONTACT</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>EMAIL</h3>
              <a href="solomonndouvhada@gmail.com">solomonndouvhada@gmail.com</a>
              <div className="contact-glow"></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LINKEDIN</h3>
              <a href="https://linkedin.com/in/musala-ndouvhada-78bb892b9/" target="_blank" rel="noopener noreferrer">
                Connect Professionally
              </a>
              <div className="contact-glow"></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">⚡</div>
              <h3>GITHUB</h3>
              <a href="https://github.com/Musala001/" target="_blank" rel="noopener noreferrer">
                Explore Code
              </a>
              <div className="contact-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="holographic-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">MG</div>
              <span>MUSALA GROUP</span>
            </div>
            <div className="footer-text">
              © {new Date().getFullYear()} MUSALA NDOUVHADA. ALL SYSTEMS OPERATIONAL.
            </div>
          </div>
          <div className="footer-status">
            <div className="status-indicator">
              <div className="pulse-dot"></div>
              <span>CONNECTION ACTIVE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}