import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDMesh = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    animate();

    const onDocumentMouseMove = (event) => {
      event.preventDefault();
      cube.rotation.y = (event.clientX - window.innerWidth / 2) / 500;
      cube.rotation.x = (event.clientY - window.innerHeight / 2) / 500;
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove, false);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDMesh;