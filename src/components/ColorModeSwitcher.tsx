import React, { useState } from 'react';
import { Switch } from '@chakra-ui/react';

const ColorModeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch isChecked={isDarkMode} onChange={toggleColorMode} />
  );
};

export default ColorModeSwitcher;
