import { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";




function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cabecera">
      <div className="cabecera-contenedor">

       <Link
          to="/"
          className="logo"
        >
          <img
            className="imgLogo"
            src={logo}
            alt="Landing"
          />
        </Link>

        <nav
          id="main-navigation"
          className={`nav-central ${
            open ? "activo" : ""
          }`}
        >
          <Link to="/dashboard">Conoceme</Link>

          <Link to="/destinations">
           Proyectos
          </Link>

          <Link to="/contact">
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
  );
}

export default Header;
