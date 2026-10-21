import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SliderControls({ index, count, onPrevious, onNext, onSelect }) {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3" role="group" aria-label={t('controls.groupLabel')}>
      <button type="button" onClick={onPrevious} aria-label={t('controls.previous')}
        className="grid size-13 cursor-pointer place-items-center rounded-2xl border border-line bg-surface text-mauve shadow-sm transition hover:-translate-y-0.5 hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve">
        <ArrowLeft size={20} />
      </button>
      <button type="button" onClick={onNext} aria-label={t('controls.next')}
        className="grid size-13 cursor-pointer place-items-center rounded-2xl bg-mauve text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:bg-violet-600 dark:hover:bg-violet-500">
        <ArrowRight size={20} />
      </button>
      <div className="flex gap-2" role="group" aria-label={t('controls.selectLabel')}>
        {Array.from({ length: count }, (_, i) => (
          <button key={i} type="button" onClick={() => onSelect(i)}
            aria-label={t('controls.goToSlide', { number: i + 1 })}
            aria-current={i === index ? 'true' : undefined}
            className={`h-2.5 cursor-pointer rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve ${i === index ? 'w-7 bg-mauve' : 'w-2.5 bg-violet-200 hover:bg-violet-400 dark:bg-violet-700 dark:hover:bg-violet-500'}`}
          />
        ))}
      </div>
      <span aria-live="polite" className="ml-auto text-sm font-bold tabular-nums text-mauve">
        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
      </span>
    </div>
  );
}
