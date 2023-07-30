import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import logo from '../assets/icon.png';

const FlappySweep = () => {
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
  const [logoVelocity, setLogoVelocity] = useState({ x: 0, y: 0 });
  const [boxes, setBoxes] = useState<{x: number, y: number}[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const jump = () => {
    setLogoVelocity(prev => ({ ...prev, y: -5 }));
  };

  const playerHasNavigatedThroughObstacles = () => {
    // Check if the player's current position is beyond the last obstacle's position
    return boxes.length > 0 && logoPosition.x > boxes[boxes.length - 1].x;
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      jump();
    };

    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  const checkCollision = () => {
    for (let box of boxes) {
      if (logoPosition.x < box.x + 50 &&
          logoPosition.x + 50 > box.x &&
          logoPosition.y < box.y + 50 &&
          logoPosition.y + 50 > box.y) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (!gameOver) {
      // Update logo position and velocity
      // Generate and move boxes
      if (checkCollision()) {
        setGameOver(true);
      } else if (playerHasNavigatedThroughObstacles()) { // This function needs to be implemented
        setScore(prevScore => prevScore + 1);
      }
    }
  }, [logoPosition, logoVelocity, boxes, score, gameOver]);

  const startGame = () => {
    // Reset state and start game
  };

  return (
    <div>
      <Box as="img" src={logo} position="absolute" left={logoPosition.x} top={logoPosition.y} />
      {boxes.map((box, index) => (
        <Box key={index} position="absolute" left={box.x} top={box.y} w="50px" h="50px" bg="black" />
      ))}
  <Text fontSize="xl" position="absolute" top="0" w="100%" textAlign="center">Score: {score}</Text>
      <Button onClick={startGame} colorScheme="teal">Start</Button>
    </div>
  );
};

export default FlappySweep;