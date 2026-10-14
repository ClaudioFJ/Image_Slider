import cachorro from '../images/Cachorro.jpg';
import urso from '../images/Urso.jpg';
import panda from '../images/Panda.jpg';
import leao from '../images/Leao.jpg';
import girafa from '../images/Girafa.jpg';

// Uma única fonte de dados sincroniza as imagens e suas descrições.
export const slides = [
    {
      id: 'cachorros', animal: 'Cachorrinhos', badge: 'CÃES',
      image: cachorro, alt: 'Filhotes de cachorro em um campo florido',
      summary: 'Pequenos companheiros, grandes personalidades.',
      description: 'Raças pequenas são conhecidas por sua curiosidade, energia e apego aos tutores.',
    },
    {
      id: 'urso', animal: 'Urso', badge: 'URSOS',
      image: urso, alt: 'Filhote de urso junto a um urso adulto',
      summary: 'Força, cuidado e vida selvagem.',
      description: 'Ursos vivem em diversos habitats e apresentam dietas e comportamentos variados.',
    },
    {
      id: 'panda', animal: 'Panda-gigante', badge: 'PANDA-GIGANTE',
      image: panda, alt: 'Pandas descansando em seu habitat',
      summary: 'Calmo, curioso e inconfundível.',
      description: 'O panda-gigante vive na China, alimenta-se principalmente de bambu e é um excelente escalador.',
    },
    {
      id: 'leao', animal: 'Leão', badge: 'LEÕES',
      image: leao, alt: 'Leoa descansando em um galho',
      summary: 'Um grande felino social.',
      description: 'Leões vivem em grupos sociais e são predadores habilidosos.',
    },
    {
      id: 'girafa', animal: 'Girafa', badge: 'GIRAFAS',
      image: girafa, alt: 'Duas girafas na savana',
      summary: 'A maior altura entre os animais terrestres.',
      description: 'Seu pescoço comprido permite alcançar folhas no alto das árvores africanas.',
    },
  ];