import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="navbar">
      <span className="navbar__brand">
        Santi<span>.dev</span>
      </span>

      <ul className={`navbar__links ${isOpen ? "is-open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};