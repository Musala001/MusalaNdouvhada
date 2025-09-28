import React from "react";

export default function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Musala Ndouvhada</h1>
        <p>Final-year Computer Science & Mathematics Student at Wits</p>
      </header>

      {/* About */}
      <section>
        <h2>About Me</h2>
        <p>
          I am a final-year Computer Science and Mathematics student at the
          University of the Witwatersrand, passionate about technology,
          AI, and building impactful digital solutions for communities.
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://seeing-beyond-ai.vercel.app/">Seeing Beyond AI</a>{" "}
            – Accessibility-focused app for blind users.
          </li>
          <li>
            <a href="https://github.com/your-github">GitHub Portfolio</a> – More
            open-source projects.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        <p>
          <strong>University of the Witwatersrand</strong> – BSc in Computer
          Science & Mathematics (Final year)
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2>Get in Touch</h2>
        <p>
          Email:{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <p>
          <a href="https://linkedin.com/in/your-linkedin">LinkedIn</a> |{" "}
          <a href="https://github.com/your-github">GitHub</a>
        </p>
      </section>

      {/* Footer */}
      <footer>© {new Date().getFullYear()} Musala Ndouvhada</footer>
    </div>
  );
}
