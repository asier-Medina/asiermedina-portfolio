import { useEffect, useState } from "react";

import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

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

            <NavLink
              to="/home"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "nav-link activo"
                  : "nav-link"
              }
            >
              Conóceme
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "nav-link activo"
                  : "nav-link"
              }
            >
              Proyectos
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "nav-link activo"
                  : "nav-link"
              }
            >
              Contacto
            </NavLink>

          </nav>

          <button
            className="boton-hamburguesa"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
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