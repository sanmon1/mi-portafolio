import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <span className="hero__badge">Disponible para nuevos proyectos</span>

      <h1>¡Hola! Soy Santi 👋</h1>

      <p className="hero__subtitle">
        Desarrollador Web en formación, apasionado por React y por escribir
        código limpio. Acá vas a encontrar algunos de mis proyectos.
      </p>

      <div className="hero__cta">
        <a href="#proyectos" className="hero__button hero__button--primary">
          Ver mis proyectos
        </a>
        <a href="#contacto" className="hero__button hero__button--secondary">
          Contactarme
        </a>
      </div>
    </section>
  );
};