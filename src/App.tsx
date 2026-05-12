import "./styles/style.css";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <div className="app">
      <Header />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App