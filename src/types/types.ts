/**
 * FIREBASE
 */

import { Timestamp } from 'firebase/firestore';


export type SuggestSearchList = {
  brand: string;
  views: number;
};

// Données primaires de Firebase
export type UserInterface = {
  // Données primaires
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  // Données de la collection de la base de donnée
  userDocument?: UserDocument;
};

/**
 * FIRESTORE
 */
export type UserDocument = {
  photoURL: string;
  uid: string;
  inscription: Timestamp;
  login: string;
  listArticlesForSale: ArticleForSale[];
  listArticlesFavoris: string[];
  description: string | null;
  country: string;
  city: string;
  displayCityInProfile: boolean;
  language: string;
  abonnements: number,
  abonnes: number,
  stars: number,
  evaluations: number,
  argent: number
};

export type ArticlesInterface = {
  fullListArticlesForSale: ArticleForSale[] | []
}

export type Action = 'init' | 'connexion' | 'inscription' | 'password-forget';

export type ScrollAction = 'left' | 'right' | 'both';
/**
 * PAGE VENDRE
 */
export type ArticleForSale = {
  uid: string;
  photos: string[];
  titleArticle: string;
  descriptionArticle: string;
  category: CategoriesArticles;
  subCategory: SubCategoriesArticles;
  brandArticle?: string;
  etat: EtatForSale;
  color: string,
  price: number;
  like: number;
  userInfos: UserInfos
};

export type UserInfos = {
  userId: string
  photoURL: string;
  login: string;
  city: string;
  stars: number,
  evaluations: number
}
export type CategoriesArticles =
  | 'femmes'
  | 'hommes'
  | 'enfants'
  | 'maison'
  | 'divertissement'
  | 'animaux';

export type SubCategoriesArticles = "vetements" | "chaussures" | "fille" | "garcon" | "textile" | "decoration" | "console" | "jeux" | "chiens" | "chats" | "other";

export type EtatForSale = "Neuf" | "Très bon état" | "Bon état" | "Etat correct" | "Mauvais état" | "Très mauvais état"

export type LinkLabel =
  | 'A propos de VendLe'
  | 'Carrière'
  | 'Le développement durable'
  | 'Presse'
  | 'Publicités'
  | 'Comment ça marche ?'
  | "Vérification de l'article"
  | 'Applications mobiles'
  | 'Tableau de bord'
  | 'VendLe Pro'
  | 'Guide VendLe Pro'
  | "Centre d'aide"
  | 'Vendre'
  | 'Acheter'
  | 'Confiance et sécurité'
  | 'Forum'
  | 'Politique de Confidentialité'
  | 'Politique de cookies'
  | 'Paramètres des cookies'
  | 'Termes et Conditions'
  | 'Notre plateforme'
  | 'Conditions de vente Pro'
  | "Conditions d'utilisation Pro";

export type FakeUser = {
  id: number;
  name: string;
  image: string;
  avatar: string;
  comment?: string
};

export type FakeProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  creationAt: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  subCategory: string
  images: string[];
};

export type FakeCategory = {
  id: number;
  name: string;
  image: string;
};

export type TypeCategory = {
  id: number;
  title: string;
  subCategories: TypeSubCategory[];
};
export type NavigationVintedPages = {
  title: string;
  navigationTitles: { description: string; path?: string }[];
};
export type TypeSubCategory = {
  id: number;
  link: string;
  title: string;
  iconName?: string;
  linkId: string
};

export const SEE_ALL = 'Voir tout'
export const SEE_OTHERS = 'Autres'

export type User = {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
};
