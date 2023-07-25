import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 10);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    const onDocumentMouseMove = (event) => {
      sphere.rotation.x = event.clientY * 0.01;
      sphere.rotation.y = event.clientX * 0.01;
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeJsSphere;