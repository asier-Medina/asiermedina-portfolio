import "./styles/variables.css";
import "./styles/global.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';
  const showScrollButton = pathname !== '/';


  return (
    <div className="app">

      {/* Header y Footer solo en páginas interiores */}
      {!isLanding && <Header />}

      <main className={isLanding ? '' : 'contenido'}>
        <Routes>
          <Route path="/"        element={<LandingPage />} />
          <Route path="/home"    element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*"        element={<h1>Página no encontrada</h1>} />
        </Routes>
      </main>

      {!isLanding && <Footer />}
      {showScrollButton && <ScrollToTopButton />}

    </div>
  );
}

export default App;