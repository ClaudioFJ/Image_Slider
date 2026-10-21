import { useTranslation } from 'react-i18next';
import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import avatar from './images/avatar.jpg';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-ink">
      <Background />
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-line py-10">
          <div className="flex flex-col items-start gap-3">
            <strong className="text-mauve tracking-[.24em]">{t('brand.name')}</strong>
            <img src={avatar} alt={t('header.avatarAlt')}
              className="size-12 rounded-full object-cover ring-2 ring-violet-200 shadow-sm dark:ring-violet-500/40" />
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </header>
        <main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <section aria-label={t('hero.eyebrow')} className="space-y-7">
            <p className="text-xs font-bold tracking-[.2em] text-violet-600 dark:text-violet-400">
              {t('hero.eyebrow')}
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              {t('hero.subtitle')}
            </p>
          </section>
          <ImageSlider />
        </main>
        <footer className="py-10 text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500">
          {t('footer.stack')}
        </footer>
      </div>
    </div>
  );
}
