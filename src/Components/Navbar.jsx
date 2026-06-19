export const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#222', color: 'white' }}>
      <h2>Santii.dev</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <span>Proyectos</span>
        <span>Sobre mí</span>
        <span>Contacto</span>
      </div>
    </nav>
  );
};