import React, { createContext, useState } from 'react';

export const ScrollContext = createContext();

const ScrollWithContext = ({ children }) => {
  const [ left, setLeft] = useState(0);
  const [ top, setTop] = useState(0);

  const handleScroll = event => {
    setLeft(event.target.scrollLeft);
    setTop(event.target.scrollTop);
  }

  const context = { left, top };

  return (
    <div style={{ overflow: 'auto' }} onScroll={handleScroll}>
      <ScrollContext.Provider value={context}>
        {children}
      </ScrollContext.Provider>
    </div>
  );
};

export default ScrollWithContext;
