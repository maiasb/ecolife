import { useEffect, useCallback, useState, useMemo } from 'react';

const useBreakpoint = (
  breakpoint: number,
  callback?: (event: UIEvent) => void,
) => {
  const isSSR = useMemo(() => typeof window === 'undefined', []);
  const [isOnBreakpoint, setIsOnBreakpoint] = useState(
    isSSR ? false : breakpoint > window.innerWidth,
  );

  const handleOnResize = useCallback(
    (event: UIEvent) => {
      setIsOnBreakpoint(breakpoint > window.innerWidth);
      if (window.innerWidth > breakpoint) {
        callback?.(event);
      }
    },
    [breakpoint, callback],
  );

  useEffect(() => {
    window.addEventListener('resize', handleOnResize, { passive: true });

    return () => window.removeEventListener('resize', handleOnResize);
  }, [handleOnResize]);

  return { isOnBreakpoint };
};

export default useBreakpoint;
