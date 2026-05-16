import "./styles/variables.css";
import "./styles/global.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  return (
    <div className="app">

      {/* Vuelve al inicio en cada cambio de ruta — sin esto
          React Router mantiene la posición de scroll anterior */}
      <ScrollToTop />

      {!isLanding && <Header />}

      <main className={isLanding ? '' : 'contenido'}>
        <Routes>
          <Route path="/"         element={<LandingPage />} />
          <Route path="/home"     element={<Home />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isLanding && <Footer />}
      {!isLanding && <ScrollToTopButton />}

    </div>
  );
}

export default App;