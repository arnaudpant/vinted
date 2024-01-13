/**
* FIREBASE
*/

import { Timestamp } from 'firebase/firestore';
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
  listArticlesForSale: ArticleForSale[]
  // Champs Ajouter un champ ds Firestore
}

export type Action = 'init' | 'connexion' | 'inscription' | 'password-forget';

/**
 * PAGE VENDRE 
 */
export type ArticleForSale = {
  photos:string[],
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
