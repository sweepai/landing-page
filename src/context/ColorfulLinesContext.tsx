import React, { useState } from 'react';

const ColorfulLinesContext = React.createContext(null);

const ColorfulLinesProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const setColorfulLinesState = (newScrollPosition) => {
    setScrollPosition(newScrollPosition);
  };

  return (
    <ColorfulLinesContext.Provider value={{ scrollPosition, setColorfulLinesState }}>
      {children}
    </ColorfulLinesContext.Provider>
  );
};

export { ColorfulLinesContext, ColorfulLinesProvider };