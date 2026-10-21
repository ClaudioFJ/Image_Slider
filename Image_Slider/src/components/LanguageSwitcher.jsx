import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { supportedLanguages, toBaseLanguage } from '../i18n/index.js';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const currentCode = toBaseLanguage(i18n.resolvedLanguage || i18n.language);
  const current = supportedLanguages.find((language) => language.code === currentCode)
    ?? supportedLanguages[0];

  // Fecha o menu ao clicar fora dele ou pressionar Esc.
  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  function selectLanguage(code) {
    i18n.changeLanguage(code);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative z-30">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="language-switcher-panel"
        aria-label={t('language.label')}
        className="flex cursor-pointer items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-2.5 text-mauve shadow-sm transition hover:-translate-y-0.5 hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve"
      >
        <Globe size={18} />
        <span className="text-sm font-bold tracking-[.16em]">{current.short}</span>
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        id="language-switcher-panel"
        aria-hidden={!open}
        className={`absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-2xl border border-line bg-surface p-1.5 shadow-xl shadow-violet-200/50 transition-all duration-200 dark:shadow-black/40 ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-0.5">
          {supportedLanguages.map((language) => {
            const selected = language.code === current.code;
            return (
              <li key={language.code}>
                <button
                  type="button"
                  onClick={() => selectLanguage(language.code)}
                  tabIndex={open ? 0 : -1}
                  aria-current={selected ? 'true' : undefined}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                    selected
                      ? 'bg-surface-soft text-mauve'
                      : 'text-slate-600 hover:bg-surface-soft/70 hover:text-mauve dark:text-slate-300'
                  }`}
                >
                  <span>{language.label}</span>
                  {selected && <Check size={16} />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
