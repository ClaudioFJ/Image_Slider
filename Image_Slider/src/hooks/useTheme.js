import { useEffect, useState } from 'react';

export const THEME_STORAGE_KEY = 'wild-stories-theme';

export const isDarkTheme = (theme) => theme === 'dark';

// Escolha salva no localStorage > preferência do sistema > tema claro.
export function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Aplica o tema no <html> para o Tailwind e para o navegador (scrollbars, formulários).
export function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', isDarkTheme(theme));
  root.style.colorScheme = theme;
}

// Hook que mantém o tema sincronizado entre o estado do React, o <html> e o localStorage.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    isDark: isDarkTheme(theme),
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
