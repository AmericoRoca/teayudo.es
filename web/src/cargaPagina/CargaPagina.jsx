import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "../cargaPagina/Carga.css";

const CargaPagina = ({ isReady, onComplete }) => {
  const svgRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Bloquea scroll al montar el componente
  useEffect(() => {
    // Desactivar scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Reactivar scroll cuando el componente se desmonte (por si acaso)
      document.body.style.overflow = "";
    };
  }, []);

  // Función para animar el SVG
  const runSvgAnimation = () => {
    const paths = svgRef.current.querySelectorAll("path, polygon");
    let tl = gsap.timeline({
      repeat: -1, // Repite indefinidamente hasta que la página esté lista
    });

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });

    paths.forEach((path) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    });

    tl.to(paths, { fill: "#ffffff", duration: 1 }, "+=0.5");
    tl.to(paths, { opacity: 1 }, "+=0.5");

    tl.to("#inicio-carga", {opacity:0,duration: 0.3, delay: 0.8});
  };

  // Efecto al montar el componente
  useEffect(() => {
    runSvgAnimation(); // Inicia la animación del SVG
  }, []);

  // Cuando `isReady` es `true`, el telón baja y desaparece
  useEffect(() => {
    if (isReady) {
      gsap.to(".carga-container", {
        y: "100vh",
        duration: 2.3,
        ease: "power2.out",
        onComplete: () => {
          setIsAnimating(false);
          onComplete(); // Notifica que la carga ha terminado
          // Reactivar scroll cuando termina la animación
          document.body.style.overflow = "";
        },
      });
    }
  }, [isReady, onComplete]);

  if (!isAnimating) return null; // Elimina el componente cuando termina la animación


  return (
    <div className="carga-container">
      <div id="inicio-carga">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 600 300"
          className="carga-svg"
        >
          <g id="Layer_3">
            <path
              d="M191.61,62.79l-125.22,186.9h248.98L191.61,62.79Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
            />
          </g>
          <g id="Layer_4">
            <polygon
              points="315.37 75.21 315.37 249.69 490.2 251.33 460.18 200.74 467.52 196.12 471.93 191.93 476.97 186.26 481.38 180.17 483.9 175.34 486.42 169.46 488.1 163.27 490.2 158.13 490.2 132.94 486.63 123.7 482.64 114.88 477.6 106.7 472.98 100.61 468.36 96.2 463.75 92.42 457.45 88.22 450.31 83.81 441.91 79.83 434.36 76.89 428.48 75.21 315.37 75.21"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
            />
          </g>
          <g id="Layer_2">
            <polygon
              points="508.61 206.05 508.61 249.56 557.44 249.56 557.44 206.64 508.61 206.05"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CargaPagina;
