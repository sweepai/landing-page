import React, { useState, useEffect, useRef } from 'react';
import '@chakra-ui/react';
import logo from '../assets/icon.png';

const FlappySweep = () => {
  const [gameState, setGameState] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas ? canvas.getContext('2d') : null;

    // Game loop
    const gameLoop = () => {
      // Update game state
      // Handle user input
      // Draw game
    };

    // Start game loop
    requestAnimationFrame(gameLoop);
  }, []);

  return (
    <canvas ref={canvasRef} width={800} height={600}>
      <img src={logo} alt="Sweep logo" />
    </canvas>
  );
};

export default FlappySweep;