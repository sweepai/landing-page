import React, { useState, useEffect, useRef } from 'react';

interface ParticlesProps {
  numParticles: number;
  particleSize: number;
  speed: number;
}

const Particles: React.FC<ParticlesProps> = ({ numParticles, particleSize, speed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const newParticles = [];
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        x: Math.random() * canvasRef.current.width,
        y: Math.random() * canvasRef.current.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * particleSize,
      });
    }
    setParticles(newParticles);
  }, [numParticles, particleSize, speed]);

  useEffect(() => {
    // Animate particles
    const ctx = canvasRef.current.getContext('2d');
    const animate = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [particles]);

  return <canvas ref={canvasRef} />;
};

export default Particles;