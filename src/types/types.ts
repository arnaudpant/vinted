/**
* FIREBASE
*/

import { Timestamp } from 'firebase/firestore';

export type ProductFakeApi = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

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
}

/**
 * FIRESTORE
 */
export type  UserDocument = {
  photoURL: string;
  uid: string;
  inscription: Timestamp;
  login: string;
  listArticlesForSale: ArticleForSale[];
  description: string | null;
  country: string;
  city: string;
  displayCityInProfile: boolean;
  language: string
}

export type Action = 'init' | 'connexion' | 'inscription' | 'password-forget';

export type ScrollAction = 'left' | 'right' | 'both';
/**
 * PAGE VENDRE 
 */
export type ArticleForSale = {
  uid: string,
  photos?:string[],
  titleArticle: string,
  descriptionArticle: string,
  category: CategoriesArticles,
  price: number
}
export type CategoriesArticles = 'Femmes' | 'Hommes' | 'Enfants' | 'Maison' | 'Divertissement' | 'Animaux'


export type LinkLabel =
  | 'A propos de Vinted'
  | 'Carrière'
  | 'Le développement durable'
  | 'Presse'
  | 'Publicités'
  | 'Comment ça marche ?'
  | "Vérification de l'article"
  | 'Applications mobiles'
  | 'Tableau de bord'
  | 'Vinted Pro'
  | 'Guide Vinted Pro'
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
};

export type FakeUserWithStatistic = FakeUser & {
  starsRating: number;
  numberOfReviews: number;
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
  images: string[];
};

export type FakeProductWithUserId = FakeProduct & { userId: number };

export type FakeCategory = {
  id: number;
  name: string;
  image: string;
};

export type TypeCategory = {
  id: number;
  title: string;
  subCategories?: TypeSubCategory[];
  navigation?: NavigationVintedPages[];
  link?: string;
};
export type NavigationVintedPages = {
  title: string;
  navigationTitles: { description: string; path?: string }[];
};
export type TypeSubCategory = {
  id: number;
  link?: string;

  title: string;
  iconName?: string;
  // Utile pour le "Voir tout"
  navLink?: string;
  subSubCategories?: TypeSubSubCategory[];
};
export type TypeSubSubCategory = { title: string; link?: string };
export const SEE_ALL = 'Voir tout' as const;
export const SEE_OTHERS = 'Autres' as const;

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
