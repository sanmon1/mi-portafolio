import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { ProjectCard } from "./Components/ProjectCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <section id="proyectos" className="projects-section">
        <div className="projects-section__header">
          <h2>Proyectos</h2>
          <p>Algunas cosas que fui construyendo mientras aprendo.</p>
        </div>

        <div className="projects-grid">
          <ProjectCard
            titulo="Mi Primera API"
            descripcion="Un backend desarrollado para gestionar datos de manera eficiente."
          />
          <ProjectCard
            titulo="App de Clima"
            descripcion="Consultando datos en tiempo real con Fetch."
          />
        </div>
      </section>

      <section id="sobre-mi">
        <div className="projects-section__header">
          <h2>Sobre mí</h2>
          <p>
            Estoy formándome como desarrollador web, enfocado en React y en
            escribir código prolijo y fácil de mantener.
          </p>
        </div>
      </section>

      <section id="contacto">
        <div className="projects-section__header">
          <h2>Contacto</h2>
          <p>¿Querés trabajar conmigo? Escribime y charlamos.</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Santi.dev — Hecho con React
      </footer>
    </div>
  );
}

export default App;