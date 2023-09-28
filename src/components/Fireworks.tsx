import React, { useEffect } from 'react';
import { tsParticles } from "tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Fireworks = () => {
  useEffect(() => {
    tsParticles.addPreset("fireworks", loadFireworksPreset);
    tsParticles.load("pricing-page", { preset: "fireworks" });
  }, []);

  return (
    <div id="pricing-page"></div>
  );
};

export default Fireworks;
