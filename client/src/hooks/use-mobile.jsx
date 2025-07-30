import React, { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mediaQuery.addEventListener("change", onChange);

    // Set initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return !!isMobile;
}