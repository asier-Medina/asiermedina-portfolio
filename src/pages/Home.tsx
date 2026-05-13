import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenido a mi portafolio. Aquí encontrarás información sobre mí, mis proyectos y cómo contactarme.</p>
      <Link to="/contact">Contáctame</Link>
    </div>
  )
}