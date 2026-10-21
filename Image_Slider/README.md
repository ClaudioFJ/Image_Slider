# WILD / STORIES — Image Slider

Atividade SPA, React com Vite, Tailwind CSS v4, Lucide React, react-i18next e
modo claro/escuro.

## Executar

```bash
npm install
npm run dev
```

## Internacionalização (i18n)

A página está disponível em **português (pt)**, **inglês (en)** e **espanhol (es)**,
usando [i18next](https://www.i18next.com/) com [react-i18next](https://react.i18next.com/)
e `i18next-browser-languagedetector`.

### Estrutura

```
src/
├── i18n/
│   ├── index.js                     # configuração do i18next e idiomas suportados
│   └── locales/
│       ├── pt/translation.json      # idioma base (fallback)
│       ├── en/translation.json
│       └── es/translation.json
├── hooks/
│   └── useTheme.js                  # estado do tema (classe .dark no <html>)
└── components/
    ├── LanguageSwitcher.jsx         # seletor de idioma no cabeçalho
    └── ThemeToggle.jsx              # botão claro/escuro no cabeçalho
```

### Como funciona

- `src/i18n/index.js` inicializa o i18next com os recursos de cada idioma e
  registra os idiomas suportados (`pt`, `en`, `es`).
- A escolha do usuário é detectada nesta ordem: query string (`?lng=en`),
  `localStorage`, idioma do navegador e por fim `pt` como fallback.
- O idioma detectado é salvo no `localStorage` (`wild-stories-lang`) e
  normalizado (`pt-BR` → `pt`, `en-US` → `en`).
- O atributo `<html lang>` e o título da aba são sincronizados automaticamente.
- `src/components/LanguageSwitcher.jsx` troca o idioma em tempo de execução via
  `i18n.changeLanguage(code)`.

### Usando traduções nos componentes

```jsx
import { useTranslation } from 'react-i18next';

export default function Example() {
  const { t } = useTranslation();
  return <h1>{t('hero.title')}</h1>;
}
```

Interpolação de valores:

```jsx
t('controls.goToSlide', { number: 3 }); // "Ir para imagem 3"
```

### Adicionando um novo idioma

1. Crie `src/i18n/locales/<codigo>/translation.json` copiando uma tradução existente.
2. Registre o novo idioma em `supportedLanguages` e em `resources`
   (`src/i18n/index.js`).
3. Ele aparece automaticamente no seletor do cabeçalho.

## Tema claro / escuro

O botão de tema (ícone lua/sol) fica ao lado do seletor de idioma no cabeçalho.

- `src/hooks/useTheme.js` guarda o tema em `localStorage` (`wild-stories-theme`)
  e aplica a classe `dark` no elemento `<html>`.
- A preferência segue a ordem: escolha salva > `prefers-color-scheme` do sistema >
  tema claro.
- No Tailwind v4 o modo escuro por classe é habilitado com
  `@custom-variant dark (&:where(.dark, .dark *));` em `src/index.css`.
- As cores do tema são variáveis CSS (`--color-ink`, `--color-mauve`,
  `--color-lavender`, `--color-surface`, `--color-surface-soft`, `--color-line`,
  `--color-grid-line`). O bloco `.dark` em `src/index.css` redefine esses
  valores, então as classes utilitárias (`bg-surface`, `border-line`, ...)
  continuam iguais nos dois temas.
- Um script inline em `index.html` aplica o tema antes da renderização do React,
  evitando o "flash" de tema claro ao carregar a página.
