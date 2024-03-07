import { SEE_ALL, SEE_OTHERS, TypeCategory } from '@/types/types';

const categoriesHeader: TypeCategory[] = [
  {
    id: 1,
    title: 'Femmes',
    subCategories: [
      { id: 0, 
        title: SEE_ALL, 
        iconName: '/iconsSubCategories/see-all.png', 
        link: 'femmes',
        linkId: ""
      },
      {
        id: 1,
        title: 'Vêtements',
        iconName: '/iconsSubCategories/skirt.png',
        link: 'femmes',
        linkId: "vetements"
      },
      {
        id: 2,
        title: 'Chaussures',
        iconName: '/iconsSubCategories/shoes_woman.png',
        link: 'femmes',
        linkId: "chaussures"
      },
      { 
        id: 99, 
        title: SEE_OTHERS, 
        iconName: '/iconsSubCategories/dot-others.png', 
        link: 'femmes',
        linkId: "other"
      },
    ],
  },
  {
    id: 2,
    title: 'Hommes',
    subCategories: [
      { 
        id: 0, 
        title: SEE_ALL, 
        iconName: '/iconsSubCategories/see-all.png', 
        link: 'hommes',
        linkId: "" 
      },
      {
        id: 1,
        title: 'Vêtements',
        iconName: '/iconsSubCategories/t-shirt.png',
        link: 'hommes',
        linkId: "vetements"
      },
      {
        id: 2,
        title: 'Chaussures',
        iconName: '/iconsSubCategories/manshoes.png',
        link: 'hommes',
        linkId: "chaussures"
      },
      { 
        id: 99, 
        title: SEE_OTHERS, 
        iconName: '/iconsSubCategories/dot-others.png', 
        link: 'hommes',
        linkId: "other" 
      },
    ],
  },

  {
    id: 3,
    title: 'Enfants',
    subCategories: [
      { 
        id: 0, 
        title: SEE_ALL, 
        iconName: '/iconsSubCategories/see-all.png', 
        link: 'enfants',
        linkId: "" 
      },
      {
        id: 1,
        title: 'Filles',
        iconName: '/iconsSubCategories/skirt.png',
        link: 'enfants',
        linkId: "fille"
      },
      {
        id: 3,
        title: 'Garçons',
        iconName: '/iconsSubCategories/boy.png',
        link: 'enfants',
        linkId: "garcon"
      },
      { 
        id: 99, 
        title: SEE_OTHERS, 
        iconName: '/iconsSubCategories/dot-others.png', 
        link: 'enfants',
        linkId: "other"
      },
    ],
  },
  {
    id: 4,
    title: 'Maison',
    subCategories: [
      { id: 0, 
        title: SEE_ALL, 
        iconName: '/iconsSubCategories/see-all.png', 
        link: 'maison',
        linkId: "" 
      },
      {
        id: 1,
        title: 'Textiles',
        iconName: '/iconsSubCategories/tissue.png',
        link: 'maison',
        linkId: "textile" 
      },
      {
        id: 2,
        title: 'Décoration',
        iconName: '/iconsSubCategories/vase.png',
        link: 'maison',
        linkId: "decoration" 
      },
      { 
        id: 99, 
        title: SEE_OTHERS, 
        iconName: '/iconsSubCategories/dot-others.png', 
        link: 'maison',
        linkId: "other" 
      },
    ],
  },
  {
    id: 5,
    title: 'Divertissement',
    subCategories: [
      { 
        id: 0, 
        title: SEE_ALL, 
        iconName: '/iconsSubCategories/see-all.png', 
        link: 'divertissement',
        linkId: "" 
      },
      {
        id: 1,
        title: 'Jeux vidéos et consoles',
        iconName: '/iconsSubCategories/videogamecontroller.png',
        link: 'divertissement',
        linkId: "console" 
      },
      {
        id: 2,
        title: 'Jeux et puzzles',
        iconName: '/iconsSubCategories/chess.png',
        link: 'divertissement',
        linkId: "jeux" 
      },
      { 
        id: 99, 
        title: SEE_OTHERS, 
        iconName: '/iconsSubCategories/dot-others.png', 
        link: 'divertissement',
        linkId: "other" 
      },
    ],
  },
  {
    id: 6,
    title: 'Animaux',
    subCategories: [
      { 
        id: 0, 
        title: SEE_ALL, 
        iconName: '/iconsSubCategories/see-all.png', 
        link: 'animaux',
        linkId: "" 
      },
      {
        id: 1,
        title: 'Chiens',
        iconName: '/iconsSubCategories/dog.png',
        link: 'animaux',
        linkId: "chiens" 
      },
      {
        id: 2,
        title: 'Chats',
        iconName: '/iconsSubCategories/cat.png',
        link: 'animaux',
        linkId: "chats" 
      },
      { 
        id: 99, 
        title: SEE_OTHERS, 
        iconName: '/iconsSubCategories/dot-others.png', 
        link: 'animaux',
        linkId: "other" 
      },
    ],
  },
];

export default categoriesHeader;
