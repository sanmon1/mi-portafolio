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
            link="https://github.com/sanmon1/CRUD.git"
          />
          <ProjectCard
            titulo="Buscador interactivo de personajes de Rick & Morty"
            descripcion="El proyecto permite explorar el catálogo completo de personajes, detallando su especie, 
             su estado de vida actual y el episodio en el que hicieron su primera aparición. Todo esto desarrollado con la api oficial de Rick & Morty."
            link="https://github.com/sanmon1/Creacion-de-api.git"
          />
        </div>
      </section>

      <section id="sobre-mi">
        <div className="projects-section__header">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador full stack. enfocado en seguir aprendiendo y creciendo en el mundo del desarrollo web. 
            Me gusta trabajar en proyectos que me desafíen y me permitan mejorar mis habilidades tanto personales como laborales.
          </p>
        
        </div>
      </section>

      { <section id="contacto">
        <div className="projects-section__header">
          <h2>Contacto</h2>
          <p>¿Querés trabajar conmigo? Escribime y charlamos.</p>
          <p>📧Gmail: santiagomoyanoministro@gmail.com</p>
          <p><span className="icon icon-whatsapp"></span>Numero: 3517035856</p>
          <span className="icon icon-linkedin"></span>
            <a classname="btn-outline"
              href="https://www.linkedin.com/in/santiago-moyano-ministro-954575420/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Linkedin
            </a>
          
        </div>
      </section> }

     
      <footer className="footer">
        © {new Date().getFullYear()} Santi.dev — Hecho con React
         
      </footer>
    </div>
  );
}

export default App;