import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { projectRoutes } from "../src/Routes/Routes";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import CargaPagina from "./cargaPagina/CargaPagina";

import { StaticWebsites } from "./Components/PagesProjects/StaticWebsites";
import { TresDWeb } from "./Components/PagesProjects/TresDWeb";
import { ECommerce } from "./Components/PagesProjects/ECommerce";
import { CustomWebApp } from "./Components/PagesProjects/CustomWebApp";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [showCarga, setShowCarga] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 7000); // puedes ajustar este tiempo o usar una lógica real de carga

    return () => clearTimeout(timer);
  }, []);

  const handleCargaComplete = () => {
    setShowCarga(false); // oculta la animación de carga cuando termina
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Página principal completa */}
          <Route
            path="/"
            element={
              <div className="relative bg-black text-white min-h-screen w-full">
                <Navbar />
                <main className="w-full">
                  <Hero />
                  <Skills />
                  <Projects />
                  <About />
                  <Contact />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/projects/static-websites"
            element={<StaticWebsites />}
          />
          <Route path="/projects/3d-web" element={<TresDWeb />} />
          <Route path="/projects/ecommerce" element={<ECommerce />} />
          <Route path="/projects/custom-web-app" element={<CustomWebApp />} />
        </Routes>

        {/* Animación de carga fuera de las rutas */}
        {showCarga && (
          <div className="fixed inset-0 z-50">
            <CargaPagina isReady={isReady} onComplete={handleCargaComplete} />
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
