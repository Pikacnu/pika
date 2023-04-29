import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) setTheme(!!theme);
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return [theme, toggleTheme] as const;
}