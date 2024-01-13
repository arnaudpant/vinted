import { Timestamp } from 'firebase/firestore';

export type ProductFakeApi = {
    category: string,
    description: string,
    id: number,
    image: string
    price: number,
    rating: {
        count: number,
        rate: number
    }
    title: string
}

export type SuggestSearchList = {
    brand: string,
    views: number
}
// Données primaires de Firebase
export interface UserInterface {
  // Données primaires
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  // Données de la collection de la base de donnée
  userDocument?: UserDocument;
}

export interface UserDocument {
  photoURL: string;
  uid: string;
  inscription: Timestamp;
  login: string;
  // Champs Ajouter un champ ds Firestore
}

export type Action = 'init' | 'connexion' | 'inscription' | 'password-forget';

export type ScrollAction = 'left' | 'right' | 'both';

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
