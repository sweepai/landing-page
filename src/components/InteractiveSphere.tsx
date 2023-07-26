import React, { Component } from 'react';
import * as THREE from 'three';

class InteractiveSphere extends Component {
    style?: React.CSSProperties;
    mount!: HTMLDivElement | null;
    renderer!: THREE.WebGLRenderer;

    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount!.appendChild(renderer.domElement);
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Change the color of the sphere to white
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        const light = new THREE.PointLight(0xffffff, 1, 100); // Add a light source to the scene
        light.position.set(0, 0, 50);
        scene.add(light);
        camera.position.z = 5;
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        window.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0) {
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
            }
        });
        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();
    }

    componentWillUnmount() {
        this.mount!.removeChild(this.renderer.domElement);
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        );
    }
}

export default InteractiveSphere;