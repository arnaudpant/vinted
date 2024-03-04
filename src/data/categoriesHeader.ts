import { SEE_ALL, SEE_OTHERS, TypeCategory } from '@/types/types';

const categoriesHeader: TypeCategory[] = [
  {
    id: 1,
    title: 'Femmes',
    subCategories: [
      { id: 0, title: SEE_ALL, iconName: './iconsSubCategories/see-all.png', link: '/' },
      {
        id: 1,
        title: 'Vêtements',
        iconName: '/iconsSubCategories/skirt.png',

      },
      {
        id: 2,
        title: 'Chaussures',
        iconName: '/iconsSubCategories/shoes_woman.png',
      },
      { id: 99, title: SEE_OTHERS, iconName: './iconsSubCategories/dot-others.png', link: '/' },
    ],
  },
  {
    id: 2,
    title: 'Hommes',
    subCategories: [
      { id: 0, title: SEE_ALL, iconName: './iconsSubCategories/see-all.png', link: '/' },
      {
        id: 1,
        title: 'Vêtements',
        iconName: '/iconsSubCategories/t-shirt.png',
      },
      {
        id: 2,
        title: 'Chaussures',
        iconName: '/iconsSubCategories/manshoes.png',
      },
      { id: 99, title: SEE_OTHERS, iconName: './iconsSubCategories/dot-others.png', link: '/' },
    ],
  },

  {
    id: 3,
    title: 'Enfants',
    subCategories: [
      { id: 0, title: SEE_ALL, iconName: './iconsSubCategories/see-all.png', link: '/' },
      {
        id: 1,
        title: 'Filles',
        iconName: '/iconsSubCategories/skirt.png',
      },
      {
        id: 3,
        title: 'Garçons',
        iconName: '/iconsSubCategories/boy.png',
      },
      { id: 99, title: SEE_OTHERS, iconName: './iconsSubCategories/dot-others.png', link: '/' },
    ],
  },
  {
    id: 4,
    title: 'Maison',
    subCategories: [
      { id: 0, title: SEE_ALL, iconName: './iconsSubCategories/see-all.png', link: '/' },
      {
        id: 1,
        title: 'Textiles',
        iconName: '/iconsSubCategories/tissue.png',
      },
      {
        id: 2,
        title: 'Décoration',
        iconName: '/iconsSubCategories/vase.png',
      },
      { id: 99, title: SEE_OTHERS, iconName: './iconsSubCategories/dot-others.png', link: '/' },
    ],
  },
  {
    id: 5,
    title: 'Divertissement',
    subCategories: [
      { id: 0, title: SEE_ALL, iconName: './iconsSubCategories/see-all.png', link: '/' },
      {
        id: 1,
        title: 'Jeux vidéos et consoles',
        iconName: '/iconsSubCategories/videogamecontroller.png',
      },
      {
        id: 2,
        title: 'Jeux et puzzles',
        iconName: './iconsSubCategories/chess.png',
      },
      { id: 99, title: SEE_OTHERS, iconName: '/iconsSubCategories/dot-others.png', link: '/' },
    ],
  },
  {
    id: 6,

    title: 'Animaux',
    subCategories: [
      { id: 0, title: SEE_ALL, iconName: './iconsSubCategories/see-all.png', link: '/' },
      {
        id: 1,
        title: 'Chiens',
        iconName: '/iconsSubCategories/dog.png',
      },
      {
        id: 2,
        title: 'Chats',
        iconName: '/iconsSubCategories/cat.png',
      },
      { id: 99, title: SEE_OTHERS, iconName: './iconsSubCategories/dot-others.png', link: '/' },
    ],
  },
  {
    id: 7,
    title: 'A propos',
    link: '/'
    // navigation: [
    //   {
    //     title: 'Découvrir',
    //     navigationTitles: [
    //       { description: 'Comment ça marche' },
    //       { description: `Vérification de l'article` },
    //       { description: 'Applications mobiles' },
    //       { description: `Centre d'aide` },
    //       { description: 'Tableau de bord' },
    //       { description: 'Vinted Pro' },
    //       { description: 'Guide Vinted Pro' },
    //     ],
    //   },
    //   {
    //     title: 'Politiques',
    //     navigationTitles: [
    //       { description: 'Confiances et sécurité' },
    //       { description: 'Politique de confidentialité' },
    //       { description: 'Terme et conditions' },
    //       { description: 'Politiques de cookies' },
    //       { description: 'Conditions de vente Pro' },
    //       { description: "Conditions d'utilisation Pro" },
    //     ],
    //   },
    //   {
    //     title: 'Entreprise',
    //     navigationTitles: [
    //       { description: 'A propos de Vinted' },
    //       { description: 'Carrière' },
    //       { description: 'Eco-responsabilité' },
    //       { description: 'Presse' },
    //       { description: 'Publicités' },
    //     ],
    //   },

    //   {
    //     title: 'Vie privée',
    //     navigationTitles: [{ description: 'Paramètre des cookies' }],
    //   },
    // ],
  },
  // {
  //   id: 8,
  //   title: 'Notre plateforme',
  //   link: '/',
  // },
];

export default categoriesHeader;
