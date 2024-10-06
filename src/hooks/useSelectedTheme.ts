import { useEffect, useState } from 'react';

export const useSelectedTheme = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateDarkMode = () => {
      setIsDarkModeActive(darkModeQuery.matches);
    };

    updateDarkMode();

    darkModeQuery.addEventListener('change', updateDarkMode);

    return () => {
      darkModeQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);

  return { isDarkModeActive };
};
