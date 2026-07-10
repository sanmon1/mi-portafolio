import "./ProjectCard.css";

export const ProjectCard = ({ titulo, descripcion, link = "#" }) => {
  return (
    
    <div className="project-card">

      <div className="project-card__icon">💻</div>
      <h3>{titulo}</h3>

      <p>{descripcion}</p>
       <a className="project-card__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        Ver en GitHub →
      </a>
      
    </div>
  );
};