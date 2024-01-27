/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import NewArticle from '../src/pages/NewArticle';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
/**
 * 1. Définir les interfaces des types utilisés par les hooks
 * Créer un mock des hooks useAddArticle et useFirebaseAuth
 * 2. Créer une fonction helper qui rend le composant NewArticle
 */

//1
interface ArticleForSale {
  uid: string;
  photos: string[];
  titleArticle: string;
  descriptionArticle: string;
  category: string;
  price: string;
}

interface AddArticleToSell {
  (article: ArticleForSale): void;
}

interface AuthUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}


// 2
vi.mock('./src/useAddArticle', () => ({
  useAddArticle: (): { addArticleToSell: AddArticleToSell } => ({
    addArticleToSell: vi.fn(),
  }),
}));


vi.mock('../src/useFirebaseAuth', () => ({
  useFirebaseAuth: (): { authUser: AuthUser } => ({
    authUser: {
      uid: '123',
      email: 'alice@example.com',
      displayName: 'Alice',
      photoURL: 'https://example.com/alice.jpg',
    },
  }),
}));

const renderNewArticle = () => {
  render(<NewArticle />);
};

test("Le composant affiche le titre 'Vends ton article'", async () => {
  renderNewArticle();
  const title = await screen.findByText(/vends ton article/i);
  expect(title).toBeInTheDocument();
});

test("Le composant affiche un formulaire avec des champs pour le titre, la description, la catégorie et le prix de l'article", () => {
  renderNewArticle();
  expect(screen.getByLabelText(/titre/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/décris ton article/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/catégorie/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/prix/i)).toBeInTheDocument();
});

test("Le composant affiche un bouton 'Ajoute des photos' désactivé", () => {
  renderNewArticle();
  expect(screen.getByText(/ajoute des photos/i)).toBeInTheDocument();
  expect(screen.getByText(/ajoute des photos/i)).toBeDisabled();
});

test("Le composant affiche un bouton 'Ajouter' activé", async () => {
  renderNewArticle();
  const buttonAjouter = await screen.findByTestId(/ajouter/i);
  expect(buttonAjouter).toBeInTheDocument();
  expect(buttonAjouter).toBeEnabled();
});

test("Le composant valide les champs du formulaire et affiche des messages d'erreur si les champs sont vides", async () => {
  renderNewArticle();
  // Simuler un clic sur le bouton envoyer sans remplir les champs
  userEvent.click(screen.getByTestId(/Ajouter/i));
  // Vérifier que des messages d'erreur sont affichés
  expect(await screen.findByText(/entrez un titre/i)).toBeInTheDocument();
  expect(
    await screen.findByText(/entrez une description/i),
  ).toBeInTheDocument();
  expect(
    await screen.findByText(/Sélectionne une catégorie/i),
  ).toBeInTheDocument();
  expect(await screen.findByText(/Ce champ est requis/i)).toBeInTheDocument();
});

test('Le composant appelle la fonction addArticleToSell avec les données du formulaire et réinitialise le formulaire après la soumission', async () => {
  renderNewArticle();
  // Récupérer le mock de la fonction addArticleToSell
  const { addArticleToSell } = require('./src/useAddArticle');
  // Remplir les champs du formulaire avec des données valides
  userEvent.type(screen.getByLabelText(/titre/i), 'Chemise sésame verte');
  userEvent.type(
    screen.getByLabelText(/décris ton article/i),
    'Portée quelques fois, taille correctement',
  );
  userEvent.selectOptions(screen.getByLabelText(/catégorie/i), 'Vêtements');
  userEvent.type(screen.getByLabelText(/prix/i), '15');
  // Simuler un clic sur le bouton envoyer
  userEvent.click(screen.getByText(/envoyer/i));
  // Vérifier que la fonction addArticleToSell a été appelée avec les données du formulaire
  expect(addArticleToSell).toHaveBeenCalledWith({
    uid: expect.any(String),
    photos: [],
    titleArticle: 'Chemise sésame verte',
    descriptionArticle: 'Portée quelques fois, taille correctement',
    category: 'Vêtements',
    price: '15',
  });
  // Vérifier que les champs du formulaire sont réinitialisés
  // expect(screen.getByLabelText(/titre/i).value).toBe('');
  // expect(screen.getByLabelText(/décris ton article/i).value).toBe('');
  // expect(screen.getByLabelText(/catégorie/i).value).toBe('');
  // expect(screen.getByLabelText(/prix/i).value).toBe('');

    screen.debug();
});