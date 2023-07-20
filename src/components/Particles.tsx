import React, { useRef, useEffect } from 'react';

interface ParticlesProps {
  numParticles: number;
  particleSize: number;
  speed: number;
}

const Particles: React.FC<ParticlesProps> = ({ numParticles, particleSize, speed }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles
    // ...

    // Animate particles
    // ...

  }, [numParticles, particleSize, speed]);

  return <canvas ref={canvasRef} />;
};

export default Particles;