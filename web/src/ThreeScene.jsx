import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeScene = () => {
  const containerRef = useRef(null);

  // Asegúrate de que el componente se está montando correctamente
  useEffect(() => {
    console.log('Componente ThreeScene montado');
    if (!containerRef.current) {
      console.error('containerRef no está asignado correctamente al div');
      return;
    } else {
      console.log('containerRef correctamente asignado:', containerRef.current);
    }

    // Configuración de Three.js
    const scene = new THREE.Scene();
    console.log('Escena Three.js creada');

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    console.log('Cámara Three.js configurada:', camera);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Añadir el renderizador al contenedor
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
      console.log('Renderizador añadido al div');
    }

    // Añadir luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    console.log('Luz ambiental añadida');

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 5);
    scene.add(directionalLight);
    console.log('Luz direccional añadida');

    // Crear partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    console.log('Partículas creadas');

    // Crear esfera alámbrica
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const wireframe = new THREE.WireframeGeometry(sphereGeometry);
    const line = new THREE.LineSegments(wireframe);
    line.material = new THREE.LineBasicMaterial({
      color: 0x444444,
    });
    scene.add(line);
    console.log('Esfera alámbrica creada');

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      line.rotation.y += 0.002;
      line.rotation.x += 0.001;
      renderer.render(scene, camera);
    };

    // Manejo de cambios en el tamaño de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup en el desmontaje del componente
    return () => {
      console.log('Limpiando recursos');
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Verificar la referencia al div
  console.log('Componente renderizado. containerRef:', containerRef);

  return <div ref={containerRef} className="w-full h-full" />;
};
