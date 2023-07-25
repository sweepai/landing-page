import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDMesh = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    meshRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    meshRef.current.addEventListener('mousedown', () => {
      // Handle mouse down event
    });

    meshRef.current.addEventListener('mousemove', () => {
      // Handle mouse move event
    });

    meshRef.current.addEventListener('mouseup', () => {
      // Handle mouse up event
    });

  }, []);

  return <div ref={meshRef} />;
};

export default ThreeDMesh;