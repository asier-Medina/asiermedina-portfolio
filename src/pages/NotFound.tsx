import { Link } from "react-router-dom";

import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound-content">

        <h1>404</h1>

        <h2>Página no encontrada</h2>

        <p>
          La página que buscas no existe o fue movida.
        </p>

        <Link to="/" className="notfound-btn">
          Volver al inicio
        </Link>

      </div>
    </main>
  );
}