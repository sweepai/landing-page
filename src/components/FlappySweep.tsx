import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import SweepLogo from './SweepLogo';
import SweepLogoComponent from './SweepLogoComponent';

const FlappySweep = () => {
  // Initialize game state
  const [gameState, setGameState] = useState({
    sweepPosition: { x: 0, y: 0 },
    boxes: [] as { x: number; y: number; }[],
  });

  // Add keydown event listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Space') {
        setGameState(prevState => ({
          ...prevState,
          sweepPosition: { ...prevState.sweepPosition, y: prevState.sweepPosition.y - 10 },
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Game loop
  useEffect(() => {
    // Update game state
    setGameState(prevState => ({
      ...prevState,
      sweepPosition: { ...prevState.sweepPosition, y: prevState.sweepPosition.y + 1 },
      boxes: prevState.boxes.map((box: { x: number; y: number; }) => ({ ...box, x: box.x - 1 })),
    }));
  }, [gameState]);

  // Render game elements
  return (
    <Box>
      <SweepLogoComponent style={{ left: gameState.sweepPosition.x, top: gameState.sweepPosition.y }} />
      {gameState.boxes.map((box, index) => (
        <Box key={index} style={{ left: box.x, top: box.y }} />
      ))}
    </Box>
  );
};

export default FlappySweep;