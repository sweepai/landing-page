import React, { useEffect } from 'react';
import { tsParticles } from 'tsparticles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

const FireworksParticles = () => {
  useEffect(() => {
    loadFireworksPreset(tsParticles);
    tsParticles.load('pricing-page', {
      preset: 'fireworks',
    });
  }, []);

  return null;
};

export default FireworksParticles;
