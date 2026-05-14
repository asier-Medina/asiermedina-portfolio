import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  // Cierra automáticamente al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Bloquea scroll cuando menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="cabecera">
        <div className="cabecera-contenedor">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="logo"
          >
            <img
              className="imgLogo"
              src={logo}
              alt="Volver al inicio"
            />
          </Link>

          <nav
            id="main-navigation"
            className={`nav-central ${open ? "activo" : ""}`}
          >
            <Link
              to="/home"
              onClick={() => setOpen(false)}
            >
              Conóceme
            </Link>
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
            >
              Proyectos
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </nav>

          <button
            className="boton-hamburguesa"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            ☰
          </button>

        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Header;