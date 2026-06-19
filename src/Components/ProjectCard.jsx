// src/components/ProjectCard.jsx
export const ProjectCard = ({ titulo, descripcion }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', margin: '10px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button>Ver en GitHub</button>
    </div>
  );
};