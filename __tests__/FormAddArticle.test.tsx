/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import FormAddArticle from '../src/components/form-add-article/FormAddArticle';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';

const renderNewArticle = () => {
  render(<FormAddArticle />);
};

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

test('Le composant appelle la fonction addArticleToSell avec les données du formulaire et réinitialise le formulaire après la soumission', () => {
  renderNewArticle();


  // Remplir les champs du formulaire avec des données valides
  userEvent.type(screen.getByLabelText(/titre/i), 'Chemise sésame verte');
  userEvent.type(
    screen.getByLabelText(/décris ton article/i),
    'Portée quelques fois, taille correctement',
  );
  userEvent.selectOptions(screen.getByLabelText(/catégorie/i), 'femmes');
  userEvent.type(screen.getByLabelText(/prix/i), '15');
  // Simuler un clic sur le bouton envoyer
  userEvent.click(screen.getByTestId(/ajouter/i));


  // Vérifier que les champs du formulaire sont réinitialisés
  expect(screen.getByLabelText(/titre/i)).toHaveValue('');
  expect(screen.getByLabelText(/décris ton article/i)).toHaveValue('');
  expect(screen.getByLabelText(/catégorie/i)).toHaveValue(
    'Sélectionne une catégorie',
  );
  expect(screen.getByLabelText(/prix/i)).toHaveValue(null);

});
