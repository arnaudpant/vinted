import React, { useLayoutEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export { useWindowWidth };
