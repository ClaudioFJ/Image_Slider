import cachorro from '../images/Cachorro.jpg';
import urso from '../images/Urso.jpg';
import panda from '../images/Panda.jpg';
import leao from '../images/Leao.jpg';
import girafa from '../images/Girafa.jpg';

// Uma única fonte de dados sincroniza as imagens e suas descrições.
// Cada item aponta para a chave de tradução que guarda os textos em pt/en/es.
export const slides = [
  { id: 'cachorros', image: cachorro, translationKey: 'slides.cachorros' },
  { id: 'urso', image: urso, translationKey: 'slides.urso' },
  { id: 'panda', image: panda, translationKey: 'slides.panda' },
  { id: 'leao', image: leao, translationKey: 'slides.leao' },
  { id: 'girafa', image: girafa, translationKey: 'slides.girafa' },
];
