import React, { useState } from 'react';

const ColorfulLinesContext = React.createContext(null);

const ColorfulLinesProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const setColorfulLinesState = (newScrollPosition: number) => {
    setScrollPosition(newScrollPosition);
  };

  return (
    <ColorfulLinesContext.Provider value={{ scrollPosition, setColorfulLinesState } as { scrollPosition: number, setColorfulLinesState: (newScrollPosition: number) => void }}>
      {children}
    </ColorfulLinesContext.Provider>
    );
};

export { ColorfulLinesContext, ColorfulLinesProvider };
export {};