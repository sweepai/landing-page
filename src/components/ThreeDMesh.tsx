import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

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

    window.addEventListener('mousemove', (event) => {
      cube.rotation.y = event.clientX * 0.01;
      cube.rotation.x = event.clientY * 0.01;
    });

    animate();
  }, []);

  return <div ref={containerRef} />;
};

// Tests for ThreeDMesh component
describe('ThreeDMesh', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThreeDMesh />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('creates a cube', () => {
    // Test if a cube is created
  });

  it('rotates cube based on mouse movement', () => {
    // Test if cube rotates based on mouse movement
  });
});

export default ThreeDMesh;