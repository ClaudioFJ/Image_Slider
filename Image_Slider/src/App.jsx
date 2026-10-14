import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import avatar from './images/avatar.jpg';

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-ink">
      <Background />
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-violet-100 py-10">
          <div className="flex flex-col items-start gap-3">
            <strong className="text-mauve tracking-[.24em]">WILD / STORIES</strong>
            <img src={avatar} alt="Meu avatar"
              className="size-12 rounded-full object-cover ring-2 ring-violet-200 shadow-sm" />
          </div>
        </header>
        <main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <section aria-label="Apresentação" className="space-y-7">
            <p className="text-xs font-bold tracking-[.2em] text-violet-600">
              EXPLORAÇÃO • VIDA SELVAGEM
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              A natureza em cada detalhe.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-500">
              Descubra espécies extraordinárias em uma experiência visual interativa.
            </p>
          </section>
          <ImageSlider />
        </main>
        <footer className="py-10 text-xs font-semibold tracking-widest text-slate-400">
          REACT • TAILWIND CSS • JAVASCRIPT
        </footer>
      </div>
    </div>
  );
}