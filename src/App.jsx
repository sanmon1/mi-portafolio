import { Navbar } from "./Components/Navbar"
import { Hero } from "./Components/Hero"
import { ProjectCard } from "./Components/ProjectCard"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Aquí puedes poner los proyectos que quieras */}
        <ProjectCard 
          titulo="Mi Primera API" 
          descripcion="Un backend desarrollado para gestionar datos de manera eficiente." 
        />
        <ProjectCard 
          titulo="App de Clima" 
          descripcion="Consultando datos en tiempo real con Fetch." 
        />
      </section>
    </div>
  );
}

export default App;