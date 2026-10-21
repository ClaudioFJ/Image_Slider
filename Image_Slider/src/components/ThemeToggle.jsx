import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  const label = isDark ? t('theme.light') : t('theme.dark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      className="grid size-11 cursor-pointer place-items-center rounded-2xl border border-line bg-surface text-mauve shadow-sm transition hover:-translate-y-0.5 hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
